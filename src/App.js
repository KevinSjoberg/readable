import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import CategoryList from './components/CategoryList';
import FilteredPostList from './components/FilteredPostList';
import PostDetail from './components/PostDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
            <Row>
              <Col>
                <h1><Link to="/">Readable</Link></h1>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <CategoryList />
              </Col>
              <Col xs="8">
                <Route exact path="/:category?" component={FilteredPostList} />
                <Route exact path="/:category/:id" component={PostDetail} />
              </Col>
            </Row>
          </Container>
        </Router>
    );
  }
}

export default connect()(App);
