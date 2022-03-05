import React from 'react'
import {Table} from 'react-bootstrap'
import {Items} from './Items'
export const ListItems = ({data, deleteItem, toggleItem}) => {
  return (
    <>

      <div className="table-full-width">
        <Table>
          <tbody>
            {
              data.map(todo => {
                return(
                  <Items 
                  key={todo.id} 
                  description={todo.description} 
                  deleteItem={() => deleteItem(todo.id)}
                  toggleItem={() => toggleItem(todo.id)}
                  complete={todo.done}
                  />
                )
              })
            }
          </tbody>
        </Table>
      </div>  
    
    </>
  )
}
