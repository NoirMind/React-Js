import React from 'react'

function FooterPage() {
  return (
    <div className='container footer-page'>
        <div className="main-footer">
            <div className="main-footer-second">
                <p className='main-footer-p'><a href="#">О нас</a></p>
                <p className='main-footer-p'><a href="#">Пункт Выдачи</a></p>
                <p className='main-footer-p'><a href="#">Вакансии</a></p>
            </div>
            <div className="main-footer-second">
                <p className='main-footer-p'><a href="#">Пользователям</a></p>
                <p className='main-footer-p'><a href="#">Связатся с нами</a></p>
                <p className='main-footer-p'><a href="#">Вопрос - ответ</a></p>
            </div>
            <div className="main-footer-second">
                <p className='main-footer-p'><a href="#">Для предпринимателей</a></p>
                <p className='main-footer-p'><a href="#">Продовайте на Узум</a></p>
                <p className='main-footer-p'><a href="#">Вход для Продавтсов</a></p>
            </div>
        </div>
    </div>
  )
}

export default FooterPage