import React from "react";
import Dashboardpanel from '../src/index';
import ReactDOM from 'react-dom';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
     <Dashboardpanel/>
      
      </div>
    );
  }
}

export default Dashboard;
