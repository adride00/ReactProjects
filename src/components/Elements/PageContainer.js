import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import {ListItems} from './ListItems'
export const PageContainer = ({todos, deleteItem, toggleItem, modal}) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-tasks">
              <Card.Header>
                <Col md="12" className="text-left">
                <Card.Title as="h4">Tareas</Card.Title>
                <p className="card-category">Tareas Agregadas: {todos.length}</p>
                </Col>
                {modal}
              </Card.Header>
              <Card.Body>
                {/* todos, handleDelete, handleToggle */}
                <ListItems
                  data={todos}
                  deleteItem={deleteItem}
                  toggleItem={toggleItem}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
    </>
  )
}
