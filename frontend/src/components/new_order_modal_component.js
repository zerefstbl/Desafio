import { useState, useEffect } from 'react';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

import api from '../services/api';

import NewCategoryModal from './new_category_modal_component';

function NewOrderModal ({data}) {
    const [modal, setModal] = useState(false)
    const [nome, setNome] = useState(data && data.contact_name)
    const [numero, setNumero] = useState(data && data.contact_phone)
    const [agencia, setAgencia] = useState(data && data.estate_agency)
    const [compania, setCompania] = useState(data && data.company)
    const [descricao, setDescricao] = useState(data && data.order_description)
    const [categoria, setCategoria] = useState(data && data.order_category)
    const [categorias, setCategorias] = useState([])
    const [prazo, setPrazo] = useState(data && data.deadline)

    const toggle = () => setModal(!modal)

    useEffect(() => {
      const getCategories = async () => {
        const categories = await api.get('/category')
        setCategorias(categories.data)
      }

      getCategories()
    }, [])

    async function handleClick() {
      try {
        const dados = {
          contact_name: nome,
          contact_phone: numero,
          estate_agency: agencia,
          order_description: descricao,
          company: compania,
          order_category: categoria,
          deadline: prazo
        }

        const response = !data ? await axios.post('http://127.0.0.1:8000/api/orders/', dados) : 
        await axios.put(`http://127.0.0.1:8000/api/orders/${data.id}`, dados)
        
        window.location.reload()
      } catch (e) {
        alert('Preencha todos campos corretamente!!')
      }
    }

    return (
      <div>
        <Button style={{backgroundColor: '#e27121'}} onClick={toggle}>{!data ? 'Criar novo pedido' : 'Editar'}</Button>
        <Modal isOpen={modal}
                toggle={toggle}>
                <ModalHeader>
                  Novo Pedido
                </ModalHeader>
                <ModalBody>
                    <Input onChange={(event) => setNome(event.target.value)} value={nome} placeholder="Nome" />
                    <hr />
                    <Input onChange={(event) => setNumero(event.target.value)} value={numero} type='number' placeholder="Número" />
                    <hr />
                    <Input onChange={(event) => setAgencia(event.target.value)} value={agencia} placeholder="Agência" />
                    <hr />
                    <Input onChange={(event) => setCompania(event.target.value)} value={compania} placeholder="Compania" />
                    <hr />
                    <Input onChange={(event) => setDescricao(event.target.value)} value={descricao} placeholder="Descrição" />
                    <hr />
                    <Input defaultValue={1} onChange={(e) => setCategoria(e.target.value)} type="select" name="select" id="exampleSelect">
                      {categorias ? categorias.map((categoria) => (
                        <option value={categoria.id}>{categoria.name}</option>
                      )) : alert('Crie uma categoria, para poder adicionar um novo pedido!')}
                    </Input>
                    <hr />
                    <Input type='date' onChange={(event) => setPrazo(event.target.value)} value={prazo} placeholder="Prazo Final" />
                    <hr />
                </ModalBody>
                <ModalFooter>
                  <NewCategoryModal />
                  <Button onClick={handleClick} color="primary">Salvar</Button>
                </ModalFooter>
            </Modal>
      </div>
    );
  }

export default NewOrderModal;