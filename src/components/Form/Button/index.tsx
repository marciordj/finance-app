import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './style';

interface IProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...rest }: IProps) => {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
};

export default Button;
