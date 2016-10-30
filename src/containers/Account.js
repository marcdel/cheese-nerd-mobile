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

import {
  Card,
  CardItem,
  Thumbnail,
  Icon
} from 'native-base';

import { logout } from '../actions/user';

export class Account extends Component {
  constructor() {
    super();
  }

  render () {
    const photo = this.props.photo;
    return (
      <View>
        <Card>
          <CardItem>
            <Text>{this.props.name}</Text>
            <Text note>{this.props.email}</Text>
          </CardItem>

          <CardItem>
            <Image style={{ resizeMode: 'cover' }} source={{ uri: photo.url }} />
          </CardItem>

          <CardItem>
            <FBLogin style={{ marginBottom: 10, }}
              permissions={["email","public_profile","user_friends"]}
              loginBehavior={FBLoginManager.LoginBehaviors.Native}
              onLogout={() => {
                this.props.logout();
                console.log("Logged out.");
              }} />
            </CardItem>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.credentials.userId,
    photo: state.user.photo,
    name: state.user.name,
    email: state.user.email,
  }
}

Account.propTypes = {
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({logout}, dispatch)
)(Account);
