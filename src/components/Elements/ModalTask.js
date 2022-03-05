import React from 'react'

import {Modal, Row, Col, Button} from 'react-bootstrap'

export const ModalTask = ({ manejador, handleInput, description }) => {
 
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
    <Button
        className="btn-fill btn-wd"
        variant="info"
        onClick={() => setShowModal(true)}
      >
        Add Task
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
            <p>Add Task</p>
            <Row>
              <Col md="12">
                <form onSubmit={manejador}>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Description task"
                    autoComplete="off"
                    value={description}
                    onChange={handleInput}
                  />
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
