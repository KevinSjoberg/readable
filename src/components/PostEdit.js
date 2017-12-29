import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

import { fetchPost, updatePost } from '../actions';
import { getIsFetchingPosts, getPostById } from '../reducers';
import validateFields, { required, anyOf } from '../utils/validators';

class PostEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        author: props.post.author,
        body: props.post.body,
        category: props.post.category,
        title: props.post.title,
      },
      fieldErrors: {
        author: '',
        body: '',
        category: '',
        title: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.fetchPost(id);
  }

  componentWillReceiveProps(nextProps) {
    const { post } = this.props;
    const { post: nextPost } = nextProps;

    if (nextPost !== post) {
      this.setState({
        fields: {
          author: nextPost.author,
          body: nextPost.body,
          category: nextPost.category,
          title: nextPost.title,
        },
      });
    }
  }

  handleChange(e) {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fields } = this.state;
    const { updatePost: doUpdatePost, history, match: { params: { id } } } = this.props;
    const { isValid, fieldErrors } = validateFields(fields, this.constructor.fieldValidators);
    if (isValid) {
      doUpdatePost(id, fields).then(({ post: { category } }) => {
        history.push(`/${category}/${id}`);
      });
    }
    this.setState({ fieldErrors });
  }

  render() {
    const { isFetchingPosts } = this.props;

    if (isFetchingPosts) {
      return <h1>Loading...</h1>;
    }

    const {
      fields: {
        author,
        body,
        category,
        title,
      },
      fieldErrors: {
        author: authorError,
        body: bodyError,
        category: categoryError,
        title: titleError,
      },
    } = this.state;

    return (
      <div>
        <h1>Edit post</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input type="text" name="author" id="author" placeholder="What's your name?" valid={authorError === ''} value={author} onChange={this.handleChange} />
            <FormFeedback>{authorError}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Enter a title" valid={titleError === ''} value={title} onChange={this.handleChange} />
            <FormFeedback>{titleError}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="body">What&apos;s on your mind?</Label>
            <Input type="textarea" name="body" id="body" valid={bodyError === ''} value={body} onChange={this.handleChange} />
            <FormFeedback>{bodyError}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input type="select" name="category" id="category" valid={categoryError === ''} value={category} onChange={this.handleChange}>
              <option>react</option>
              <option>redux</option>
              <option>udacity</option>
            </Input>
            <FormFeedback>{categoryError}</FormFeedback>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

PostEdit.defaultProps = {
  post: {
    author: '',
    body: '',
    category: '',
    title: '',
  },
};

PostEdit.fieldValidators = {
  author: [
    required,
  ],
  body: [
    required,
  ],
  title: [
    required,
  ],
  category: [
    anyOf(['react', 'redux', 'udacity']),
  ],
};

PostEdit.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  isFetchingPosts: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  post: getPostById(state, id),
  isFetchingPosts: getIsFetchingPosts(state),
});

export default connect(
  mapStateToProps,
  { fetchPost, updatePost },
)(PostEdit);
