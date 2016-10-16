/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class ContainerTemplate extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <View>
        <Text>ContainerTemplate</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

ContainerTemplate.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(ContainerTemplate);
