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
  Container,
  Header,
  Content,
  Footer,
  Card,
  CardItem,
  Thumbnail,
  Icon
} from 'native-base';

import { logout } from '../actions/user';
import { tabChanged } from '../actions/application';
import TitleBar from '../components/TitleBar';
import BottomNav from '../components/BottomNav';

export class Account extends Component {
  constructor() {
    super();
  }

  render () {
    const { tab, tabChanged, photo } = this.props;

    return (
      <Container>
        <Header>
          <Content>
            <TitleBar tab={tab} />
          </Content>
        </Header>

        <Content>
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
          </Content>

        <Footer>
          <BottomNav tab={tab} tabChanged={tabChanged} />
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.application.tab,
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
  (dispatch) => bindActionCreators({tabChanged, logout}, dispatch)
)(Account);
