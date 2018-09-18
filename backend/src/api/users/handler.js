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
  const { idInfo, pwInfo } = ctx.request.body;

  let user;

  try {
    user = await User.findOne({userName: idInfo}).exec();
  } catch (e) {
    ctx.body = e
    return ctx.throw(500, e);
  }

  if(user) {
    if(user.password === pwInfo){
      ctx.body = { 
        message : `로그인 되었습니다.`,
        info : user
      }
      return;  
    } else {
      ctx.body = { 
        message : '비밀번호가 틀렸습니다.',
        error : 'pwInfo'
      }
      return;
    }
  } else {
    ctx.body = { 
      message : '존재하지 않는 아이디 입니다.',
      error : 'idInfo'
    }
    return;
  }
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