import React, { useState, useCallback } from 'react';
import { Modal } from 'react-native';

import Input from '../../components/Form/Inputs';
import Button from '../../components/Form/Button';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import CategorySelectButton from '../../components/Form/CategorySelect';

import { Container, Fields, Form, Header, Title, TransactionTypesContainer } from './style';
import CategorySelect from '../CategorySelect';

const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const handleTransactionType = useCallback((type: 'up' | 'down') => {
    return setTransactionType(type);
  }, []);

  const handleCloseCategoryModal = useCallback(() => setOpenCategoryModal(false), []);
  const handleOpenCategoryModal = useCallback(() => setOpenCategoryModal(true), []);

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

          <CategorySelectButton title='Categoria' onPress={handleOpenCategoryModal} />
        </Fields>

        <Button title='Enviar' />
      </Form>

      <Modal visible={openCategoryModal}>
        <CategorySelect category='' setCategory={setCategory} closeSelectCategory={handleCloseCategoryModal} />
      </Modal>
    </Container>
  );
};

export default Register;
