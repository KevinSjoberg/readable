import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import CategoryList from './CategoryList';
import CommentAdd from './CommentAdd';
import CommentEdit from './CommentEdit';
import FilteredPostList from './FilteredPostList';
import PostAdd from './PostAdd';
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
          <Route path="/:category?" component={CategoryList} />
        </Col>
        <Col xs="8">
          <Switch>
            <Route exact path="/posts/new" component={PostAdd} />
            <Route exact path="/:category?" component={FilteredPostList} />
            <Route exact path="/:category/:id" component={PostDetail} />
            <Route exact path="/:category/:id/edit" component={PostEdit} />
            <Route exact path="/:category/:postId/comments/new" component={CommentAdd} />
            <Route exact path="/:category/:postId/comments/:id/edit" component={CommentEdit} />
          </Switch>
        </Col>
      </Row>
    </Container>
  </Router>
);

export default App;
