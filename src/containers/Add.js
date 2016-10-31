/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class Add extends Component {
  constructor() {
    super();
  }

  render () {
    const { selectedCheese } = this.props;
    return (
      <View>
        <Text>{selectedCheese}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCheese: state.add.selectedCheese
  }
}

Add.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(Add);
