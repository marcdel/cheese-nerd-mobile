/* @flow */
import React, { Component, Image } from "react";
import {
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Container,
  Header,
  Content,
  Footer,
} from 'native-base';

import { tabChanged } from '../actions/application';
import { queryChanged, cheesesFiltered } from '../actions/search';
import TitleBar from '../components/TitleBar';
import CheeseList from '../components/CheeseList';
import SearchBar from '../components/SearchBar';
import BottomNav from '../components/BottomNav';

export class Search extends Component {
  constructor() {
    super();

    this.filterList = this.filterList.bind(this);
  }

  componentWillMount () {
    this.filterList(this.props.query);
  }

  filterList (query) {
    const cheeses = this.props.cheeses;

    this.props.queryChanged(query);

    if(query === '') {
      this.props.cheesesFiltered(cheeses);
    }

    let filteredCheeses = {};
    Object.keys(cheeses).map((key) => {
      const cheese = cheeses[key];
      const name = cheese.name.toLowerCase();
      const match = name.includes(query.toLowerCase());

      if(match) {
        filteredCheeses[key] = cheese;
      }
    });

    this.props.cheesesFiltered(filteredCheeses);
  }

  render () {
    const { tab, tabChanged, query, filteredCheeses } = this.props;

    return (
      <Container>
        <Header>
          <Content>
            <TitleBar tab={tab} />
          </Content>
        </Header>

        <Content>
          <SearchBar query={query} textChanged={this.filterList} />
          <CheeseList cheeses={filteredCheeses} />
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
    cheeses: state.cheeses,
    query: state.search.query,
    filteredCheeses: state.search.filteredCheeses,
  }
}

Search.propTypes = {
  cheeses: React.PropTypes.object.isRequired,
};

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({tabChanged, queryChanged, cheesesFiltered}, dispatch)
)(Search);
