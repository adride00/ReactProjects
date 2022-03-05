import React from 'react'
import { ModelContainer } from '../components/Elements/ModelContainer';
import { CrudFormUser } from '../components/Forms/CrudFormUser'
import useFetch from '../Hooks/useFetch'
import {Button, Col, Row, Modal} from 'react-bootstrap'
export const CrudApp = () => {

  const viewInfo = {
    "title": "Usuarios",
    "subTitle": "Gestion de usuarios",
    "componentTable": ""
  }

  const formInfo = {
    buttonName: 'Add User',
    title: 'Add User',
    form: <CrudFormUser/>,
    icon: '' 
  }

  const headerTableInfo = ["Avatar", "Name", "Last Name", "User", "Actions"]

  const {data, status, error} = useFetch("https://621eee05849220b1fca50665.mockapi.io/api/v1/user")

  const dataTable = [
    {
      column: "Avatar",
      row: "img"
    },
    {
      column: "Name",
      row: "name"
    },
    {
      column: "Last Name",
      row: "lastName"
    },
    {
      column: "User",
      row: "user"
    },
    {
      column: "Actions",
      row: <>
              <Button
              className="btn-simple"
              type="button"
              variant="link"
            >
              Edit
          </Button>
          <Button
              className="btn-simple"
              type="button"
              variant="link"
            >
              Erase
          </Button>
           </>
          
    }
  ]

  const handleSubmit = () => {

  }
  
  return (
    <>
      {
        data ?
        <ModelContainer infoContenedor={viewInfo} infoModalForm={formInfo} headerTableInfo={headerTableInfo} data={data} dataTable={dataTable}/>
        : 
        ""
      }
    </>
    
  )
}
