import React from 'react';

import { Container, Form, Header, Title } from './style';

import Input  from '../../components/Form/Inputs/';



const Register = () => {
  return(
    <Container>
     <Header> 
      <Title>Cadastro</Title>   
    </Header>

    <Form>
      <Input placeholder="Nome" />
      <Input placeholder="Preço" />
    </Form>

    </Container>
  )
}

export default Register;