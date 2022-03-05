import React from 'react'
import {Button, Col, Row, Modal} from 'react-bootstrap'
export const ModalForm = ({infoModalForm}) => {
  const [showModal, setShowModal] = React.useState(false);

  return(
      <>
        <Button
      className="btn-fill btn-wd"
      variant="info"
      onClick={() => setShowModal(true)}
    >
      {infoModalForm.buttonName}
    </Button>
    <Modal
        className="modal-primary"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header className="justify-content-center">
          <div className="modal-profile">
            <i className="nc-icon nc-simple-add"></i>
          </div>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>{infoModalForm.title}</p>
          <Row>
            <Col md="12">
              <form /*onSubmit={manejador}*/>
                {infoModalForm.form}
                <div className="modal-footer">
                  <Button
                    className="btn-simple"
                    type="button"
                    variant="link"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </Button>
                  <Button
                    className="btn-simple"
                    type="submit"
                    variant="link"
                    onClick={() => setShowModal(false)}
                  >
                    Add
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        
      </Modal>
      
      </>
  )
}