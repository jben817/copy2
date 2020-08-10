import React, { Component } from 'react';
import CarouselPage from '../components/Files/CarouselPage'
import BottomPage from '../components/Files/BottomPage'
import axios from 'axios';
import {Col, Row, Container, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';

class Payment extends Component {
// state = {
//   modal13: false
// }

// toggle = nr => () => {
//   let modalNumber = 'modal' + nr
//   this.setState({
//     [modalNumber]: !this.state[modalNumber]
//   });
// }

state ={
  listingInfo: {}
};

componentDidMount () {
  axios({
      "method":"GET",
      "url":`https://airbnb-com.p.rapidapi.com/listing/${this.params.id}`,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"airbnb-com.p.rapidapi.com",
      "x-rapidapi-key":"e9a234de2amshfb394e36da3e9f0p1fe03fjsnda119de32de4",
      "useQueryString":true
      }
      })
      .then((res)=>{
        console.log(res);
        this.setState({listingInfo: res.data.listings})
      })
      .catch((error)=>{
        console.log(error)
      })

}

render() {
  return (<React.Fragment>
<CarouselPage/>
<BottomPage/>
</React.Fragment>
  )}
};

export default Payment;