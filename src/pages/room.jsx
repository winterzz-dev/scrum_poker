import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem, Row, Button, Actions, ActionsGroup, ActionsLabel, ActionsButton } from 'framework7-react';

export default class extends React.Component {
  render() {
    return (
      <Page >
        <Navbar title="Комната" backLink="Back" />
        <BlockTitle>Голосование</BlockTitle>
        <Block strong>
          <Row tag="p">
            <Button className="col" onClick={() => this.refs.actionsOneGroup.open()} fill>Голосовать</Button>
            <Button className="col" fill>Пропустить</Button>
          </Row>
        </Block>
        <BlockTitle>Результаты голосования</BlockTitle>
        <List>
          <ListItem title="Пользователь 1" badge="Ожидание" badgeColor="blue" />
          <ListItem title="Пользователь 2" badge="Ожидание" badgeColor="blue" />
          <ListItem title="Пользователь 3" badge="Ожидание" badgeColor="blue" />
        </List>

        <Actions ref="actionsOneGroup">
          <ActionsGroup>
            <ActionsLabel>Выберите карточку</ActionsLabel>
            <ActionsButton>0</ActionsButton>
            <ActionsButton>1</ActionsButton>
            {/* <ActionsButton>2</ActionsButton> */}
            <ActionsButton>3</ActionsButton>
            {/* <ActionsButton>5</ActionsButton> */}
            <ActionsButton>8</ActionsButton>
            <ActionsButton>13</ActionsButton>
            {/* <ActionsButton>21</ActionsButton> */}
            <ActionsButton>34</ActionsButton>
            <ActionsButton>55</ActionsButton>
            <ActionsButton>89</ActionsButton>
            <ActionsButton color="red">Отмена</ActionsButton>
          </ActionsGroup>
        </Actions>
      </Page >
    )
  }
};

