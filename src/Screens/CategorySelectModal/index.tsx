/* eslint-disable no-shadow */
import React, { useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { data } from '../../data/data';
import Button from '../../components/Form/Button';

import { Category, Container, Header, Icon, Name, Separator, Title, Footer } from './style';

interface ICategory {
  key: string;
  name: string;
}

interface IProps {
  category: ICategory;
  setCategory: (category: ICategory) => void;
  closeSelectCategory: () => void;
}

const CategorySelect = ({ category, setCategory, closeSelectCategory }: IProps) => {
  const handleCategorySelect = useCallback(
    (category: ICategory) => {
      setCategory(category);
    },
    [setCategory]
  );

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
          <Category onPress={() => handleCategorySelect(item)} isActive={category.key === item.key}>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title='Selecionar' onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
};

export default CategorySelect;
