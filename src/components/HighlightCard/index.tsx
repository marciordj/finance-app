import React from 'react';

import { Amount, Container, Content, Header, Icon, LastTransaction, Title } from './style';

interface IProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'income' | 'outcome' | 'total';
}

const HighlightCard = ({ title, amount, lastTransaction, type }: IProps) => {
  const icon = {
    income: 'arrow-up-circle',
    outcome: 'arrow-down-circle',
    total: 'dollar-sign'
  };

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Content>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Content>
    </Container>
  );
};

export default HighlightCard;
