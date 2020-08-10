import React, { Component, useState } from 'react';
import { MDBModal, MDBModalHeader, MDBModalBody, MDBCard, MDBCardBody, MDBModalFooter, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Daterange } from 'react-dates';
import Modal from "./Modal";

const SidePanel = () => {
    // const [isOpen, setIsOpen] = useState(false) 
    
        return (
            <MDBContainer  >
                <MDBCard className="w-50 shadow-box-example z-depth-5">
                    <MDBCardBody>
                        <MDBCardTitle>Special title treatment</MDBCardTitle>
                        <MDBCardText>
                            <MDBListGroup>
                                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCardText>
                        <MDBBtn color="primary">Primary</MDBBtn>
                    </MDBCardBody>
                    
                </MDBCard>
                {/* <Modal open={isOpen}>
                     that's it</Modal> */}

                
            </MDBContainer>
        );
    };


export default SidePanel;