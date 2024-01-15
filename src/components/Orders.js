import React from "react";
import { Button } from "react-bootstrap";
import {FaCartPlus, FaHeart, FaShare, FaStar, FaStarHalf} from "react-icons/fa";
import "./styles/Orders.css";

function Orders() {
  return (
    <div>
      <h2 style={{ backgroundColor: "black", color: "gold", padding: "8px" }}>
        HOT DEALS
      </h2>
      <div className="purchase">
        <div className="container py-4">
          <h1
            style={{
              color: "red",
              textAlign: "left",
              backgroundColor: "yellowgreen",
            }}
          >
            FOR MENS
          </h1>
          <div className="row">
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-133039.jpg?w=1060&t=st=1694083978~exp=1694084578~hmac=bf05b8a9fadee1214a1758300870d65fe0529def8cf81ff7c5b353cf80e5468f"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <h3>White Sneakers</h3>
                <h4>$1200.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/brown-leather-shoes_1203-7562.jpg?w=1060&t=st=1694082255~exp=1694082855~hmac=9afbcc3200ecc0d7ccf5f6095e92cb91ec85c1ace357a1f199c06cacf9c5bc25"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3>Casual Shoes</h3>
                <h4>$500.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/brown-leather-shoes_1203-8174.jpg?w=1060&t=st=1694083259~exp=1694083859~hmac=7bf825ccd4ce4a1c77d3e699ab522b3f83dbbd3d29f2ea9b1ac02860aaef2b01"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3>Italian Formals</h3>
                <h4>$1350.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1060&t=st=1694083330~exp=1694083930~hmac=2cca55e4f8a33e95e2f8fe54f5a888ba649983a3224afe3b61e62708ba201c5c"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3>Blue Sneakers</h3>
                <h4>$1300.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg?w=1060&t=st=1694083385~exp=1694083985~hmac=37eadc1f1f0d7c9fe46a509df7e4dbdc83333371232f2e944c309e03184216e7"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3>Sneaker</h3>
                <h4>$1200.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/sneakers-shoes_1203-8036.jpg?w=1060&t=st=1694083490~exp=1694084090~hmac=73c76ad008cc09ce317df5c5ba6e3a657578ddb087f0158be2346c76b501a8d9"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3>Leather Loafers</h3>
                <h4>$700.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
          </div>
          <br />
          <h1
            style={{
              color: "red",
              textAlign: "left",
              backgroundColor: "yellowgreen",
            }}
          >
            FOR WOMENS
          </h1>
          <div className="row">
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/women-s-red-high-heel-shoes-formal-fashion_53876-101501.jpg?w=1060&t=st=1694083617~exp=1694084217~hmac=3d6a6893dc731efd105a6b20760ef426e22f96ec4dd199802b96bbdf3536addc"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3>Red Hill Shoes</h3>
                <h4>$1500.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/woman-shoes_1203-8745.jpg?w=1060&t=st=1694083655~exp=1694084255~hmac=966d160cbe6c0998853d9e2a703507e6719d0f48d6235d347641f257340b0b40"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3>Brown Hill Shoes</h3>
                <h4>$1250.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/high-heel-shoes_1203-8675.jpg?w=1060&t=st=1694083700~exp=1694084300~hmac=05002ae7e91041f533e1ed4becd49f8169db3e3cba865518fbc0aa962580d8b1"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3>Pink Hill shoes</h3>
                <h4>$1200.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
          </div>
          <br />
          <h1
            style={{
              color: "red",
              textAlign: "left",
              backgroundColor: "yellowgreen",
            }}
          >
            FOR KIDS
          </h1>
          <div className="row">
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/baby-boy-shoes-isolated_1203-6847.jpg?w=1060&t=st=1694083758~exp=1694084358~hmac=4f7cc199c0d1cfa9edc724248eb2efd5ab416cb85e5354f7d39061dd800ba6c9"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3>Kids Shoes</h3>
                <h4>$650.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/small-classic-cute-childhood-new_1203-5956.jpg?w=1060&t=st=1694083796~exp=1694084396~hmac=235e8140eca3dbbe4817bd18d6fd754aee04b8040f2a3300d952aad6562d9d31"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3>Kids Shoes</h3>
                <h4>$800.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-top">
                <img
                  src="https://img.freepik.com/free-photo/fashion-shoes_1203-7555.jpg?w=1060&t=st=1694083877~exp=1694084477~hmac=ebe513a6e429aa0ff1e57c0955893b1f7782058cd0c8d5dcf7a935c765b804e4"
                  style={{ width: "450px" }}
                />
                <div className="overlay">
                  <FaCartPlus className="iconscartplus" />
                  <FaHeart className="iconsheart" />
                  <FaShare className="iconsshare" />
                </div>
              </div>
              <div className="product-bottom text-center">
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStar className="iconsstar" />
                <FaStarHalf className="iconsstarhalf" />
                <h3> Kids Shoes</h3>
                <h4>$700.00</h4>
                <Button variant="outline-secondary">BUY NOW</Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
