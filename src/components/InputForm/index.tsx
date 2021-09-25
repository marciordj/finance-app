import React from 'react';

import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import Input from '../Form/Inputs';
import { Container } from './styles';

interface IProps extends TextInputProps {
  control: Control;
  name: string;
}

const InputForm = ({ control, name, ...rest }: IProps) => {
  console.log('name', name);
  return (
    <Container>
      <Controller
        control={control}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ field: { onChange, value } }) => <Input {...rest} value={value} onChangeText={onChange} />}
        name={name}
      />
    </Container>
  );
};

export default InputForm;
