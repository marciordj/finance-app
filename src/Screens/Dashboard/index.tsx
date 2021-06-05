import React from 'react'
import HighlightCard from '../../components/HighlightCard'

import { Container, Header, Photo, User, UserGreeting, UserInfo, UserName, Wrapper, Icon } from './styles'

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

      <HighlightCard />
    </Container>
  )
}

export default Dashboard