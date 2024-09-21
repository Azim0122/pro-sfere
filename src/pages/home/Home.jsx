import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import ProServices from '../../components/proServices/ProServices'
import { Link, NavLink } from 'react-router-dom'
function Home() {
  
  const [category, setCategory] = React.useState('Сервисы');  






  return (
    <>
    <nav>
      <Navbar />
    </nav>
       <main>

        <section className='section_1'>
          <div className="container">
        <div className="ai"> 
        <NavLink to={"/"}><img src="./public/imgs/earth.svg" alt="" /> Поиск</NavLink>
        <NavLink to={"/ai-sferius"}><img src="./public/imgs/Shape Ai.svg" alt="" />AI Sferius</NavLink>
        </div>
          <h1>Добрый день, Гость!</h1>
          <span className='logo2'> Чем можем быть полезны? </span>
 
          <div className="search">
         

                            <div className="search-input2">
                          <form action="">
                          <input type="input" name="focus" required class="search-box" placeholder="Введите ваш запрос" />
                                <button class="close-icon" type="reset"></button>
                                <button className='button-srch'><Link to={'/search'}><i class='bx bx-globe'></i></Link></button>
                               
                          </form>
                       
                          <div className="search-add">
                          <Link><div>Nike  <b>в Ташкенте</b> <span><i class="fa-solid fa-arrow-up"></i></span>  </div></Link>
                         <Link> <div>Nike  <b>или Adidas</b> <span><i class="fa-solid fa-arrow-up"></i></span> </div></Link>
                          <Link><div>Nike  <b>air force 1</b> <span><i class="fa-solid fa-arrow-up"></i></span> </div></Link>
                          <Link><div>Nike  <b>air force 1 low black and white</b> <span><i class="fa-solid fa-arrow-up"></i></span> </div></Link>
                         <Link> <div>Nike  <b>air force 1 low black and white</b> <span><i class="fa-solid fa-arrow-up"></i></span> </div></Link>
                          <Link><div>Nike  <b>air force 1 low black and white</b> <span><i class="fa-solid fa-arrow-up"></i></span> </div></Link>
                          </div>
                          <div className="search-info">
            <div className="weather">
            <i class='bx bx-sun'></i> 
            <i class='bx bx-cloud'></i>
            <span>+25°</span>
            </div>
            <div className="courses">
            <i class='bx bx-dollar' ></i> 
            <i class='bx bx-ruble' ></i>  
            <span>12 150.20</span>
            </div>
           </div>
                            </div>
           
          </div>
          </div>
        </section>

        <section>
          <div className=" container4">
          <div className="links">
              <ul>
                <li style={category=="Сервисы" ? {color: "rgba(95, 224, 216, 1)"}:{}} onClick={()=>{setCategory("Сервисы")}}   >Сервисы</li>
                <li style={category=="Новости" ? {color: "rgba(95, 224, 216, 1)"}:{}} onClick={()=>{setCategory("Новости")}}>Новости</li>
                <li style={category=="Виджеты" ? {color: "rgba(95, 224, 216, 1)"}:{}} onClick={()=>{setCategory("Виджеты")}}>Виджеты</li>
              </ul>
          </div>
          <hr />
            <ProServices category={category} />
          </div>
        </section>
       </main>
    </>
  )
}

export default Home