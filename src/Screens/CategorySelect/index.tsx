import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { Category, Container, Header, Icon, Name, Separator, Title, Footer } from './style';
import Button from '../../components/Form/Button';

import { data } from '../../data/data';

interface Category {
  key: string;
  name: string;
}

interface IProps {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

const CategorySelect = ({ category, setCategory, closeSelectCategory }: IProps) => {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={data}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title='Selecionar' />
      </Footer>
    </Container>
  );
};

export default CategorySelect;
