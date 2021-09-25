import React, { useState, useCallback } from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';

import InputForm from '../../components/InputForm';
import Button from '../../components/Form/Button';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import CategorySelectButton from '../../components/Form/CategorySelect';

import { Container, Fields, Form, Header, Title, TransactionTypesContainer } from './style';
import CategorySelectModal from '../CategorySelectModal';

interface IDataForm {
  name: string;
  amount: string;
}

const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const { control, handleSubmit } = useForm();

  const handleTransactionType = useCallback((type: 'up' | 'down') => {
    return setTransactionType(type);
  }, []);

  const handleCloseCategoryModal = useCallback(() => setOpenCategoryModal(false), []);
  const handleOpenCategoryModal = useCallback(() => setOpenCategoryModal(true), []);

  const handleRegister = (form: IDataForm) => {
    const data = {
      name: form.name,
      amount: form.amount,
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
          <InputForm name='name' control={control} placeholder='Nome' />
          <InputForm name='amount' control={control} placeholder='Preço' />

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

        <Button title='Enviar' onPress={handleSubmit(handleRegister)} />
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
