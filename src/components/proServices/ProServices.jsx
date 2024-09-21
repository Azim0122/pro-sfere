import React from 'react'
import "./ProServices.css"
import { NavLink } from 'react-router-dom'
import SlideHome from '../slideHome/SlideHome'
import HomeAll from '../../pages/pagesHome/homeAll/HomeAll'

function ProServices({ category }) {
  return (              
    <div className="boxss">

        {
          category == "Сервисы" && <div className="boxs">

            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => {
              return (<div className="box">
                <div className="box-top">
                  <span>{index + 1 < 10 ? "0" : ""}{index + 1}</span>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="box-bottom">
                  <p>PRO <br />Donate</p>
                </div>
              </div>)
            })}



          </div>
        }
        {
          category == "Новости" && <div className="boxs7">
            <div className="btns3">
                        <div className="search-buttons3">
                            <NavLink to={'/'}><button className='btn btn1'>Все</button></NavLink>
                            <NavLink to={'/pictures'}><button className='btn btn2'>Политика</button></NavLink>
                            <NavLink to={'/video'}><button className='btn btn3'>Спорт</button></NavLink>
                            <NavLink to={'/news'}><button className='btn btn4'>Музыка</button></NavLink>
                            <NavLink to={'/news'}><button className='btn btn5'>Кино</button></NavLink>
                            <NavLink to={'/news'}><button className='btn btn6'>Европа</button></NavLink>
                            <NavLink to={'/news'}><button className='btn btn7'>Россия</button></NavLink>
                            <NavLink to={'/news'}><button className='btn btn8'>Узбекистан</button></NavLink>
                            <button className='btnbtn5'>Ещё</button>
                        </div>
                    </div>
             <div className="container4">
                    
                    <div className="slide2">
                        <SlideHome />
                    </div>
                </div>
            
            <HomeAll /> 
           </div>        
        }
        {
          category == "Виджеты" &&<div className="boxs3">

{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
  return (<div className="box3">
   
    
  </div>)
})}
          </div>
        }
      

    </div>
  )
}

export default ProServices 