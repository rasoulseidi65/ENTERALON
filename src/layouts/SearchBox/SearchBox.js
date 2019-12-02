import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Link from 'next/link';
import NativeSelect from "@material-ui/core/NativeSelect";
import "./SearchBox.css";
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

function SearchBox() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);
  const [area, setArea] = React.useState([30, 80]);
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
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);
  const OnclickDisplayFilterBox = () => {
    setState({ showFilter: !state.showFilter });
    console.log(state.showFilter);
  };
  const handleChangeRange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeRangeArea = (event, newValue) => {
    setArea(newValue);
  };
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div>
      <div className="searchbox">
        <div className="">
          <div className="">
            <div className="mt-5">
              <div className="container">
                <div
                  className="row container-Searchbox d-flex bd-highlight"
                  style={{ marginRight: "20px" }}
                >
                  <div
                    className="col-md-12 right-searchBox w-100"
                    style={{ paddingLeft: "-20px" }}
                  >
                    <div className="card-searchBox card  border-primary">
                      <div className="card-body text-white">
                        <div className="d-flex row">
                          <div className="country col-md-3 flex-fill col-sm-3 col-lg-3 w-100">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <label
                                  className="input-group-text"
                                  htmlFor="inputGroupSelect011"
                                >
                                  <i className="fa fa-map-marker"></i>
                                </label>
                              </div>
                              <select
                                className="custom-select"
                                id="inputGroupSelect011"
                              >
                                <option defaultValue>
                                  Choose your country
                                </option>
                                <option value="1">United Kingdom</option>
                                <option value="2">Turkey</option>
                                <option value="3">Portugal</option>
                                <option value="3">Spain</option>
                                <option value="3">Cyprus</option>
                                <option value="3">Greece</option>
                                <option value="3">United Arab Emirates</option>
                              </select>
                            </div>
                          </div>
                          <div className="city col-md-3 w-100">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <label
                                  className="input-group-text"
                                  htmlFor="inputGroupSelectcity"
                                >
                                  <i className="fa fa-home"></i>
                                </label>
                              </div>
                              <select
                                className="custom-select"
                                id="inputGroupSelectcity"
                              >
                                <option defaultValue>Choose your City</option>
                                <option value="1">londan</option>
                                <option value="2">Turkey</option>
                                <option value="3">Portugal</option>
                                <option value="3">Spain</option>
                                <option value="3">Cyprus</option>
                                <option value="3">Greece</option>
                                <option value="3">dubi</option>
                              </select>
                            </div>
                          </div>
                          <div className="propertyType col-md-3">
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
                                <option defaultValue>Property Type</option>
                                <option value="1">Apartemn</option>
                                <option value="2">Vila</option>
                              </select>
                            </div>
                          </div>
                          <div className="bedrooms col-md-3">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <label
                                  className="input-group-text"
                                  htmlFor="inputGroupSelectbedrooms"
                                >
                                  <i className="fa fa-bed"></i>
                                </label>
                              </div>
                              <select
                                className="custom-select"
                                id="inputGroupSelectbedrooms"
                              >
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
                        </div>
                        <div className="d-flex mt-2">
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
                          <div className={classes.area}>
                            <Typography id="range-slider">
                              <span> Area:{area[0]}</span>-
                              <span>{area[1]} sq ft</span>
                            </Typography>
                            <Slider
                              className={classes.Slider}
                              value={area}
                              onChange={handleChangeRangeArea}
                              valueLabelDisplay="auto"
                              aria-labelledby="range-slider"
                              getAriaValueText={valuetext}
                            />
                          </div>
                          <Link href="/allProperty">
                            <button
                              type="button"
                              className="btn w-20 btn-search btn-danger btn-rounded mr-auto"
                            >
                              <i className="fa fa-search mr-2"></i>
                              Search
                            </button>
                          </Link>
                          <lable
                            className="text-white mt-3"
                            onClick={OnclickDisplayFilterBox}
                          >
                            Advanced Search
                            <i className="fa fa-caret-down ml-2"></i>
                          </lable>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div
                    className=" filterBox animated slideInDown delay-05s "
                    style={{ display: state.showFilter ? "block" : "none" }}
                  >
                    <div className="row card-searchBoxAd">
                      <div className="col-md-3 col-lg-3 col-sm-3 mt-2">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label
                              className="input-group-text"
                              htmlFor="inputGroupSelectDistance"
                            >
                              <i className="fa fa-road"></i>
                            </label>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelectDistance"
                          >
                            <option defaultValue>Bathrooms</option>
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
                      <div className="col-md-3 col-lg-3 col-sm-3 mt-2">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label
                              className="input-group-text"
                              htmlFor="inputGroupSelectDistance"
                            >
                              <i className="fa fa-building"></i>
                            </label>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelectDistance"
                          >
                            <option defaultValue>  location type</option>
                            <option value="1">city</option>
                            <option value="2">town</option>
                            <option value="3">nature</option>
                            <option value="3">beach</option>
                            <option value="3">Within 15 miles</option>
                            <option value="3">Within 20 miles</option>
                            <option value="3">Within 30 miles</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3 col-lg-3 col-sm-3 mt-2">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label
                              className="input-group-text"
                              htmlFor="inputGroupSelectDistance"
                            >
                              <i className="fa fa-building"></i>
                            </label>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelectDistance"
                          >
                            <option defaultValue>type of house</option>
                            <option value="1">flat</option>
                            <option value="2">duplex</option>
                            <option value="3">triplex</option>
                            
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3 col-lg-3 col-sm-3 mt-2">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label
                              className="input-group-text"
                              htmlFor="inputGroupSelectDistance"
                            >
                              <i className="fa fa-road"></i>
                            </label>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelectDistance"
                          >
                            <option defaultValue>Floor</option>
                            <option value="1">Any</option>
                            <option value="2">1</option>
                            <option value="3">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">+5</option>
                            
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row card-searchBoxAd">
                      <div className="col-md-6">
                        <h5 className="text-white">Sort By Features</h5>
                        <div className="col-md-6">
                          <div className="Highestprice">
                            <FormControlLabel
                              className="text-white"
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
                              className="text-white"
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
                              className="text-white"
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
                        <div className="col-md-6">
                          <div className="Mostreduced">
                            <FormControlLabel
                              className="text-white"
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
                              className="text-white"
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
                      <div className="col-md-6 flex-column">
                        <h5 className="text-white">Sort By Ratings</h5>
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
                          />
                          <li className="list-inline-item mr-0">
                            <i className="fa fa-star amber-text "></i>
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
                          <li className="list-inline-item mr-0">
                            <i className="fa fa-star amber-text "></i>
                          </li>
                        </div>
                        <div className="Mostpopular">
                          <FormControlLabel
                            className="text-white"
                            control={
                              <Checkbox
                                checked={state.checkedE}
                                onChange={handleChange("checkedE")}
                                value="checkedE"
                              />
                            }
                          />
                          <li className="list-inline-item mr-0">
                            <i className="fa fa-star amber-text "></i>
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
                          <li className="list-inline-item mr-0">
                            <i className="fa fa-star-half-empty amber-text "></i>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .card-searchBox.card,
          .card-searchBoxAd.card,
          .card-searchBoxAd {
            background: rgba(1, 56, 86, 0.856) !important;
          }
          .card-searchBoxAd {
            background: rgba(1, 56, 86, 0.856) !important;
            margin-right: 15px!important;
          }
        `}
      </style>
    </div>
  );
}

export default SearchBox;
