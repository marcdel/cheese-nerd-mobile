/* @flow */
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
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
    const photo = this.props.photo;
    return (
      <View>
        <Text>{this.props.userId}</Text>
        <Image source={{ uri: photo.url }} style={{ width: photo.width, height: photo.height }} />
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
    userId: state.user.credentials.userId,
    photo: state.user.photo,
  }
}

Account.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({logout}, dispatch)
)(Account);
