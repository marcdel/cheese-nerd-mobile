/* @flow */
import React, { Component, Image } from "react";
import {
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Icon
} from 'native-base';

export class Search extends Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem (key) {
    const cheese = this.props.cheeses[key];
    const image = require('../img/330.png');

    return (
      <ListItem key={key}>
        <Card>
          <CardItem>
            <Text>{cheese.name}</Text>
            <Text note>{cheese.name}</Text>
          </CardItem>

          <CardItem>
            <Thumbnail square size={330} source={image} />
            {/*
              <Icon name='ios-image' />
              <Image source={{ uri: cheese.image }}
                style={{ resizeMode: 'cover', width: 400, height: 400 }} />
            */}
          </CardItem>

          <CardItem>
            <Icon name='ios-checkmark-circle-outline' />
            <Text>Check-In</Text>
            <Icon name='ios-star' />
            <Icon name='ios-star' />
            <Icon name='ios-star' />
            <Icon name='ios-star-outline' />
          </CardItem>
        </Card>
      </ListItem>
    );
  }

  render () {
    return (
      <List>
        {Object.keys(this.props.cheeses).map((key) => this.renderItem(key))}
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

Search.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(Search);
