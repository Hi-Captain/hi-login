import React from 'react';
import './Main.scss';

const Main = ({userId}) => {
  console.log(Boolean(userId))
  return (
    <section className="main">
      {userId ? `반갑습니다. ${userId}님` : "메인 페이지 입니다."}
    </section>
  );
};

export default Main;