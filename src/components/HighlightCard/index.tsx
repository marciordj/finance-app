import React from 'react';

import { Amount, Container, Content, Header, Icon, LastTransaction, Title } from './style';

const HighlightCard = () => {
  return (
    <Container>
      <Header>
        <Title>Entradas</Title>
        <Icon name='arrow-up-circle' />
      </Header>

      <Content>
        <Amount>
          R$ 17.400,00
        </Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Content>
    </Container>
  )
}


export default HighlightCard;