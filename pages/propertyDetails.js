import React, { Component } from "react";
import BaseLayout from "../src/layouts/BaseLayout";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "react-id-swiper";
const useStyles = makeStyles(theme => ({
  price: {
    width: 340,
    marginRight: 6
  }
}));

function propertyDetails() {
  const classes = useStyles();
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  const Latestproperties = [
    {
      title: "Comfortable Family Apartment",
      Location: "4210 Khale Street, Florence, USA",
      Beadrooms: " 2 Beadrooms",
      Area: " 1500 sq ft",
      Bath: " 2 Bath",
      Garage: "2 Garage",
      image: "./static/images/propertiDetails/property_7.jpg"
    },
    {
      title: "Comfortable Family Apartment",
      Location: "4210 Khale Street, Florence, USA",
      Beadrooms: " 2 Beadrooms",
      Area: " 1500 sq ft",
      Bath: " 2 Bath",
      Garage: "2 Garage",
      image: "./static/images/propertiDetails/property_8.jpg"
    },
    {
      title: "Comfortable Family Apartment",
      Location: "4210 Khale Street, Florence, USA",
      Beadrooms: " 2 Beadrooms",
      Area: " 1500 sq ft",
      Bath: " 2 Bath",
      Garage: "2 Garage",
      image: "./static/images/propertiDetails/property_9.jpg"
    }
  ];
  const [value, setValue] = React.useState([20, 37]);
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
    showFilter: false,
    checkedA: true,
    checkedB: true,
    checkedC: false,
    checkedD: true,
    checkedE: false
  });
  const handleChangeRange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div>
      <div
        className="modal fade"
        id="orangeModalSubscription"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-notify modal-danger" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title white-text w-100 font-weight-bold py-2">
                Know more about this property
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="white-text">
                  &times;
                </span>
              </button>
            </div>

            <div className="modal-body">
              <div className="md-form mb-5">
                <i className="fa fa-user prefix grey-text"></i>
                <input
                  type="text"
                  id="form3"
                  placeholder="Name"
                  className="form-control validate"
                />
              </div>

              <div className="md-form">
                <i className="fa fa-envelope prefix grey-text"></i>
                <input
                  type="email"
                  id="form2"
                  placeholder="Email"
                  className="form-control validate"
                />
              </div>
              <div className="md-form">
                <i className="fa fa-phone prefix grey-text"></i>
                <input
                  type="text"
                  id="form2"
                  placeholder="Phone"
                  className="form-control validate"
                />
              </div>
              <div className="md-form">
                <i className="fa fa-text prefix grey-text"></i>
                <input
                  type="text"
                  id="form2"
                  placeholder="Message"
                  className="form-control validate"
                />
              </div>
            </div>

            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-danger btn-block btn-rounded"
              >
                Send Message <i class="fa fa-paper-plane-o ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BaseLayout>
        <div className="grey lighten-1">
          <div style={{ marginTop: "80px" }}>
            <div className="row mt-2">
              <div className="col-md-4 col-lg-4   mt-2" style={{marginLeft:'10px!important',marginRight:'5px!important'}}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect011"
                    >
                      <i className="fa fa-map-marker"></i>
                    </label>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="e.g. Bristol, SW6, G61 2DW, Victoria Station"
                  />
                </div>
              </div>
              <div className="col-md-3 col-lg-3  mt-2"style={{marginLeft:'5px!important',marginRight:'5px!important'}}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelectcity"
                    >
                      $
                    </label>
                  </div>
                  <select className="custom-select" id="inputGroupSelectcity">
                    <option defaultValue>Min Price</option>
                    <option value="1">Any</option>
                    <option value="2">10,000</option>
                    <option value="3">20,000</option>
                    <option value="3">30,000</option>
                    <option value="3">40,000</option>
                    <option value="3">50,000</option>
                    <option value="3">60,000</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3 col-lg-3  mt-2" style={{marginLeft:'5px!important',marginRight:'5px!important'}}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelectcity"
                    >
                      $
                    </label>
                  </div>
                  <select className="custom-select" id="inputGroupSelectcity">
                    <option defaultValue>Min Price</option>
                    <option value="1">Any</option>
                    <option value="2">10,000</option>
                    <option value="3">20,000</option>
                    <option value="3">30,000</option>
                    <option value="3">40,000</option>
                    <option value="3">50,000</option>
                    <option value="3">60,000</option>
                  </select>
                </div>
              </div>
            
            <div className="col-md-2 col-lg-2 mt-1">
              <div className="filter">
                <button
                  className="btn btn-danger btn-rounded float-left font-weight-bold "
                  data-toggle="modal"
                  data-target="#fullHeightModalRight"
                style={{lineHeight:'1'}}>
                <i className="fa fa-filter float-left mr-3"></i>
                  Filters
                  
                </button>
                <div
                  className="modal fade right"
                  id="fullHeightModalRight"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="myModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-full-height modal-right"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title w-100" id="myModalLabel">
                          Filters Property{" "}
                        </h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="row w-100">
                          <div className="col-md-12 mb-5">
                            <div className="input-group">
                              <div
                                className="input-group-prepend w-25"
                                style={{ marginRight: "40px" }}
                              >
                                <label
                                  className="input-group-text"
                                  htmlFor="inputGroupSelectDistance"
                                >
                                  Property Type:
                                </label>
                              </div>
                              <select
                                className="custom-select"
                                id="inputGroupSelectDistance"
                              >
                                <option defaultValue>Any</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                                <option value="3">6</option>
                                <option value="3">+7</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12 mb-5">
                            <div className="input-group">
                              <div
                                className="input-group-prepend w-25"
                                style={{ marginRight: "30px" }}
                              >
                                <label
                                  className="input-group-text"
                                  htmlFor="inputGroupSelectDistance"
                                  style={{ paddingRight: "40px" }}
                                >
                                  Bathrooms:
                                </label>
                              </div>
                              <select
                                className="custom-select"
                                id="inputGroupSelectDistance"
                              >
                                <option defaultValue>Any</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                                <option value="3">6</option>
                                <option value="3">+7</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12 mb-5">
                            <div className={classes.price}>
                              <Typography id="range-slider">
                                <span style={{ marginRight: "100px" }}>
                                  {" "}
                                  Min price:${value[0]}
                                </span>
                                <span>Max price:${value[1]}</span>
                              </Typography>
                              <Slider
                                className={classes.Slider}
                                value={value}
                                onChange={handleChangeRange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <h5 className="text-dark">Sort By Features</h5>
                            <div className="col-md-12">
                              <div className="Highestprice">
                                <FormControlLabel
                                  className="text-dark"
                                  control={
                                    <Checkbox
                                      checked={state.checkedA}
                                      onChange={handleChange("checkedA")}
                                      value="checkedA"
                                    />
                                  }
                                  label="Highest price"
                                />
                              </div>
                              <div className="Lowestprice">
                                <FormControlLabel
                                  className="text-dark"
                                  control={
                                    <Checkbox
                                      checked={state.checkedB}
                                      onChange={handleChange("checkedB")}
                                      value="checkedB"
                                    />
                                  }
                                  label="Lowest price"
                                />
                              </div>
                              <div className="Mostrecent">
                                <FormControlLabel
                                  className="text-dark"
                                  control={
                                    <Checkbox
                                      checked={state.checkedC}
                                      onChange={handleChange("checkedC")}
                                      value="checkedC"
                                    />
                                  }
                                  label="Most recent"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="Mostreduced">
                                <FormControlLabel
                                  className="text-dark"
                                  control={
                                    <Checkbox
                                      checked={state.checkedD}
                                      onChange={handleChange("checkedD")}
                                      value="checkedD"
                                    />
                                  }
                                  label="Most reduced"
                                />
                              </div>
                              <div className="Mostpopular">
                                <FormControlLabel
                                  className="text-dark"
                                  control={
                                    <Checkbox
                                      checked={state.checkedE}
                                      onChange={handleChange("checkedE")}
                                      value="checkedE"
                                    />
                                  }
                                  label="Most popular"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer justify-content-center">
                        <button
                          type="button"
                          className="btn btn-secondary btn-rounded"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-rounded"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="row" >
          <div className="col-md-9 col-lg-9">
            <Swiper {...params}>
              <div>
                <img
                  src="./static/images/propertiDetails/1.jpg"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
              <div>
                <img
                  src="./static/images/propertiDetails/2.jpg"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
              <div>
                <img
                  src="./static/images/propertiDetails/3.jpg"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
              <div>
                <img
                  src="/static/images/propertiDetails/4.jpg"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
              <div>
                <img
                  src="./static/images/propertiDetails/5.jpg"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
              <div>
                <img
                  src="./static/images/propertiDetails/6.jpg"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
            </Swiper>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="card testimonial-card">
              <div className="card-up indigo lighten-1"></div>

              <div className="avatar mx-auto white">
                <img
                  src="./static/images/contact_employee.jpg"
                  className="rounded-circle"
                  alt="woman avatar"
                />
              </div>

              <div className="card-body">
                <h4 className="card-title text-center">
                  Lyons Estates - Bootle
                </h4>
                <p>50 Antree Road, Bootle, Merseyside, L20</p>
                <hr />
               

                <p className="text-center">
                  <i className="fa fa-phone text-center fa-2x font-weight-bold">
                    +123-456-789
                  </i>
                </p>
                <button className="btn btn-danger text-white  btn-block btn-rounded mb-1 float-left">
                  {" "}
                  <i className="fa fa-envelope fa-2x mr-2 float-left text-white"></i>
                  Alert me of new property
                </button>

                <p className="mb-2 text-center font-weight-bold">
                  <i className="fa fa-envelope text-center fa-2x"></i>{" "}
                  info@example.com
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop:'-15px', marginRight:'3px'}}>
          <div className="col-md-9 col-lg-9 border border-blue primary-color text-white">
            <div className="d-flex justify-content-center">
              <p className="font-weight-bold pt-3">
                <i className="fa fa-bookmark-o fa-2x mr-4"> Save</i>
              </p>
              <p className="font-weight-bold mr-5 pt-3">
                <i className="fa fa-envelope-o fa-2x"></i> Send to a friend
              </p>
              <p>
                <i className="fa fa-facebook-square fa-2x mr-5 pt-3">Share</i>{" "}
              </p>
              <p>
                <i className="fa fa-twitter-square fa-2x pt-3">Tweet</i>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="single-property ml-3 mt-4 mb-2">
          <div className="row">
            <div className="col-md-9 col-lg-9">
              <h4 style={{color:'#013856'}} className="font-weight-bold">PROPERTY OVERVIEW</h4>
              <hr style={{borderTop: '2px solid red',lineHeight:'0.1'}}/>
              <div className="row mb-3">
              <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <i className="fa fa-money fa-2x mr-auto">
                        <span style={{ fontSize: "19px" }}>
                         
                          Price:
                        </span>
                      </i>
                   <div> $3000</div>  
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <i className="fa fa-bed fa-2x mr-auto">
                        <span style={{ fontSize: "19px" }}>
                          {" "}
                          Beadrooms:
                        </span>
                      </i>{" "}
                      <div>2</div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <i className="fa fa-bath fa-2x mr-auto">
                        <span  style={{ fontSize: "19px" }}>
                          {" "}
                          Bathrooms:
                        </span>
                      </i>{" "}
                     <div>1</div>
              </div>
              <hr style={{borderTop: '2px dashed   #013856',marginBottom:'0.5rem',marginTop:'0.5rem'}}/>
              </div>
              <div className="row mb-3">
              <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <i className="fa fa-bed fa-2x mr-auto">
                        <span  style={{ fontSize: "19px" }}>
                          {" "}
                          Number of Floor:
                        </span>
                      </i>{" "}
                      <div>2</div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <i className="fa fa-bed fa-2x mr-auto">
                        <span  style={{ fontSize: "19px" }}>
                          {" "}
                          Beadrooms:
                        </span>
                      </i>{" "}
                      <div>2</div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <i className="fa fa-yelp fa-2x mr-auto">
                        <span  style={{ fontSize: "19px" }}>
                          {" "}
                          Age:
                        </span>
                      </i>{" "}
                     <div>12</div>
              </div>
              <hr style={{borderTop: '2px dashed  red'}}/>
              </div>
              <div className="row mb-3">
              <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <i className="fa fa-clock-o fa-2x mr-auto">
                        <span  style={{ fontSize: "19px" }}>
                          {" "}
                          Time:
                        </span>
                      </i>{" "}
                      <div>16:23 pm</div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <i className="fa fa-home fa-2x mr-auto">
                        <span  style={{ fontSize: "19px" }}>
                          {" "}
                          type of House:
                        </span>
                      </i>{" "}
                      <div>Flat</div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 d-flex">
              <i className="fa fa-building fa-2x mr-auto">
                        <span  style={{ fontSize: "19px" }}>
                          {" "}
                          Location type:
                        </span>
                      </i>{" "}
                      <div>city</div>
              </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mt-5">
              <div className="card text-white">
                <div className="card-body">
                  <div className="mb-2">
                    <button className="btn btn-danger btn-block font-weight-bold">
                      {" "}
                      <i className=" fa fa-print fa-2x float-left text-white"></i>
                      Print Catalog
                    </button>
                  </div>
                  <div className="mb-2">
                    <button className="btn btn-danger btn-block font-weight-bold" data-toggle="modal" data-target="#orangeModalSubscription">
                      {" "}
                      <i className=" fa fa-question-circle float-left fa-2x "></i>
                      Make an Enquiry
                    </button>
                  </div>
                  <div className="mb-2">
                    <button className="btn btn-danger btn-block font-weight-bold" data-toggle="modal" data-target="#orangeModalSubscription">
                      {" "}
                      <i className="fa fa-gift fa-2x float-left"></i>
                      Make an Offer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-property ml-3 mt-4">
          <div className="row">
            <div className="col-md-8 col-lg-8">
              <h4 style={{color:'#013856'}} className="font-weight-bold">PROPERTY DESCRIPTION</h4>
              <hr style={{borderTop: '2px solid red',lineHeight:'0.1'}}/>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum. Typi non habent claritatem insitam;
                est usus legentis in iis qui facit eorum claritatem.
                Investigationes demonstraverunt lectores legere me lius quod ii
                legunt saepius. Claritas est etiam processus dynamicus, qui
                sequitur mutationem consuetudium lectorum. Mirum est notare quam
                littera gothica, quam nunc putamus parum claram, anteposuerit
                litterarum formas humanitatis per seacula quarta decima et
                quinta decima. Eodem modo typi, qui nunc nobis videntur parum
                clari, fiant sollemnes in futurum.
              </p>
            </div>
            <div className="col-md-4 col-lg-4">
              <h4 style={{color:'#013856'}} className="font-weight-bold">Features</h4>
              <hr style={{borderTop: '2px solid red',lineHeight:'0.1'}}/>
              <div className="col-md-12 col-lg-12 font-weight-bold d-flex">
              <div className="mr-auto">
              <img  src="./static/images/parking.png" style={{height:'30px',width:'30px'}}/> Baloncy 
              </div>
                <div><i className="fa fa-check-square fa-2x" style={{color:'red'}}></i></div>
              </div>
              <hr style={{borderTop: '2px dashed   #013856',marginBottom:'0.5rem',marginTop:'0.5rem'}}/>
              <div className="col-md-12 col-lg-12 font-weight-bold d-flex">
              <div className="mr-auto">
              <img  src="./static/images/patio.png" style={{height:'30px',width:'30px'}}/> patio 
              </div>
                <div><i className="fa fa-check-square fa-2x" style={{color:'red'}}></i></div>
              </div>
              <hr style={{borderTop: '2px dashed   #013856',marginBottom:'0.5rem',marginTop:'0.5rem'}}/>
              <div className="col-md-12 col-lg-12 font-weight-bold d-flex">
              <div className="mr-auto">
              <img  src="./static/images/parking.png" style={{height:'30px',width:'30px'}}/> central antenna 
              </div>
                <div><i className="fa fa-check-square fa-2x" style={{color:'red'}}></i></div>
              </div>
              <hr style={{borderTop: '2px dashed   #013856',marginBottom:'0.5rem',marginTop:'0.5rem'}}/>
              <div className="col-md-12 col-lg-12 font-weight-bold d-flex">
              <div className="mr-auto">
              <img  src="./static/images/parking.png" style={{height:'30px',width:'30px'}}/> CCTV 
              </div>
                <div><i className="fa fa-check-square fa-2x" style={{color:'red'}}></i></div>
              </div>
              <hr style={{borderTop: '2px dashed   #013856',marginBottom:'0.5rem',marginTop:'0.5rem'}}/>
              <div className="col-md-12 col-lg-12 font-weight-bold d-flex">
              <div className="mr-auto">
              <img  src="./static/images/parking.png" style={{height:'30px',width:'30px'}}/> parking 
              </div>
                <div><i className="fa fa-check-square fa-2x" style={{color:'red'}}></i></div>
              </div>
              <hr style={{borderTop: '2px dashed   #013856',marginBottom:'0.5rem',marginTop:'0.5rem'}}/>
              <div className="col-md-12 col-lg-12 font-weight-bold d-flex">
              <div className="mr-auto">
              <img  src="./static/images/parking.png" style={{height:'30px',width:'30px'}}/> number of parkings 
              </div>
                <div>3</div>
            </div>
           
           
            </div>
          </div>
        </div>
        <div className="single-property ml-3 mt-4">
          <div className="row">
            <div className="col-md-8  col-lg8">
              <h4 style={{color:'#013856'}} className="font-weight-bold"> VIRTUAL REALITY</h4>
              <hr style={{borderTop: '2px solid  red'}}/>
              <img src="./static/images/VirtualReality.gif"></img>
            </div>
            <div className="col-md-4 col-lg-4">
              <h4 style={{color:'#013856'}} className="font-weight-bold"> Special features</h4>
              <hr />
            </div>
          </div>
        </div>
        <div className="single-property ml-3 mt-4"> 
        <div className="row">
        <div className="col-md-12 col-lg-12">
            <h4 style={{color:'#013856'}} className="font-weight-bold"> FLOOR PLANS</h4>
            <hr style={{borderTop: '2px solid red',lineHeight:'0.1'}}/>
            <img
            className="mr-5"
            src="./static/images/floor-plan-big.jpg"
            style={{ height: "300px", width: "400px" }}
          ></img>
          <img
            src="./static/images/floor-plan-big.jpg"
            style={{ height: "300px", width: "400px" }}
          ></img>
            </div>
        </div>
        </div>
        <div className="single-property ml-3 mt-4">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h4 style={{color:'#013856'}} className="font-weight-bold"> Map</h4>
            <hr />
            <div
            id="map-container-google-1"
            className="z-depth-1-half map-container"
          >
            <iframe
              src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: "0", frameBorder: "0" }}
            ></iframe>
          </div>
          </div>
          <div className="col-md-6 col-lg-6">
          <h4 style={{color:'#013856'}} className="font-weight-bold">Nearby</h4>
          <hr />

          </div>
        </div>
        </div>
        <div className="single-property container mt-4">
          <div className="col-md-10 col-lg-10">
            <h3> Suggested Properties for you</h3>
            <hr />
          </div>
          <div className="row">
            {Latestproperties.map((property, index) => {
              return (
                <div className="col-md-4 mb-1" key={index}>
                  <div className="card booking-card">
                    <div className="view view-cascade overlay pulse1">
                      <img
                        className="card-img-top"
                        src={property.image}
                        alt="Card image cap"
                      />
                      <a>
                        <div className="mask rgba-white-slight"></div>
                      </a>
                      <div className="d-flex">
                        <i className="fa fa-heart-o fa-3x"></i>
                      </div>

                      <a>
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h4
                        className="card-title font-weight-bolder"
                        style={{ fontSize: "18px" }}
                      >
                        <a>{property.title}</a>
                      </h4>
                      <div className="d-flex">
                        <i
                          className="fa fa-map-marker fa-2x"
                          style={{ color: "#013856" }}
                        ></i>
                        <div className="ml-3 mt-2" style={{ color: "#777777" }}>
                          {property.Location}
                        </div>
                      </div>

                      <div className="d-flex mt-4">
                        <i
                          className="fa fa-bed  mr-auto"
                          style={{ color: "#777777", fontSize: "19px" }}
                        >
                          <span className="ml-2" style={{ fontSize: "19px" }}>
                            {property.Beadrooms}
                          </span>
                        </i>
                        <i
                          className="fa fa-arrows-alt "
                          style={{ color: "#777777", fontSize: "19px" }}
                        >
                          <span className="ml-2" style={{ fontSize: "19px" }}>
                            {property.Area}
                          </span>
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BaseLayout>
      <style jsx>
        {`
        .primary-color{
          background-color:#013856!important;
        }
          .modal {
            z-index: 99999;
            display: absolute;
          }
          .modal-notify .modal-header {
            border-radius: 3px 3px 0 0;
          }
          .modal-notify .modal-content {
            border-radius: 3px;
          }
          .iconRoom {
            color: #777777;
          }
          .flaticon-air-conditioner:before {
            content: "\f1be";
          }
          .property-amenities li {
            border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
            float: left;
            list-style: none;
            line-height: 40px;
            width: 50%;
          }
          .property-amenities ul {
            list-style: none;
            margin: 0px;
            padding: 0px;
          }
          .btn-read-lastest {
            font-size: 18px !important;
          }
          .btn-read-lastest:hover {
            color: white !important;
            background-color: #cc0000 !important;
          }
          .fa-heart-o {
            margin-top: -210px;
            margin-left: 300px;
            z-index: 2 !important;
            color: #ffffff;
            cursor: pointer;
          }
          .fa-heart-o:hover {
            color: #013856 !important;
          }
          .map-container {
            overflow: hidden;
            padding-bottom: 56.25%;
            position: relative;
            height: 0;
          }
          .map-container iframe {
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            position: absolute;
          }
          .single-property h5:before {
            position: absolute;
            content: "";
            left: 0px;
            top: 100px;
            bottom: 0px;
            width: 100%;
            height: 2px;
            background-color: #eee;
          }
          .single-property h3:after {
            position: absolute;
            content: "";
            left: 0px;
            bottom: 0px;
            width: 50px;
            height: 2px;
            background-color: #d82460;
          }
          .location-property p {
            line-height: -1px;
            color: #777777;
            margin-bottom: 0.1rem !important;
          }
          .fa-phone,.fa-check-square
          .fa-map-marker {
            color: #013856 !important;
            font-size: 20px;
          }
          .hr-propertyDetails {
            background-color: red;
            height: 2px;
            color: #65ffff !important;
          }
          * {
            cursor: pointer;
          }
          .sub-slider {
            height: 100px;
            color: #ffffff !important;
            background: rgba(6, 56, 86, 0.856) !important;
          }

          .sub-slider-title:hover {
            background-color: #777777 !important;
            color: #ffffff !important;
          }
          #v-pills-tab {
            background-color: #ff4444;
            color: white;

            font-size: 18px;
          }
        `}
      </style>
    </div>
  );
}
export default propertyDetails;
