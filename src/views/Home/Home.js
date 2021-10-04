import React from 'react'
import { Link } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Home.css'
import image1 from './181.jpg'
import image2 from './171.jpg'
import image3 from './179.jpg'
import image4 from './154.jpg'
import image5 from './59.jpg'
import image6 from './61.jpg'
import image7 from './62.jpg'

const Home = () => (
    <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        <div className="itemList">
            <h1 className="productsTitle">OFERTAS!</h1>
            <ItemListContainer oferta={true}/>
            <div className="bannergroup  hidden-xs visible-ms">
                <div className="col-xs-12 col-sm-6 first"><Link to="/Category/5"><img src={image4} className="d-block w-100" alt="..."></img></Link></div>
                
                <div className="col-xs-12 col-sm-6"><Link to="/Search/a"><img src={image5} className="d-block w-100" alt="..."></img></Link></div>
            </div>
            <div>
                <img src={image6} className="d-block w-100" alt="..."></img>
            </div>
            <h1 className="productsTitle">DESTACADOS</h1>
            <ItemListContainer destacado={true}/>
            <div>
                <img src={image7} className="mt-3 d-block w-100" alt="..."></img>
            </div>
        </div>
        
    </>
)

export default Home