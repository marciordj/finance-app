import React from 'react';

import { Amount, Category, Container, Date, Footer, Icon, Title, Type } from './style';

interface IProps {
  data: {
    title: string;
    amount: string;
    category: {
      name: string;
      icon: string;
    };
    date: string;
  }
}


const TransactionCard = ({ data }: IProps) => {
  return (
    <Container>
      <Title>{data?.title}</Title>

      <Amount>{data?.amount}</Amount>

      <Footer>
        <Category>
          <Icon name={data?.category?.icon} />
          <Type>{data?.category?.name}</Type>
        </Category>

        <Date>{data?.date}</Date>
      </Footer>
    </Container>
  )
}

export default TransactionCard;