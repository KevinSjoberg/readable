import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/HomePage';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import { fetchCategories, fetchPosts } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <CategoryList />
          <Route exact path="/" component={HomePage} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
