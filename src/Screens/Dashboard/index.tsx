import React from 'react'
import HighlightCard from '../../components/HighlightCard'

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
  Title} from './styles'

const Dashboard = () => {
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
      </Transactions>
    </Container>
  )
}

export default Dashboard