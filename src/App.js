import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import FilteredPostList from './components/FilteredPostList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1><Link to="/">Readable</Link></h1>
          <CategoryList />
          <Route exact path="/:category?" component={FilteredPostList} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
