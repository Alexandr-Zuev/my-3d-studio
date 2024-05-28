import React from 'react';

const Slider = () => {
  const slides = [
    {
      id: 'beach',
      header: 'Бутылка Closca',
      title: 'Пляж',
      price: '€ 39.90',
      contentTitle: 'Через 20 лет в наших океанах может быть больше пластика, чем рыбы.',
      contentSubtitle: 'Загрязнение пластиком ежегодно наносит вред более чем 100 000 морских животных. Для разложения одной пластиковой бутылки требуется около 450 лет.',
      bgImg: 'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530',
      bottleImg: 'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514',
    },
    {
      id: 'savanna',
      header: 'Бутылка Closca',
      title: 'Саванна',
      price: '€ 39.90',
      contentTitle: 'Площадь Земли, затронутая опустыниванием, примерно в 11 раз больше площади Индии.',
      contentSubtitle: 'Саванны действуют как углеродный поглотитель, поглощая CO2 из атмосферы и помогая поддерживать баланс глобальных температур.',
      bgImg: 'https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      bottleImg: 'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557',
    },
    {
      id: 'glacier',
      header: 'Бутылка Closca',
      title: 'Ледник',
      price: '€ 39.90',
      contentTitle: 'Ледники содержат 75% пресной воды в мире.',
      contentSubtitle: 'Последствия таяния ледников включают потерю биоразнообразия, повышение уровня моря и дефицит пресной воды.',
      bgImg: 'https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg',
      bottleImg: 'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Glacier_OK.png?v=7185877315400411030',
    },
    {
      id: 'coral',
      header: 'Бутылка Closca',
      title: 'Кораллы',
      price: '€ 39.90',
      contentTitle: 'К 2030 году мы потеряем 60% наших коралловых рифов.',
      contentSubtitle: 'Коралловые рифы важны для людей, так как они защищают побережья и являются источником питательных веществ и местом обитания для тысяч морских видов.',
      bgImg: 'https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3260&q=80',
      bottleImg: 'https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=14596995446202437119',
    },
  ];

  return (
    <div className="mySwiper">
      <div className="main-wrapper swiper-wrapper">
        {slides.map((slide, index) => (
          <div className="main swiper-slide" id={slide.id} key={index}>
            <div className="left-side">
              <div className="main-wrapper">
                <h3 className="main-header">{slide.header}</h3>
                <h1 className="main-title">{slide.title}</h1>
                <h2 className="main-subtitle">{slide.price}</h2>
              </div>
              <div className="main-content">
                <div className="main-content__title">{slide.contentTitle}</div>
                <div className="main-content__subtitle">{slide.contentSubtitle}</div>
                <div className="more-menu">
                  Купить сейчас
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="-5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="right-side__img">
                <img className="bottle-bg" src={slide.bgImg} alt="" />
                <img className="bottle-img" src={slide.bottleImg} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-wrapper">
        <div className="swiper-button swiper-prev-button">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l-4 4m0 0l4 4m-4-4H3"></path>
          </svg>
        </div>
        <div className="swiper-button swiper-next-button">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7 8l4 4m0 0l-4 4m4-4H21"></path>
          </svg>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Slider;