import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

import api from '../services/api';

function NewCategoryModal () {
  const [categoria, setCategoria] = React.useState('')
  const [modal, setModal] = React.useState(false)

  const toggle = () => setModal(!modal)

  const newCategory = async (text) => {
    try {
      const response = {name: text}
      await api.post('http://127.0.0.1:8000/api/orders/category', response)
      window.location.reload()
    } catch (e) {
      alert('Preencha o campo!')
    }
  }

  return (
    

      <div>
        <Button style={{backgroundColor: '#e27121'}} onClick={toggle}>Nova categoria</Button>
        <Modal isOpen={modal}
          toggle={toggle} >
          <ModalHeader toggle={toggle}>Nova Categoria</ModalHeader>
          <ModalBody>
            <Input onChange={e => setCategoria(e.target.value)} placeholder='Nome...' />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={e => newCategory(categoria)}>Salvar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }


export default NewCategoryModal;