import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import HighlightCard from '../../components/HighlightCard'
import TransactionCard from '../../components/TransactionsCard'

import { Container, 
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
  TransactionList} from './styles'

const Dashboard = () => {
  const data = [{
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '06/06/2021' 
  },
  {
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '06/06/2021' 
  },
  {
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '06/06/2021' 
  }
]

  return (
    <Container>
      <Header>
        <Wrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/54960643?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Marcio</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </Wrapper>
      </Header>

      <HighlightCardsList>
        <HighlightCard
        type="income" 
        title="Entradas" 
        amount="R$ 17.400,00" 
        lastTransaction="Última entrada dia 13 de junho" 
        />

        <HighlightCard
        type="outcome" 
        title="Saídas" 
        amount="R$ 17.400,00" 
        lastTransaction="Última entrada dia 13 de junho" 
        />

        <HighlightCard
        type="total" 
        title="Total" 
        amount="R$ 17.400,00" 
        lastTransaction="Última entrada dia 13 de junho" 
        />
      </HighlightCardsList>
     
      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
        data={data} 
        renderItem={({item}) => <TransactionCard data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: getBottomSpace()
        }}
        />
        
      </Transactions>
    </Container>
  )
}

export default Dashboard