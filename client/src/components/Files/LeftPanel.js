import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";

const LeftPanel = () => {
return (
<MDBContainer>
  <MDBCard className="w-60 mb-4">
    <MDBCardBody>
      <MDBCardTitle>Special title treatment</MDBCardTitle>
      <MDBCardText>
        With supporting text below as a natural lead-in to additional
        content.
        <hr></hr>
        With supporting text below as a natural lead-in to additional
        content.
        <hr></hr>
        With supporting text below as a natural lead-in to additional
        content.
        <hr></hr>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  </MDBContainer>

);
};

export default LeftPanel;