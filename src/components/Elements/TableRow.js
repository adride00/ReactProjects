import React from 'react'

export const TableRow = ({data, dataTable}) => {
  // console.log(data, dataTable)
  return (
    <>

      <tbody>
        {
        data.map(row => {
          return (<tr key={row.id}>
            {dataTable.map(ele => <td>{ele.row === "img" ? <img src={`https://ui-avatars.com/api/?name=${row.name}+${row.lastName}&background=0D8ABC&color=fff&size=50`}/> : row[ele.row] || ele.row}</td>)}
          </tr>)
        }) 
        }   
      </tbody>   
      
    </>
  )
}
