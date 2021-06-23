import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { Profile } from '../../component/Profile';
import { ButtonAdd } from '../../component/ButtonAdd';
import { CategorySelect } from '../../component/CategorySelect';
import { ListHeader } from '../../component/ListHeader';
import { Appointment } from '../../component/Appointment';
import { ListDivider } from '../../component/ListDivider';
import { Background } from '../../component/Backgound';
import { styles } from './style';

export function Home() {
  const [category, setCategory] = useState('');

  const appointments = [{
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20h40',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  }, {
    id: '2',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: false
    },
    category: '2',
    date: '22/06 às 20h40',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },
  {
    id: '3',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: false
    },
    category: '3',
    date: '22/06 às 20h40',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  }]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.hader}>
          <Profile
            urlImage='https://github.com/EdmilsonEMAndrade.png'
            username='Edmilson' />
          <ButtonAdd />
        </View>
        <View>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>
        <View style={styles.content}>
          <ListHeader title='Partidas agendadas' subTitle='6' />
          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} />
            )}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </View>
      </View>
    </Background>
  );
}