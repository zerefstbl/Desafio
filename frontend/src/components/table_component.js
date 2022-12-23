import React from 'react';

import { Table } from 'reactstrap';

import DetailModal from './detail_modal_components';

export default function TableComponent ({data}) {
  return (
    <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            <th>Contato</th>
            <th>Agência</th>
            <th>Compania</th>
            <th>Prazo</th>
          </tr>
        </thead>
        <tbody>
          {data ? data.map((data) => <DetailModal data={data}/>) : console.log('Ola')}
        </tbody>
      </Table>
  )
}