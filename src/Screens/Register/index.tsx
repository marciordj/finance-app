import React, { useState, useCallback } from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const schema = Yup.object()
  .shape({
    name: Yup.string().required('Adicione o nome do seu produto'),
    amount: Yup.string().required('Adicione o preço do produto')
  })
  .required();

const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleTransactionType = useCallback((type: 'up' | 'down') => {
    return setTransactionType(type);
  }, []);

  const handleCloseCategoryModal = useCallback(() => setOpenCategoryModal(false), []);
  const handleOpenCategoryModal = useCallback(() => setOpenCategoryModal(true), []);

  const handleRegister = (form: IDataForm) => {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação');
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione uma categoria');
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    };
    return console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name='name'
              control={control}
              placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name='amount'
              control={control}
              placeholder='Preço'
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />

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
    </TouchableWithoutFeedback>
  );
};

export default Register;
