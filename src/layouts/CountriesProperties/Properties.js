import React, { Component } from "react";
import Link from "next/link";
import "./CountriesProperties.css";
import Swiper from "react-id-swiper";
const params = {
  slidesPerView: 3,
  spaceBetween: 10,

  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
};
class Properties extends Component {
  render() {
    return (
      <div className=" mt-3 mb-3">
        <h1 className="text-center mb-3">
          <div className="BrowsePropertyTitle font-weight-bold">
            <span>Browse properties by the countries</span>
            <div className="mid ">
              <img src="./static/images/mid.png" />
            </div>
          </div>
        </h1>

        <div className="container mt-3">
          <Swiper {...params}>
            <div className="">
              <Link href="/propertyCountry">
                <a>
                  <div className="card card-cascade shadow-inset-center">
                    <div className="view view-cascade overlay pulse1">
                      <img
                        className="card-img-top"
                        src="./static/images/country/cambridge3.jpg"
                        alt="Card image cap"
                      />
                      <a>
                      <div className="mask text-white titleProperti flex-center">
                     
                      </div>
                    </a>
                  </div>
                  <div className="titleProperti text-center text-white animated fadeInUp delay-1s ">
                    <h5 className="mb-5 font-weight-bold" style={{marginTop:'-50px'}}>
                      for sale in UK
                    </h5>
                  </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="">
              <Link href="/propertyCountry">
                <a>
                  <div className="card card-cascade  border border-info">
                    <div className="view view-cascade overlay pulse1 h-100">
                      <img
                        className="card-img-top "
                        src="./static/images/country/Greece-island3.jpg"
                        alt="Card image cap"
                      />
                      <a>
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5 className="mb-5 font-weight-bold" style={{marginTop:'-50px'}}>
                        for sale in Spain
                      </h5>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="">
              <Link href="/propertyCountry">
                <a>
                  <div className="card card-cascade  border border-info">
                    <div className="view view-cascade overlay pulse1 ">
                      <img
                        className="card-img-top "
                        src="./static/images/country/plaza-de-espana-seville3.jpg"
                        alt="Card image cap"
                      />
                      <a>
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5 className="mb-5 font-weight-bold" style={{marginTop:'-50px'}}>
                        for sale in Cyprus
                      </h5>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="">
              <Link href="/propertyCountry">
                <a>
                  <div className="card card-cascade border border-info">
                    <div className="view view-cascade overlay pulse1">
                      <img
                        className="card-img-top "
                        src="./static/images/country/spain-best-places-to-visit-seville3.jpg"
                        alt="Card image cap"
                      />
                      <a>
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5 className="mb-5 font-weight-bold" style={{marginTop:'-50px'}}>
                        for sale in Portugal
                      </h5>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="">
              <Link href="/propertyDetails">
                <a>
                  <div className="card card-cascade  border border-info">
                    <div className="view view-cascade overlay pulse1 h-100">
                      <img
                        className="card-img-top "
                        src="./static/images/country/university_of_coimbra3.jpg"
                        alt="Card image cap"
                      />
                      <a>
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5 className="mb-5 font-weight-bold" style={{marginTop:'-50px'}}>
                        for sale in Turkey
                      </h5>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="">
              <Link href="/propertyCountry">
                <a>
                  <div className="card card-cascade  border border-info">
                    <div className="view view-cascade overlay pulse1 h-100">
                      <img
                        className="card-img-top "
                        src="./static/images/country/Dubais.jpg"
                        alt="Card image cap"
                      />
                      <a>
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <div className="titleProperti text-center text-white  animated fadeInUp delay-05s ">
                    <h5 className="mb-5 font-weight-bold" style={{marginTop:'-50px'}}>
                        {" "}
                        for sale in Greece
                      </h5>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="">
              <Link href="/propertyCountry">
                <a>
                  <div className="card card-cascade  border border-info">
                    <div className="view view-cascade overlay pulse1  h-100">
                      <img
                        className="card-img-top flex-center rgba-green-strong "
                        src="./static/images/country/The-Gart-10-1024x6823.jpg"
                        alt="Card image cap"
                      />
                      <a>
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <div className="titleProperti text-center text-white animated fadeInUp delay-05s ">
                    <h5 className="mb-5 font-weight-bold" style={{marginTop:'-50px'}}>
                        for sale in United Arab Emirates
                      </h5>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </Swiper>
        </div>

        <style jsx>
          {`
          .icon-logoproperty:before {
            content: "\e900";
          }
            .swiper-button-prev,
            .swiper-button-next {
              height: 60px !important;
              width: 60px !important;
              border-radius: 50px !important;
              background-color: white !important;
              color: #013856 !important;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Properties;
