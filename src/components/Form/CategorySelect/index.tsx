import React from 'react';

import { Category, Container, Icon } from './style';

interface IProps {
  title: string;
  onPress: () => void;
}

const CategorySelectButton = ({ title, onPress }: IProps) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name='chevron-down' />
    </Container>
  );
};
export default CategorySelectButton;
