import React from 'react';

const Profile = () => {
  
  return (
    <main className="profile">
      <header className="profile__header">
        <p className="profile__welcome">Привет, user!</p>
        <button className="profile__logout-button" >Выйти</button>
      </header>
      <section className="profile__info">
        <h2 className="profile__info-heading">Информация о профиле</h2>
        <p><strong>Email:</strong> 1234@mail.ru</p>
        {/* Дополнительная информация о пользователе */}
      </section>
    </main>
  );
};

export default Profile;
