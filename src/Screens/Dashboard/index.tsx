import React from 'react'
import { Text } from 'react-native';

import { Container, Header, Photo, User, UserGreeting, UserInfo, UserName, Wrapper } from './styles'

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/54960643?v=4' }} />
            <User>
              <UserGreeting>Oi</UserGreeting>
              <UserName>Cara de boi</UserName>
            </User>
          </UserInfo>
        </Wrapper>
      </Header>
    </Container>
  )
}

export default Dashboard