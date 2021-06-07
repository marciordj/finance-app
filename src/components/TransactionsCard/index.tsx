import React from 'react';

import { Amount, Category, Container, Date, Footer, Icon, Title, CategoryName } from './style';

export interface ITransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: {
    name: string;
    icon: string;
  };
  date: string;
  
}

interface IProps {
  data: ITransactionCardProps
}


const TransactionCard = ({ data }: IProps) => {
  return (
    <Container>
      <Title>{data?.title}</Title>

      <Amount type={data.type}>
        {data.type === 'positive' ? data.amount : `- ${data.amount}`}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data?.category?.icon} />
          <CategoryName>{data?.category?.name}</CategoryName>
        </Category>

        <Date>{data?.date}</Date>
      </Footer>
    </Container>
  )
}

export default TransactionCard;