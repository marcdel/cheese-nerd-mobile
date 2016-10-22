/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

import { logout } from '../actions/user';

export class Account extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <View>
        <Text>{this.props.userId}</Text>
        <FBLogin style={{ marginBottom: 10, }}
          permissions={["email","public_profile","user_friends"]}
          loginBehavior={FBLoginManager.LoginBehaviors.Native}
          onLogout={() => {
            this.props.logout();
            console.log("Logged out.");
          }} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.credentials.userId
  }
}

Account.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({logout}, dispatch)
)(Account);
