import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import caro1 from '../Images/caro1.jpg';
import caro2 from '../Images/caro2.jpg';
import caro3 from '../Images/caro3.jpg';
import './styles/Home.css';


function Home() {
  return (
    <>
    <div>
      <Carousel fade>
      <Carousel.Item>
        <a href='/' className='caros'><img src={caro1} alt='' text="First slide" /></a>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='/' className='caros'><img src={caro2} alt='' text="Second slide" /></a>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='/' className='caros'><img src={caro3}  alt='' text="Third slide" /></a>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
    </div> 
    <div>
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
  <div className="col">
    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
      style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1081472140/photo/theres-no-tripping-up-this-workout.jpg?s=612x612&w=0&k=20&c=vZBtfCqIRwVOkauVXa13Purle3fnaCBFPNr-2nNsXLY=")' }}>
      <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
          Mens in Style,Mens in Footwear
        </h3>
        <ul className="d-flex list-unstyled mt-auto">
          <li className="me-auto">
            <img
              src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="
              alt="Bootstrap"
              width={32}
              height={32}
              className="rounded-circle border border-white"
            />
          </li>
          <li className="d-flex align-items-center me-3">
            <svg className="bi me-2" width="1em" height="1em">
              <use xlinkHref="#geo-fill" />
            </svg>
            <small>AMERICA</small>
          </li>
          <li className="d-flex align-items-center">
            <svg className="bi me-2" width="1em" height="1em">
              <use xlinkHref="#calendar3" />
            </svg>
            <small>3d</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col">
    <div
      className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
      style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/woman-posing-with-stylish-footwear-summer-fashion-bag-long-legs-shopping_285396-489.jpg")' }}
    >
      <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
          Womens so classy,so Elegant
        </h3>
        <ul className="d-flex list-unstyled mt-auto">
          <li className="me-auto">
            <img
              src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="
              alt="Bootstrap"
              width={32}
              height={32}
              className="rounded-circle border border-white"
            />
          </li>
          <li className="d-flex align-items-center me-3">
            <svg className="bi me-2" width="1em" height="1em">
              <use xlinkHref="#geo-fill" />
            </svg>
            <small>INDIA</small>
          </li>
          <li className="d-flex align-items-center">
            <svg className="bi me-2" width="1em" height="1em">
              <use xlinkHref="#calendar3" />
            </svg>
            <small>4d</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col">
    <div
      className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
      style={{ backgroundImage: 'url("https://media.istockphoto.com/id/859156946/photo/kids-with-colorful-shoes-children-footwear.jpg?s=612x612&w=0&k=20&c=bC7jp8VXYW0XK_rnpVhxjlx9b1XroEQwDXGkghGtae4=")' }}
    >
      <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
          Another longer title belongs here
        </h3>
        <ul className="d-flex list-unstyled mt-auto">
          <li className="me-auto">
            <img
              src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="
              alt="Bootstrap"
              width={32}
              height={32}
              className="rounded-circle border border-white"
            />
          </li>
          <li className="d-flex align-items-center me-3">
            <svg className="bi me-2" width="1em" height="1em">
              <use xlinkHref="#geo-fill" />
            </svg>
            <small>ARAB</small>
          </li>
          <li className="d-flex align-items-center">
            <svg className="bi me-2" width="1em" height="1em">
              <use xlinkHref="#calendar3" />
            </svg>
            <small>5d</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


    </div>
    </>
  )
}

export default Home
