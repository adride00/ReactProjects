import React from 'react'
import { Badge, Button, Navbar, Nav, Container, Row, Col, Card, Form, OverlayTrigger, Tooltip, Table, Alert } from "react-bootstrap";
import '../../assets/css/demo.css'
export const Items = ({description, deleteItem, toggleItem, complete}) => {
  // console.log(props)
  // props.delete(props.id)
  return (
    <>
      
      <tr className={complete ? 'complete-task' : 'pending-task'}>
        <td>
        <Form.Check className="mb-1 pl-0">
            <Form.Check.Label>
              <Form.Check.Input
                checked={complete}
                defaultValue=""
                type="checkbox"
                onClick={toggleItem}
              ></Form.Check.Input>
              <span className="form-check-sign"></span>
            </Form.Check.Label>
          </Form.Check>
        </td>
        <td>
          {description}
        </td>
        <td className="td-actions text-right">
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-488980961">
                Edit Task..
              </Tooltip>
            }
          >
            <Button
              className="btn-simple btn-link p-1"
              type="button"
              variant="info"
            >
              <i className="fas fa-edit"></i>
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-506045838">Remove..</Tooltip>
            }
          >
            <Button
              className="btn-simple btn-link p-1"
              type="button"
              variant="danger"
              onClick={deleteItem}
            >
              <i className="fas fa-times"></i>
            </Button>
          </OverlayTrigger>
        
        </td>
      </tr>    
      
    </>
  )
}
