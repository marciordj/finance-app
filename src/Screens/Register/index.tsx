import React, { useState, useCallback } from 'react';
import { Modal } from 'react-native';

import Input from '../../components/Form/Inputs';
import Button from '../../components/Form/Button';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import CategorySelectButton from '../../components/Form/CategorySelect';

import { Container, Fields, Form, Header, Title, TransactionTypesContainer } from './style';
import CategorySelectModal from '../CategorySelectModal';

const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const handleTransactionType = useCallback((type: 'up' | 'down') => {
    return setTransactionType(type);
  }, []);

  const handleCloseCategoryModal = useCallback(() => setOpenCategoryModal(false), []);
  const handleOpenCategoryModal = useCallback(() => setOpenCategoryModal(true), []);

  const handleRegister = () => {
    const data = {
      name,
      amount,
      transactionType,
      category: category.key
    };
    console.log(data);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome' onChangeText={setName} />
          <Input placeholder='Preço' onChangeText={setAmount} />

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

          <CategorySelectButton title={category.name} onPress={handleOpenCategoryModal} />
        </Fields>

        <Button title='Enviar' onPress={handleRegister} />
      </Form>

      <Modal visible={openCategoryModal}>
        <CategorySelectModal
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseCategoryModal}
        />
      </Modal>
    </Container>
  );
};

export default Register;
