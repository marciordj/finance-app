import React from 'react';

import { Category, Container, Icon } from './style';

interface IProps {
  title: string;
}

const CategorySelect = ({ title }: IProps) => {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name='chevron-down' />
    </Container>
  );
};
export default CategorySelect;
