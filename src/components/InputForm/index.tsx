import React from 'react';

import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import Input from '../Form/Inputs';
import { Container, Error } from './styles';

interface IProps extends TextInputProps {
  control: Control;
  name: string;
  error: string | undefined;
}

const InputForm = ({ control, name, error, ...rest }: IProps) => {
  return (
    <Container>
      <Controller
        control={control}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ field: { onChange, value } }) => <Input {...rest} value={value} onChangeText={onChange} />}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default InputForm;
