import React from 'react';

import HighlightCard from '../../components/HighlightCard';
import TransactionCard, { ITransactionCardProps } from '../../components/TransactionsCard';

import {
  Container,
  Header,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  Wrapper,
  Icon,
  HighlightCardsList,
  Transactions,
  Title,
  TransactionList
} from './styles';

export interface IDataListProps extends ITransactionCardProps {
  id: string;
}

const Dashboard = () => {
  const data: IDataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '06/06/2021'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: '06/02/2021'
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.500,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: '06/06/2021'
    }
  ];

  return (
    <Container>
      <Header>
        <Wrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/54960643?v=4'
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Marcio</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </Wrapper>
      </Header>

      <HighlightCardsList>
        <HighlightCard
          type='income'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de junho'
        />

        <HighlightCard
          type='outcome'
          title='Saídas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de junho'
        />

        <HighlightCard
          type='total'
          title='Total'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de junho'
        />
      </HighlightCardsList>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
