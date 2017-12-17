import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/c/:category" component={CategoryPage} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
