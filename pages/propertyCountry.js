import React from "react";
import BaseLayout from "../src/layouts/BaseLayout";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Searchbox from "../src/layouts/SearchBox/SearchBox.js";
import Link from "next/link";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Bestforyou from "../src/layouts/SuggestedProperties/SuggestedProperties.js";

const useStyles = makeStyles(theme => ({
  price: {
    width: 340,
    marginRight: 6
  },
  area: {
    width: 340,
    marginRight: 6
  },
  card: {
    background: "rgba(1, 56, 86, 0.856)!important"
  },

  distance: {
    width: 200
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
function valuetext(value) {
  return `${value}°C`;
}
function Blogs() {
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
  const classes = useStyles();
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
  const OnclickDisplayFilterBox = () => {
    setState({ showFilter: !state.showFilter });
    console.log(state.showFilter);
  };
  const handleChangeRange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  return (
    <BaseLayout>
      <div
        className="mb-5"
        style={{ marginTop: "80px", marginLeft: "15px", marginRight: "10px" }}
      >
        <div className="row">
          <div className="TitleCountry text-white font-weight-bold ">
            <h4 className="font-weight-bold mt-5">Property for sale in UK</h4>
          </div>
        </div>
        <div className="row d-flex  mt-2">
          <div className="location col-md-4 col-sm-4 col-lg-4 w-100">
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
          <div className="minprice col-md-2 col-sm-2 col-lg-2 w-100">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelectcity"
                >
                  <i className="fa fa-home"></i>
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
          <div className="maxprice col-md-2 col-sm-2 col-lg-2">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelectpropertyType"
                >
                  <i className="fa fa-home"></i>
                </label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelectpropertyType"
              >
                <option defaultValue>Max price</option>
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
          <div className="bedrooms col-md-3 col-sm-3 col-lg-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelectbedrooms"
                >
                  <i className="fa fa-bed"></i>
                </label>
              </div>
              <select className="custom-select" id="inputGroupSelectbedrooms">
                <option defaultValue>Bedrooms</option>
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
          <div className="filter  col-md-1 col-sm-1 col-lg-1">
            <lable
              className="float-left font-weight-bold "
              data-toggle="modal"
              data-target="#fullHeightModalRight"
            >
              <i className="fa fa-filter mr-1"></i>
              Filters
              <i className="fa fa-caret-down ml-2"></i>
            </lable>
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
                      className="btn btn-danger btn-rounded"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-rounded"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            marginLeft: "8px!important",
            marginRight: "8px!important"
          }}
        >
          <div className="row mb-4 ml-3">
            <div className="col-md-3 mb-1">
              <Link href="/propertyDetails">
                <a style={{ color: "#013856" }}>
                  <div className="card booking-card">
                    <div className="view view-cascade overlay pulse1">
                      <img
                        className="card-img-top"
                        src="./static/images/propertiDetails/property_7.jpg"
                        alt="Card image cap"
                      />
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
                        <a>Comfortable Family Apartment</a>
                      </h4>
                      <div className="d-flex">
                        <i
                          className="fa fa-map-marker fa-2x"
                          style={{ color: "#013856" }}
                        ></i>
                        <div className="ml-3 mt-2" style={{ color: "#777777" }}>
                          4210 Khale Street, Florence, USA
                        </div>
                      </div>

                      <div className="d-flex mt-4">
                        <i
                          className="fa fa-bed  mr-auto"
                          style={{ color: "#777777", fontSize: "19px" }}
                        >
                          <span className="ml-2" style={{ fontSize: "19px" }}>
                            2 Beadrooms
                          </span>
                        </i>
                        <i
                          className="fa fa-arrows-alt "
                          style={{ color: "#777777", fontSize: "19px" }}
                        >
                          <span className="ml-2" style={{ fontSize: "19px" }}>
                            1500 sq ft
                          </span>
                        </i>
                      </div>
                      <div className="d-flex mt-4">
                        <i
                          className="fa fa-bath  mr-auto"
                          style={{ color: "#777777", fontSize: "19px" }}
                        >
                          <span className="ml-2" style={{ fontSize: "19px" }}>
                            2 Bath
                          </span>
                        </i>
                        <i
                          className="fa fa-car "
                          style={{ color: "#777777", fontSize: "19px" }}
                        >
                          <span className="ml-2" style={{ fontSize: "19px" }}>
                            1 Garage
                          </span>
                        </i>
                      </div>
                      <hr />
                      <div className="d-flex">
                        <ul
                          className="list-unstyled list-inline rating mb-0 mr-auto"
                          style={{ fontSize: "20px" }}
                        >
                          <li className="list-inline-item mr-0">
                            <i className="fa fa-star amber-text "> </i>
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fa fa-star amber-text "></i>
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fa fa-star amber-text "></i>
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fa fa-star amber-text x"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-half-empty amber-text "></i>
                          </li>
                        </ul>
                        <li className="list-inline-item">
                          <p
                            className="font-weight-bolder"
                            style={{ color: "#013856", fontSize: "19px" }}
                          >
                            $9800{" "}
                            <span
                              style={{ color: "#777777", fontSize: "14px" }}
                            >
                              /Month
                            </span>
                          </p>
                        </li>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-3 mb-1">
            <Link href="/propertyDetails">
            <a style={{ color: "#013856" }}>
              <div className="card booking-card">
                <div className="view view-cascade overlay pulse1">
                  <img
                    className="card-img-top lady-lips-gradient"
                    src="./static/images/propertiDetails/property_8.jpg"
                    alt="Card image cap"
                  />
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
                    <a>Luxury Condo in Mariwood</a>
                  </h4>
                  <div className="d-flex">
                    <i
                      className="fa fa-map-marker fa-2x"
                      style={{ color: "#013856" }}
                    ></i>
                    <div className="ml-3 mt-2" style={{ color: "#777777" }}>
                      164 Mariwood Rd , Campbell River, BC
                    </div>
                  </div>

                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bed  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Beadrooms
                      </span>
                    </i>
                    <i
                      className="fa fa-arrows-alt "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1500 sq ft
                      </span>
                    </i>
                  </div>
                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bath  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Bath
                      </span>
                    </i>
                    <i
                      className="fa fa-car "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1 Garage
                      </span>
                    </i>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <ul
                      className="list-unstyled list-inline rating mb-0 mr-auto"
                      style={{ fontSize: "20px" }}
                    >
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "> </i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                    </ul>
                    <li className="list-inline-item">
                      <p
                        className="font-weight-bolder"
                        style={{ color: "#013856", fontSize: "19px" }}
                      >
                        $12800{" "}
                        <span style={{ color: "#777777", fontSize: "14px" }}>
                          /Month
                        </span>
                      </p>
                    </li>
                  </div>
                </div>
              </div>
           </a>
           </Link>
              </div>
            <div className="col-md-3 mb-1">
            <Link href="/propertyDetails">
            <a style={{ color: "#013856" }}>
              <div className="card booking-card">
                <div className="view view-cascade overlay pulse1">
                  <img
                    className="card-img-top"
                    src="./static/images/propertiDetails/property_9.jpg"
                    alt="Card image cap"
                  />
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
                    <a>Villa on Sunbury</a>
                  </h4>
                  <div className="d-flex">
                    <i
                      className="fa fa-map-marker fa-2x"
                      style={{ color: "#013856" }}
                    ></i>
                    <div className="ml-3 mt-2" style={{ color: "#777777" }}>
                      39 Casey Ave, Sunbury, VIC 3429
                    </div>
                  </div>

                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bed  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Beadrooms
                      </span>
                    </i>
                    <i
                      className="fa fa-arrows-alt "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1500 sq ft
                      </span>
                    </i>
                  </div>
                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bath  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Bath
                      </span>
                    </i>
                    <i
                      className="fa fa-car "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1 Garage
                      </span>
                    </i>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <ul
                      className="list-unstyled list-inline rating mb-0 mr-auto"
                      style={{ fontSize: "20px" }}
                    >
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "> </i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                    </ul>
                    <li className="list-inline-item">
                      <p
                        className="font-weight-bolder"
                        style={{ color: "#013856", fontSize: "19px" }}
                      >
                        $7800{" "}
                        <span style={{ color: "#777777", fontSize: "14px" }}>
                          /Month
                        </span>
                      </p>
                    </li>
                  </div>
                </div>
              </div>
           </a>
           </Link>
              </div>
            <div className="col-md-3">
            <Link href="/propertyDetails">
            <a style={{ color: "#013856" }}>
              <div className="card booking-card">
                <div className="view view-cascade overlay pulse1">
                  <img
                    className="card-img-top"
                    src="./static/images/propertiDetails/property_9.jpg"
                    alt="Card image cap"
                  />
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
                    <a>Villa on Sunbury</a>
                  </h4>
                  <div className="d-flex">
                    <i
                      className="fa fa-map-marker fa-2x"
                      style={{ color: "#013856" }}
                    ></i>
                    <div className="ml-3 mt-2" style={{ color: "#777777" }}>
                      39 Casey Ave, Sunbury, VIC 3429
                    </div>
                  </div>

                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bed  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Beadrooms
                      </span>
                    </i>
                    <i
                      className="fa fa-arrows-alt "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1500 sq ft
                      </span>
                    </i>
                  </div>
                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bath  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Bath
                      </span>
                    </i>
                    <i
                      className="fa fa-car "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1 Garage
                      </span>
                    </i>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <ul
                      className="list-unstyled list-inline rating mb-0 mr-auto"
                      style={{ fontSize: "20px" }}
                    >
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "> </i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                    </ul>
                    <li className="list-inline-item">
                      <p
                        className="font-weight-bolder"
                        style={{ color: "#013856", fontSize: "19px" }}
                      >
                        $7800{" "}
                        <span style={{ color: "#777777", fontSize: "14px" }}>
                          /Month
                        </span>
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </a>
            </Link>
              </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-1">
              <div className="card booking-card">
                <div className="view view-cascade overlay pulse1">
                  <img
                    className="card-img-top"
                    src="./static/images/propertiDetails/property_7.jpg"
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
                    <a>Comfortable Family Apartment</a>
                  </h4>
                  <div className="d-flex">
                    <i
                      className="fa fa-map-marker fa-2x"
                      style={{ color: "#013856" }}
                    ></i>
                    <div className="ml-3 mt-2" style={{ color: "#777777" }}>
                      4210 Khale Street, Florence, USA
                    </div>
                  </div>

                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bed  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Beadrooms
                      </span>
                    </i>
                    <i
                      className="fa fa-arrows-alt "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1500 sq ft
                      </span>
                    </i>
                  </div>
                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bath  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Bath
                      </span>
                    </i>
                    <i
                      className="fa fa-car "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1 Garage
                      </span>
                    </i>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <ul
                      className="list-unstyled list-inline rating mb-0 mr-auto"
                      style={{ fontSize: "20px" }}
                    >
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "> </i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text x"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                    </ul>
                    <li className="list-inline-item">
                      <p
                        className="font-weight-bolder"
                        style={{ color: "#013856", fontSize: "19px" }}
                      >
                        $9800{" "}
                        <span style={{ color: "#777777", fontSize: "14px" }}>
                          /Month
                        </span>
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-1">
              <div className="card booking-card">
                <div className="view view-cascade overlay pulse1">
                  {" "}
                  <img
                    className="card-img-top lady-lips-gradient"
                    src="./static/images/propertiDetails/property_8.jpg"
                    alt="Card image cap"
                  />
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
                    <a>Luxury Condo in Mariwood</a>
                  </h4>
                  <div className="d-flex">
                    <i
                      className="fa fa-map-marker fa-2x"
                      style={{ color: "#013856" }}
                    ></i>
                    <div className="ml-3 mt-2" style={{ color: "#777777" }}>
                      164 Mariwood Rd , Campbell River, BC
                    </div>
                  </div>

                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bed  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Beadrooms
                      </span>
                    </i>
                    <i
                      className="fa fa-arrows-alt "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1500 sq ft
                      </span>
                    </i>
                  </div>
                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bath  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Bath
                      </span>
                    </i>
                    <i
                      className="fa fa-car "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1 Garage
                      </span>
                    </i>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <ul
                      className="list-unstyled list-inline rating mb-0 mr-auto"
                      style={{ fontSize: "20px" }}
                    >
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "> </i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                    </ul>
                    <li className="list-inline-item">
                      <p
                        className="font-weight-bolder"
                        style={{ color: "#013856", fontSize: "19px" }}
                      >
                        $12800{" "}
                        <span style={{ color: "#777777", fontSize: "14px" }}>
                          /Month
                        </span>
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-1">
              <div className="card booking-card">
                <div className="view view-cascade overlay pulse1">
                  <img
                    className="card-img-top"
                    src="./static/images/propertiDetails/property_9.jpg"
                    alt="Card image cap"
                  />
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
                    <a>Villa on Sunbury</a>
                  </h4>
                  <div className="d-flex">
                    <i
                      className="fa fa-map-marker fa-2x"
                      style={{ color: "#013856" }}
                    ></i>
                    <div className="ml-3 mt-2" style={{ color: "#777777" }}>
                      39 Casey Ave, Sunbury, VIC 3429
                    </div>
                  </div>

                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bed  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Beadrooms
                      </span>
                    </i>
                    <i
                      className="fa fa-arrows-alt "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1500 sq ft
                      </span>
                    </i>
                  </div>
                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bath  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Bath
                      </span>
                    </i>
                    <i
                      className="fa fa-car "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1 Garage
                      </span>
                    </i>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <ul
                      className="list-unstyled list-inline rating mb-0 mr-auto"
                      style={{ fontSize: "20px" }}
                    >
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "> </i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                    </ul>
                    <li className="list-inline-item">
                      <p
                        className="font-weight-bolder"
                        style={{ color: "#013856", fontSize: "19px" }}
                      >
                        $7800{" "}
                        <span style={{ color: "#777777", fontSize: "14px" }}>
                          /Month
                        </span>
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card booking-card">
                <div className="view view-cascade overlay pulse1">
                  <img
                    className="card-img-top"
                    src="./static/images/propertiDetails/property_9.jpg"
                    alt="Card image cap"
                  />
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
                    <a>Villa on Sunbury</a>
                  </h4>
                  <div className="d-flex">
                    <i
                      className="fa fa-map-marker fa-2x"
                      style={{ color: "#013856" }}
                    ></i>
                    <div className="ml-3 mt-2" style={{ color: "#777777" }}>
                      39 Casey Ave, Sunbury, VIC 3429
                    </div>
                  </div>

                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bed  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Beadrooms
                      </span>
                    </i>
                    <i
                      className="fa fa-arrows-alt "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1500 sq ft
                      </span>
                    </i>
                  </div>
                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bath  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        2 Bath
                      </span>
                    </i>
                    <i
                      className="fa fa-car "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                        1 Garage
                      </span>
                    </i>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <ul
                      className="list-unstyled list-inline rating mb-0 mr-auto"
                      style={{ fontSize: "20px" }}
                    >
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "> </i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star amber-text "></i>
                      </li>
                      <li className="list-inline-item mr-0">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-half-empty amber-text "></i>
                      </li>
                    </ul>
                    <li className="list-inline-item">
                      <p
                        className="font-weight-bolder"
                        style={{ color: "#013856", fontSize: "19px" }}
                      >
                        $7800{" "}
                        <span style={{ color: "#777777", fontSize: "14px" }}>
                          /Month
                        </span>
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pageing mt-3">
            <nav
              aria-label="Page navigation example"
              className="align-content-center"
            >
              <ul className="pagination pagination-circle pg-blue text-center">
                <li className="page-item disabled">
                  <a className="page-link">First</a>
                </li>
                <li className="page-item disabled">
                  <a className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">Last</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Bestforyou />
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
      </div>
      <style sjx="true">
        {`
          #fullHeightModalRight{
            
            z-index:10000000;
          }
          .fa-heart-o{
            margin-top:-201px;
            margin-left:250px;
            z-index: 2 !important;
            color:#ffffff;
            cursor: pointer;
          }
          .fa-heart-o:hover{
            color: #013856!important;
          }
          .pageing,.TitleCountry{
            display:flex;
            align-item:center;
            justify-content:center;
          }
          .TitleCountry{
            background-image:url('./static/images/header2.jpg');
            background-repeat: no-repeat;
            width: 100%;
            min-height: 200px;
             height:auto;
            display:flex;
            align-item:center;
            justify-content:center;
          }
          `}
      </style>
    </BaseLayout>
  );
}

export default Blogs;
