import React, { Component } from "react";
import "./LatestNews.css";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import ScrollAnimation from "react-animate-on-scroll";
class LatestNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    };

    this.roles = [
      "Thinking about putting your property up for sale? Our latest research will give you an insight into conditions in your local market.",

      "Hoping to take advantage of the Government’s Starter Home scheme? You may want to consider other initiatives.\n" +
        "Read more at https://www.zoopla.co.uk/discover/property-news/government-fails-to-build-any-of-its-promised-starter-homes"
    ];
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-5">
              <ScrollAnimation animateIn="swing" initiallyVisible={true}>
               
              
              <div className="card testimonial-card">
                <div className="card-up indigo lighten-1"></div>

                <div className="avatar mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                    className="rounded-circle"
                    alt="woman avatar"
                    style={{ height: "200px", width: "200px" }}
                  />
                </div>

                <div className="card-body">
                  <h4 className="card-title">Anna Doe</h4>
                  <hr />

                  <p>
                    <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Eos, adipisci
                  </p>
                  <hr />
                  <div className="text-center socialNetworkagent">
                    <i className="fa fa-mobile fa-2x mr-3"></i>
                    <i className="fa fa-phone-square fa-2x  mr-3"></i>
                    <i className="fa fa-envelope fa-2x "></i>
                  </div>

                  <hr />
                  <button
                    type="button"
                    className="btn-find-agent btn btn-outline-danger btn-rounded float-right btn-block"
                  >
                    <div className="text-news">Contact</div>
                  </button>
                </div>
              </div>
              </ScrollAnimation>
              </div>

            <div className="col-md-9">
              <div className="LatestnewsTitle text-center font-weight-bold">
                <span className="">Latest News </span>
              </div>
              <h6
                style={{ fontSize: "23px!important" }}
                className="font-weight-bold"
              >
                <i className="fa fa-quote-left"></i> Read the latest real estate &
                finance news, property market trends and housing information and
                insights.
              </h6>
              <ScrollAnimation animateIn="bounceIn">
                <div className="card card-news mb-2">
                  <div className="card-body">
                    <div className="col-md-12">
                      <ListItem className="body-news">
                        <ListItemAvatar>
                          <img
                            className="p-1 mr-3"
                            src="./static/images/news/3.png"
                            style={{ marginLeft: "-50px", marginTop: "-30px" }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          className="font-weight-bolder"
                          primary="Brunch this weekend?"
                          secondary={
                            <React.Fragment>
                             
                              {
                                " — I'll be in your neighborhood doing errands this…"
                              }
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceIn">
                <div className="card card-news mb-2">
                  <div className="card-body">
                    <div className="col-md-12">
                      <ListItem className="">
                        <ListItemAvatar>
                          <img
                            className="p-1 mr-3"
                            src="./static/images/news/2.png"
                            style={{ marginLeft: "-50px", marginTop: "-30px" }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Brunch this weekend?"
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                className="textNews"
                                color="textPrimary"
                              >
                                Ali Connors
                              </Typography>
                              {
                                " — I'll be in your neighborhood doing errands this…"
                              }
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceIn">
                <div className="card card-news mb-2">
                  <div className="card-body">
                    <div className="col-md-12">
                      <ListItem className="">
                        <ListItemAvatar>
                          <img
                            className="p-1 mr-3"
                            src="./static/images/news/1.png"
                            style={{ marginLeft: "-50px", marginTop: "-30px" }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Brunch this weekend?"
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                className="textNews"
                                color="textPrimary"
                              >
                                Ali Connors
                              </Typography>
                              {
                                " — I'll be in your neighborhood doing errands this…"
                              }
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceIn">
                <div className="card card-news mb-2">
                  <div className="card-body">
                    <div className="col-md-12">
                      <ListItem className="">
                        <ListItemAvatar>
                          <img
                            className="p-1 mr-3"
                            src="./static/images/news/3.png"
                            style={{ marginLeft: "-50px", marginTop: "-30px" }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Brunch this weekend?"
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                className="textNews"
                                color="textPrimary"
                              >
                                Ali Connors
                              </Typography>
                              {
                                " — I'll be in your neighborhood doing errands this…"
                              }
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceIn">
                <div className="card card-news mb-2">
                  <div className="card-body">
                    <div className="col-md-12">
                      <ListItem className="">
                        <ListItemAvatar>
                          <img
                            className="p-1 mr-3"
                            src="./static/images/news/1.png"
                            style={{ marginLeft: "-50px", marginTop: "-30px" }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Brunch this weekend?"
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                className="textNews"
                                color="textPrimary"
                              >
                                Ali Connors
                              </Typography>
                              {
                                " — I'll be in your neighborhood doing errands this…"
                              }
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <button
                type="button"
                className="btn-Read-news btn btn-outline-danger btn-rounded float-right btn-block"
              >
                <div className="text-news">Read more property news</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestNews;
