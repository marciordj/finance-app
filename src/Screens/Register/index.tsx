import React, { useState, useCallback } from 'react';

import { Container, Fields, Form, Header, Title, TransactionTypesContainer } from './style';

import Input from '~/components/Form/Inputs';
import Button from '~/components/Form/Button';
import TransactionTypeButton from '~/components/Form/TransactionTypeButton';
import CategorySelect from '~/components/Form/CategorySelect';

const Register = () => {
  const [transactionType, setTransactionType] = useState('');

  const handleTransactionType = useCallback((type: 'up' | 'down') => {
    return setTransactionType(type);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />

          <TransactionTypesContainer>
            <TransactionTypeButton
              type='up'
              title='Income'
              onPress={() => handleTransactionType('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type='down'
              title='outcome'
              onPress={() => handleTransactionType('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionTypesContainer>

          <CategorySelect title='Categoria' />
        </Fields>

        <Button title='Enviar' />
      </Form>
    </Container>
  );
};

export default Register;
