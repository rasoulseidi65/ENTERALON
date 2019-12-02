import React, {Component} from 'react';
import './BespokeVR.css';
// import './animat.js';
class BespokeVr extends Component {
    render() {
        return (
            <div className="background-vr mt-4 mb-5 z-depth-1-half">
                <div className="container row d-flex">
                    <div className="col-md-6">
                        <h2 className=" ml-5 mt-2 text-white">Virtual Reality</h2>
                        <h6 className=" ml-5 text-VR">
                        
                        VR is a new comer to a real estate industry heavily.
 afocused on customer experience and ease of access.
There exist many points inreal estate  that VR  solves for renters and investors.
These include buying or renting  a property sight unseen,touring homes with potintial renters,envisioning fix and flips,and so much more.
In short, VR is changing the real estate world.
         
</h6>
<button type="button" className="btn-Read-news btn btn-outline-danger btn-rounded mt-2 btn-block float-right">
  <p className="text-start"> Get started</p> 
</button>

                    </div>
                    <div className="col-md-6">
                        <img className="VR-gif float-right" src="./static/images/VirtualReality.gif"/>
                        
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default BespokeVr;
