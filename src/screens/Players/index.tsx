import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';
import { HighLight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  return (
    <Container>
      <Header showBackButton />

      <HighLight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon
          icon="add"
        />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>
    </Container>
  );
}