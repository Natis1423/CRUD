import React from "react";
import { Link } from "react-router-dom";
import "../src/componente/estilos/muj.css"
import Qs from"../src/componente/images/QS.png"
import Donde from "../src/componente/images/Donde en.png"
import PP from"../src/componente/images/prp.jpg"
import Face from"../src/componente/images/facebook.svg"
import Yotu from"../src/componente/images/youtube.svg"
import Twi from"../src/componente/images/twitter.svg"
import Lef from "../src/componente/images/leftarrow.svg"
import B from "../src/componente/images//B.png"
import Cuer from "../src/componente/images//ima-cuerpo-1_-10.jpg"
const Body_ini = (props) => (
<div className="kjdsa">
      <div className="hero">
        <nav className="nav container">
            <div className="nav__logo">
                <h2 className="nav__title">Mujer Cuidadora</h2>
            </div>

            <ul className="nav_link nav_link--menu">
                <li className="nav__items">
                    <a href="#" className="nav__links"></a>
                </li>
                <li className="nav__items">
                <Link to="/propu"><button className="nav__links">Proponer Manzana</button></Link>  
                </li>
                <li className="nav__items">
                    <Link to="/inicio"><button className="nav__links">Cerrar Sesion</button></Link>
                </li>

                <img src={PP} className="nav__close"/>
            </ul>

            <div className="nav__menu">
                <img src={PP}  className="nav__img"/>
            </div>
        </nav>

        <section className="hero__container container">
            <h1 className="hero__title">Mujer Cuidadora.</h1>
            <p className="hero__paragraph">
                Encuentra aquí los servicio sque te ayudarán aa cumplir tus sueños
            </p>

        </section>
    </div>

        <section className="container about">
            <h2 className="subtitle">Conoce las Manzanas Del Cuidado</h2>
            <p className="about__paragraph">
                Mira información sobre nosotros
            </p>

            <div className="about__main">
                <article className="about__icons">
                    <img src={Qs} className="about__icon"/>
                    <h3 className="about__title">Qué son</h3>
                    <p className="about__paragrah">
                        Las Manzanas del Cuidado son espacios dedicados a las mujeres cuidadoras de Bogotá, 
                        donde tienen acceso a una variedad de servicios gratuitos proporcionados por el Distrito.
                        Estos servicios abarcan áreas como educación, recreación, emprendimiento, lavandería y más. 
                        El propósito principal de estas iniciativas es aliviar la carga del cuidado, 
                        mejorar la calidad de vida de las mujeres y generar oportunidades significativas. 
                        En la actualidad, Bogotá cuenta con 19 Manzanas del Cuidado distribuidas en distintas localidades, 
                        y esta innovación urbana ha recibido reconocimientos a nivel internacional.
                    </p>
                </article>

                <article className="about__icons">
                    <img src={Donde} className="about__icon"/>
                    <h3 className="about__title">Dónde encontrarlas</h3>
                    <p className="about__paragrah">
                        Las Manzanas del Cuidado se pueden ubicar en las siguientes localidades de Bogotá:
                        Bosa
                        Ciudad Bolívar
                        San Cristóbal
                        Centro de Bogotá (Candelaria y Santa Fe)
                        Chapinero
                        Engativá
                        Kennedy
                        Los Mártires
                        Rafael Uribe Uribe
                        Tunjuelito
                        Usme
                        Usaquén
                        Fontibón
                    </p>
                </article>

                <article className="about__icons">
                    <img src={B} className="about__icon"/>
                    <h3 className="about__title">Servicios gratutos para ti</h3>
                    <p className="about__paragrah">
                        Los servicios que hay en las Manzanas del Cuidado son:
                        Servicios para las mujeres y personas cuidadoras: educación, respiro, bienestar, atención en violencias y generación de ingresos1.
                        Servicios para quienes requieren cuidado o apoyo: actividades para niñas, niños, personas mayores y personas con discapacidad1.
                        Servicios para las familias y la ciudadanía en general: lavandería comunitaria, cursos de cuidado, recreación y cultura.
                    </p>
                </article>
            </div>
        </section>

        <section className="knowledge">
            <div className="knowledge__container container">
                <div className="knowledege__texts">
                    <h2 className="subtitle">Buses del Cuidado</h2>
                    <p className="knowledge__paragraph">
                    Los Buses del Cuidado son la versión móvil de las Manzanas del Cuidado1. Son vehículos totalmente equipados que llevan servicios gratuitos de formación, bienestar y cuidado a las zonas rurales y urbanas más alejadas en Bogotá.
                    Estos buses están diseñados para prestar servicios gratuitos a las mujeres que dedican gran parte de su tiempo a las labores del cuidado en el hogar, así como a las personas que ellas cuidan. Llegan a lugares donde aún no hay sedes físicas de las Manzanas del Cuidado.
                    En los Buses del Cuidado, las cuidadoras pueden disfrutar de servicios gratuitos de educación para terminar la primaria y el bachillerato, de formación complementaria para hacer cursos con el Servicio Nacional de Aprendizaje SENA en ofimática, inglés y otros.
                    </p>
                    <a href="#" className="cta">Mira el video</a>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mirEuD85oQY?si=SCFsj_1lI1Ag1zfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </section>

        <div className="testimony__container container">
        <section className="testimony">
          
                <img src={Lef} className="testimony__arrow" id="before"/>

                <section className="testimony_body testimony_body--show" data-id="1">
                    <div className="testimony__texts">
                        <h2 className="subtitle">Teresa Robayo<span className="testimony__course">Mujer Cuidadora</span></h2>
                        <p className="testimony__review">
                            
Para su fortuna, Teresa Robayo, cuidadora de 69 años, la acogió e integró en un pequeño grupo de cuidadoras que se había conformado gracias a la regularidad de sus encuentros en la Manzana. “Yo nunca había visto a Clara hasta que llegó aquí y congeniamos super bien desde que nos conocimos. Ella me cayó bien y yo a ella y ahora somos amigas”, comentó.
                        </p>
                    </div>

                    <figure className="testimony__picture">
                        <img src={Cuer} className="testimony__img"/>
                    </figure>
                </section>
                <img src={Cuer} className="testimony__arrow" id="next"/>
           
        </section>
        </div>
    <div className="footer">
        <div className="footer__container container">
          <nav className="nav nav--footer"> 
                <h2 class="footer__title">Gracias</h2>

                <ul className="nav_link nav_link--footer">
                    <li className="nav__items">
                        <a href="#" className="nav__links">Inicio</a>
                    </li>
                    <li className="nav__items">
                        <a href="#" className="nav__links">Acerca de</a>
                    </li>
                    <li className="nav__items">
                        <a href="#" className="nav__links">Contacto</a>
                    </li>
                    <li className="nav__items">
                        <a href="#" className="nav__links">Blog</a>
                    </li>
                </ul>
            </nav>

            <form className="footer__form" action="https://formspree.io/f/mknkkrkj" method="POST">
                <h2 className="footer__newsletter">Gracias por pasar por aqui</h2>
                <div className="footer__inputs">
                    <input type="email" placeholder="Email:" className="footer__input" name="_replyto"/>
                    <input type="submit" value="Registrate" className="footer__submit"/>
                    </div>
            </form>
          
        </div>

        <section class="footer__copy container">
            <div class="footer__social">
                <a href="#" class="footer_icons"><img src={Face} class="footer_img"/></a>
                <a href="#" class="footer_icons"><img src={Twi}class="footer_img"/></a>
                <a href="#" class="footer_icons"><img src={Yotu} class="footer_img"/></a>
            </div>

            <h3 class="footer__copyright">Derechos reservados &copy; Natalia Ramos Feo</h3>
        </section>
    </div>
    </div>
)

export default Body_ini