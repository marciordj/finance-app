import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './style';

type IProps = TextInputProps;

const Input = ({ ...rest }: IProps) => {
  return <Container {...rest} />;
};

export default Input;
