import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../Style/bottompage.css'
import SidePanel from "./SidePanel"
import LeftPanel from "./LeftPanel"
import Module from "./Modal";


const BottomPage = () => {
return (
<MDBContainer>
  <MDBRow>
  <MDBCol md="6" className="mb-3">

<LeftPanel/>
    </MDBCol>
<MDBCol md="6" className="mb-3">

     <SidePanel/>
     
     </MDBCol>
     <MDBRow>
         <MDBCol>
         </MDBCol>

     </MDBRow>
  </MDBRow>
</MDBContainer>
);
}

export default BottomPage;