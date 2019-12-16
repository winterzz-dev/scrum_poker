import React from 'react';
import { Page, Navbar, List, ListItem, BlockTitle, ListInput, Button, Row, Block } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products,
    }
  }
  render() {
    return (
      <Page name="create-room">
        <Navbar title="Провести голосование" />
        <BlockTitle>Настройки комнаты</BlockTitle>
        <List noHairlinesMd>
          <ListInput
            label="Название комнаты"
            type="text"
            placeholder="Название"
          ></ListInput>
        </List>
        <Block strong>
          <Row tag="p">
            <Button className="col" fill>Создать комнату</Button>
            <Button className="col" fill>Провести голосование</Button>
          </Row>
        </Block>

      </Page>
    );
  }
}