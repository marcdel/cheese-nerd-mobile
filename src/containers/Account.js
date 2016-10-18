/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class Account extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <View>
        <Text>{this.props.userId}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.userId
  }
}

Account.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(Account);
