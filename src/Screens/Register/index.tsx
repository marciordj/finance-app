import React from 'react';

import { Container, Fields, Form, Header, Title } from './style';

import Input  from '../../components/Form/Inputs/';
import Button from '../../components/Form/Button';



const Register = () => {
  return(
    <Container>
     <Header> 
      <Title>Cadastro</Title>   
    </Header>

    <Form>
      <Fields>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </Fields>

      <Button title="Enviar" />
    </Form>

    </Container>
  )
}

export default Register;