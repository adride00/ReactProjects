import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import {ListItems} from './ListItems'
import {ModalForm} from './ModalForm'
import {TableHeader} from './TableHeader'
export const ModelContainer = ({infoContenedor, infoModalForm, headerTableInfo, data, dataTable}) => {
    
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-tasks">
              <Card.Header>
                <Col md="12" className="text-left">
                <Card.Title as="h4">{ infoContenedor.title }</Card.Title>
                <p className="card-category"> { infoContenedor.subTitle } </p>
                </Col>
                <ModalForm infoModalForm={infoModalForm}/>
              </Card.Header>
              <Card.Body>
                {/* todos, handleDelete, handleToggle */}
                <TableHeader headerTableInfo={headerTableInfo} data={data} dataTable={dataTable}/>  
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
    </>
  )
}
