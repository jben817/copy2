import React, { Component } from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import "../components/Style/help.css";
import Head from "../components/Files/Head";

class Help extends Component {
    render() {
        return (
            <div>
              <Head></Head>
            <h2> How can we help you? </h2> 
            <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="Describe your issue here" aria-label="Search" />
      </div>
    </MDBCol>
          </div>
        );
    }
}

export default Help;