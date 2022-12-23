import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import api from '../services/api';

import NewOrderModal from './new_order_modal_component';

import dateFormatter from '../utils/date_formatter';
import numberFormatter from '../utils/number_formatter';

class DetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  

  render() {
    const handleDelete = async () => {
      await api.delete(`http://127.0.0.1:8000/api/orders/${this.props.data.id}`)
      window.location.reload()
    }

    return (
      <>
        <tr key={this.props.data.id} onClick={this.toggle}>
              <th scope="row">{this.props.data.id}</th>
              <td>{this.props.data.category_name}</td>
              <td>{this.props.data.contact_name + ' - ' + numberFormatter(this.props.data.contact_phone)}</td>
              <td>{this.props.data.estate_agency}</td>
              <td>{this.props.data.company}</td>
              <td>{dateFormatter(this.props.data.deadline)}</td>
        </tr>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Detalhes</ModalHeader>
          <ModalBody>
            <label style={{fontWeight: 'bold' }}>Nome</label>
              <p>{this.props.data.contact_name}</p>
              <hr />
            <label style={{fontWeight: 'bold' }}>Número de Contato</label>
              <p>{numberFormatter(this.props.data.contact_phone)}</p>
              <hr />
              <label style={{fontWeight: 'bold' }}>Categoria</label>
              <p>{this.props.data.category_name}</p>
              <hr />
            <label style={{fontWeight: 'bold' }}>Agência Imobiliaria</label>
              <p>{this.props.data.estate_agency}</p>
              <hr />
            <label style={{fontWeight: 'bold' }}>Compania</label>
              <p>{this.props.data.company}</p>
              <hr />
              <label style={{fontWeight: 'bold' }}>Descrição</label>
              <p>{this.props.data.order_description}</p>
              <hr />
            <label style={{fontWeight: 'bold' }}>Prazo</label>
              <p>{dateFormatter(this.props.data.deadline)}</p>
          </ModalBody>
          <ModalFooter>
            <NewOrderModal data={this.props.data}/>
            <Button color="danger" onClick={handleDelete}>Deletar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default DetailModal;