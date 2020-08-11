import React  from 'react';
import { Row, Col, Modal } from "react-bootstrap"

import { MDBModal, MDBModalHeader, MDBModalBody, MDBCard, MDBCardBody, MDBModalFooter, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";

const MODAL_STYLES = {
    postion: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate('
}

export default function Modal ({open, children, onClose}) {
  if (!open) return null
  return(
    <div>
       <MDBBtn onClick={onClose}color="primary">Primary</MDBBtn>
{children}
    </div>

  )
}