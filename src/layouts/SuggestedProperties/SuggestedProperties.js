import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Swiper from "react-id-swiper";
import "./Suggested.css";
const useStyles = makeStyles(theme => ({
  root: {
    width: "10%",
    maxWidth: 40
  },
  card: {
    maxWidth: 20,
    height: 100
  },
  media: {
    height: 250
  },
  background: {
    backgroundColor: "#ffffff"
  }
}));
const state = {
  SuggestedProperties: [
    {
      active: "true",
      title: "Comfortable Family Apartment",
      Location: "4210 Khale Street, Florence, USA",
      Description: "sfsfsfsfsfs",
      Beadrooms: " 2 ",
      Area: " 1500 sq ft",
      Bath: " 2",
      Garage: "2",
      image: "./static/images/propertiDetails/property_7.jpg"
    },
    {
      active: "false",
      title: "Comfortable Family Apartment",
      Location: "4210 Khale Street, Florence, USA",
      Description: "sfsfsfsfsfs",
      Beadrooms: " 3 ",
      Area: " 1600 sq ft",
      Bath: " 2",
      Garage: "1",
      image: "./static/images/propertiDetails/property_8.jpg"
    }
  ]
};
const SuggestedProperties = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <h1 className="text-center text-dark animated pulse delay-05s">
        {" "}
        Best Properties
      </h1>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="container">
          <div className="carousel-inner">
            {state.SuggestedProperties.map((suggestproperty, index) => {
              if (suggestproperty.active == "true") {
                return (
                  <div className="carousel-item active" key={index}>
                    <div className="card-body  d-flex">
                      <div className="left-card  d-flex flex-column ml-1 p-3 text-white">
                        <div className="text-center">
                          <i
                            className="fa fa-bath fa-2x mt-5 mb-3 pr-2 pt-4 "
                            style={{ color: "#ffffff " }}
                          ></i>
                          <span className="text-center">
                            {suggestproperty.Bath}
                          </span>
                        </div>

                        <div className="text-center">
                          <i
                            className="fa fa-bed fa-2x mb-3 pr-2 "
                            style={{ color: "#ffffff " }}
                          ></i>
                          <span className="text-center">
                            {suggestproperty.Beadrooms}
                          </span>
                        </div>

                        <div className="text-center">
                          <i
                            className="fa fa-car fa-2x mb-3 pr-2"
                            style={{ color: "#ffffff " }}
                          ></i>
                          <span className="text-center">
                            {suggestproperty.Garage}
                          </span>
                        </div>

                        <div className="text-cente">
                          <i
                            className="fa fa-arrows-alt fa-2x"
                            style={{ color: "#ffffff" }}
                          ></i>
                          <span className="">{suggestproperty.Area}</span>
                        </div>
                      </div>

                      <div className="classic-tabs  mr-auto">
                        <ul
                          className="nav tabs-cyan"
                          id="myClassicTab"
                          role="tablist"
                        >
                          <li className="nav-item  text-white">
                            <a
                              className="nav-link tab-suggested text-white font-weight-bolder  text-center active show"
                              id="profile-tab-classic"
                              data-toggle="tab"
                              href="#profile-classic"
                              role="tab"
                              aria-controls="profile-classic"
                              aria-selected="true"
                            >
                              <i className="fa fa-home fa-2x "></i>
                              <br />
                              Property Details
                            </a>
                          </li>

                          <li className="nav-item text-white">
                            <a
                              className="nav-link tab-suggested text-white font-weight-bold text-center"
                              id="follow-tab-classic"
                              data-toggle="tab"
                              href="#follow-classic"
                              role="tab"
                              aria-controls="follow-classic"
                              aria-selected="false"
                            >
                              <i className="fa fa-home fa-2x"></i>
                              <br />
                              Nearby Schools
                            </a>
                          </li>
                          <li className="nav-item text-white">
                            <a
                              className="nav-link tab-suggested text-white text-center font-weight-bold"
                              id="contact-tab-classic"
                              data-toggle="tab"
                              href="#contact-classic"
                              role="tab"
                              aria-controls="contact-classic"
                              aria-selected="false"
                            >
                              <i className="fa fa-home fa-2x "></i>
                              <br />
                              Neighborhood
                            </a>
                          </li>
                        </ul>
                        <div
                          className="tab-content border-right border-bottom border-left rounded-bottom"
                          id="myClassicTabContent"
                        >
                          <div
                            className="tab-pane animated flipInX delay-05s active show"
                            id="profile-classic"
                            role="tabpanel"
                            aria-labelledby="profile-tab-classic"
                            style={{ zIndex: "-1" }}
                          >
                            <h3 className="mt-2 ml-3 text-dark font-weight-bolder">
                              443 Capistrano Ave
                            </h3>
                            <h5>
                              <i className="ml-3 fa fa-map-marker"></i> San
                              Francisco, CA 94112
                            </h5>
                            <h6 className="mt-2 ml-3 text-dark">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit
                              amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem.
                            </h6>
                          </div>
                          <div
                            className="tab-pane fade mt-2 ml-3 animated lightSpeedIn delay-05s"
                            id="follow-classic"
                            role="tabpanel"
                            aria-labelledby="follow-tab-classic"
                          >
                            <table className="table  w-100">
                              <thead>
                                <tr>
                                  <th scope="col">Rating*</th>
                                  <th scope="col">School Name</th>
                                  <th scope="col">Distance</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                  </td>
                                  <td> Monroe Elementary School</td>
                                  <td>0.3</td>
                                </tr>
                                <tr>
                                  <td>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                  </td>
                                  <td> Balboa High School</td>
                                  <td>0.2</td>
                                </tr>
                                <tr>
                                  <td>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                  </td>
                                  <td> Denman (James) Middle School</td>
                                  <td>0.5</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className="tab-pane animated slideInLeft delay-05s"
                            id="contact-classic"
                            role="tabpanel"
                            aria-labelledby="contact-tab-classic"
                          >
                            <p className="mt-2 ml-3">
                              443 Capistrano Ave is located in Mission Terrace
                              neighborhood in the city of San Francisco, CA.
                            </p>
                            <h4>Ask a neighborhood expert</h4>
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded"
                            >
                              Email Agent
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="img-property">
                        <img src={suggestproperty.image} />
                      </div>
                    </div>
                  </div>
                );
              } else
                return (
                  <div className="carousel-item " key={index}>
                    <div className="card-body  d-flex">
                      <div className="left-card  d-flex flex-column ml-1 p-3 text-white">
                        <div className="text-center">
                          <i
                            className="fa fa-bath fa-2x mt-5 mb-3 pr-2 pt-4 "
                            style={{ color: "#ffffff " }}
                          ></i>
                          <span className="text-center">
                            {suggestproperty.Bath}
                          </span>
                        </div>

                        <div className="text-center">
                          <i
                            className="fa fa-bed fa-2x mb-3 pr-2 "
                            style={{ color: "#ffffff " }}
                          ></i>
                          <span className="text-center">
                            {suggestproperty.Beadrooms}
                          </span>
                        </div>

                        <div className="text-center">
                          <i
                            className="fa fa-car fa-2x mb-3 pr-2"
                            style={{ color: "#ffffff " }}
                          ></i>
                          <span className="text-center">
                            {suggestproperty.Garage}
                          </span>
                        </div>

                        <div className="text-cente">
                          <i
                            className="fa fa-arrows-alt fa-2x"
                            style={{ color: "#ffffff" }}
                          ></i>
                          <span className="">{suggestproperty.Area}</span>
                        </div>
                      </div>

                      <div className="classic-tabs  mr-auto">
                        <ul
                          className="nav tabs-cyan"
                          id="myClassicTab"
                          role="tablist"
                        >
                          <li className="nav-item  text-white">
                            <a
                              className="nav-link tab-suggested text-white font-weight-bolder  text-center active show"
                              id="profile-tab-classic"
                              data-toggle="tab"
                              href="#profile-classic"
                              role="tab"
                              aria-controls="profile-classic"
                              aria-selected="true"
                            >
                              <i className="fa fa-home fa-2x "></i>
                              <br />
                              Property Details
                            </a>
                          </li>

                          <li className="nav-item text-white">
                            <a
                              className="nav-link tab-suggested text-white font-weight-bold text-center"
                              id="follow-tab-classic"
                              data-toggle="tab"
                              href="#follow-classic"
                              role="tab"
                              aria-controls="follow-classic"
                              aria-selected="false"
                            >
                              <i className="fa fa-home fa-2x"></i>
                              <br />
                              Nearby Schools
                            </a>
                          </li>
                          <li className="nav-item text-white">
                            <a
                              className="nav-link tab-suggested text-white text-center font-weight-bold"
                              id="contact-tab-classic"
                              data-toggle="tab"
                              href="#contact-classic"
                              role="tab"
                              aria-controls="contact-classic"
                              aria-selected="false"
                            >
                              <i className="fa fa-home fa-2x "></i>
                              <br />
                              Neighborhood
                            </a>
                          </li>
                        </ul>
                        <div
                          className="tab-content border-right border-bottom border-left rounded-bottom"
                          id="myClassicTabContent"
                        >
                          <div
                            className="tab-pane animated flipInX delay-05s active show"
                            id="profile-classic"
                            role="tabpanel"
                            aria-labelledby="profile-tab-classic"
                            style={{ zIndex: "-1" }}
                          >
                            <h3 className="mt-2 ml-3 text-dark font-weight-bolder">
                              443 Capistrano Ave
                            </h3>
                            <h5>
                              <i className="ml-3 fa fa-map-marker"></i> San
                              Francisco, CA 94112
                            </h5>
                            <h6 className="mt-2 ml-3 text-dark">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit
                              amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem.
                            </h6>
                          </div>
                          <div
                            className="tab-pane fade mt-2 ml-3 animated lightSpeedIn delay-05s"
                            id="follow-classic"
                            role="tabpanel"
                            aria-labelledby="follow-tab-classic"
                          >
                            <table className="table  w-100">
                              <thead>
                                <tr>
                                  <th scope="col">Rating*</th>
                                  <th scope="col">School Name</th>
                                  <th scope="col">Distance</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                  </td>
                                  <td> Monroe Elementary School</td>
                                  <td>0.3</td>
                                </tr>
                                <tr>
                                  <td>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                  </td>
                                  <td> Balboa High School</td>
                                  <td>0.2</td>
                                </tr>
                                <tr>
                                  <td>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                    <li className="list-inline-item mr-0">
                                      <i className="fa fa-star amber-text ">
                                        {" "}
                                      </i>
                                    </li>
                                  </td>
                                  <td> Denman (James) Middle School</td>
                                  <td>0.5</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className="tab-pane animated slideInLeft delay-05s"
                            id="contact-classic"
                            role="tabpanel"
                            aria-labelledby="contact-tab-classic"
                          >
                            <p className="mt-2 ml-3">
                              443 Capistrano Ave is located in Mission Terrace
                              neighborhood in the city of San Francisco, CA.
                            </p>
                            <h4>Ask a neighborhood expert</h4>
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded"
                            >
                              Email Agent
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="img-property view view-cascade overlay pulse1">
                        <img src={suggestproperty.image} />
                        <a>
                          <div className="mask rgba-white-slight"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="" aria-hidden="true"></span>
          <i className="fa fa-arrow-circle-left fa-3x"></i>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="" aria-hidden="true"></span>
          <i className="fa fa-arrow-circle-right fa-3x"></i>
        </a>
      </div>

      <style jsx>
        {`
        .carousel-control-next{
          color:red;
        }
        .carousel-control-prev{
          color:red;
        }
       
           .img-property img{
               Width:400px!important;
               Height:310px!important
            } 
            .swiper-pagination-bullet {
              display:none;
                // width: 20px!important;
                // height: 20px!important;
                // display: inline-block!important;
                //  border-radius: none!important;
               
            
          `}
      </style>
    </div>
  );
};

export default SuggestedProperties;
