const User = require('models/user')

exports.check = async (ctx) => {
  const { name } = ctx.params;

  let user;

  try {
    user = await User.findOne({userName: name}).exec();
  } catch (e) {
    if(e.name === 'CastError'){
      ctx.status = 400;
      return
    }
    return ctx.throw(500, e);
  }

  if(!user) {
    return ctx.body = "pass"
  } else {
    return ctx.body = "fail"
  }
}

exports.login = async (ctx) => {
  const { id, pw } = ctx.request.body;

  // let user;

  // try {
  //   user = await User.findOne({userName: name}).exec();
  // } catch (e) {
  //   if(e.name === 'CastError'){
  //     ctx.status = 400;
  //     return
  //   }
  //   return ctx.throw(500, e);
  // }

  // if(!user) {
  //   ctx.status = 404;
  //   ctx.body = { message : 'user not found'}
  //   return;
  // }

  // ctx.body = "Login Success \n \n" + user;
}

exports.delete = async (ctx) => {
  const { name } = ctx.params;

  try{
    await User.findOneAndDelete({userName: name}).exec();
  } catch (e) {
    if(e.name === "CastError"){
      ctx.status = 400;
      return;
    }
  }
  ctx.body = "Delete Complete"
  ctx.status = 204;
}

exports.signup = async (ctx) => {
  const { userName, email, password, createdAt } = ctx.request.body;
  const user = new User({
    userName, email, password, createdAt
  });
  try {
    await user.save();
  } catch(e) {
    return ctx.throw(500, e);
  }

  ctx.body = "Signup Success \n \n" + user;
}

exports.update = async (ctx) => {
  const { name } = ctx.params;

  let user;

  try {
    user = await User.findOneAndUpdate(name, ctx.request.body, {
      new: true
    });
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = "Update success \n \n" + user;
}

exports.list = async (ctx) => {
  let users;

  try {
    users = await User.find()
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = "get list success \n \n" + users;
}