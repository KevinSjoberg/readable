import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import CategoryList from './CategoryList';
import CommentEdit from './CommentEdit';
import FilteredPostList from './FilteredPostList';
import PostDetail from './PostDetail';
import PostEdit from './PostEdit';

const App = () => (
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
          <Route exact path="/:category/:id/edit" component={PostEdit} />
          <Route exact path="/:category/:postId/comments/:id/edit" component={CommentEdit} />
        </Col>
      </Row>
    </Container>
  </Router>
);

export default App;
