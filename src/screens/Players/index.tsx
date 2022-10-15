import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';
import { HighLight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

import { Container, Form } from './styles';

export function Players() {
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

      <Filter
        title="Time A"
      />
    </Container>
  );
}