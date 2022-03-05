import React from 'react'
import {Table} from 'react-bootstrap'
import {TableRow} from './TableRow'
export const TableHeader = ({headerTableInfo, data, dataTable}) => {
  return (
    <>
      <Table className="table-hover table-striped">
        <thead>
          <tr>
            {headerTableInfo.map(info => <td>{info}</td>)}
          </tr>
        </thead>
        <TableRow dataTable={dataTable} data={data}/>
      </Table>
    </>
  )
}
