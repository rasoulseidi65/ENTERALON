import React from "react";

class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Latestproperties: [
        {
          title: "Comfortable Family Apartment",
          Location: "4210 Khale Street, Florence, USA",
          Beadrooms:' 2 Beadrooms',
          Area:' 1500 sq ft',
          Bath:' 2 Bath',
          Garage:'2 Garage',
          image:'./static/images/propertiDetails/property_7.jpg'
        },
        {
          title: "Comfortable Family Apartment",
          Location: "4210 Khale Street, Florence, USA",
          Beadrooms:' 2 Beadrooms',
          Area:' 1500 sq ft',
          Bath:' 2 Bath',
          Garage:'2 Garage',
          image:'./static/images/propertiDetails/property_8.jpg'
        },
        {
          title: "Comfortable Family Apartment",
          Location: "4210 Khale Street, Florence, USA",
          Beadrooms:' 2 Beadrooms',
          Area:' 1500 sq ft',
          Bath:' 2 Bath',
          Garage:'2 Garage',
          image:'./static/images/propertiDetails/property_9.jpg'
        },
      ]
    };
  }

  render() {
    return (
      <div className="container mt-3">
        <h1 className="text-center mb-3">
          <div className="LatestPropertyTitle font-weight-bold">
            <span>Latest properties </span>
            <div className="mid ">
              <img src="./static/images/mid.png" />
            </div>
          </div>
        </h1>
        <div className="row">
        {
          this.state.Latestproperties.map((property,index)=>{
            return (
              <div className="col-md-4 mb-1" key={index}>
              <div className="card booking-card">
                <div className="view  view-cascade overlay pulse1">
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
                  <div className="d-flex mt-4">
                    <i
                      className="fa fa-bath  mr-auto"
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                       {property.Bath}
                      </span>
                    </i>
                    <i
                      className="fa fa-car "
                      style={{ color: "#777777", fontSize: "19px" }}
                    >
                      <span className="ml-2" style={{ fontSize: "19px" }}>
                       {property.Garage}
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

            );

          })
        }
        
         
         
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn-read-lastest btn btn-outline-danger btn-rounded center"
          >
            <div className="text-news text-center">Browse More</div>
          </button>
        </div>
        <style jsx>
          {`
          .btn-read-lastest{
            font-size: 18px!important; 
          }
          .btn-read-lastest:hover{
            color: white!important;
            background-color: #cc0000!important;
            
        }
          .fa-heart-o{
            margin-top:-210px;
            margin-left:300px;
            z-index: 2 !important;
            color:#ffffff;
            cursor: pointer;
          }
          .fa-heart-o:hover{
            color: #013856!important;
          }
          .LatestPropertyTitle{
            font-size: 30px!important;
            display: block!important;
            position: relative!important;
          }
          .mid:before{
              content: "";
              position: absolute;
              top: 100%;
              left: 0;
              margin-top: -20px;
              height: 2px;
              width: 48%;
              background-color: rgb(212, 69, 2);
          
          }
          .mid:after{
            content: "";
            position: absolute;
            top: 100%;
            left: 52%;
            margin-top: -20px;
            height: 2px;
            width: 50%;
            background-color: rgb(233, 9, 9);
          
          }
          `}
        </style>
      </div>
    );
  }
}

export default ComponentName;
