import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

const PostForm = ({ fields, onInputChange, onSubmit }) => (
  <div>
    <h1>Edit post</h1>
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="author">Author</Label>
        <Input
          type="text"
          name="author"
          id="author"
          placeholder="What's your name?"
          valid={fields.author.valid}
          value={fields.author.value}
          onChange={onInputChange}
        />
        <FormFeedback>{fields.author.error}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Enter a title"
          valid={fields.title.valid}
          value={fields.title.value}
          onChange={onInputChange}
        />
        <FormFeedback>{fields.title.error}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="body">What&apos;s on your mind?</Label>
        <Input
          type="textarea"
          name="body"
          id="body"
          valid={fields.body.valid}
          value={fields.body.value}
          onChange={onInputChange}
        />
        <FormFeedback>{fields.body.error}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="category">Category</Label>
        <Input
          type="select"
          name="category"
          id="category"
          valid={fields.category.valid}
          value={fields.category.value}
          onChange={onInputChange}
        >
          <option>react</option>
          <option>redux</option>
          <option>udacity</option>
        </Input>
        <FormFeedback>{fields.category.error}</FormFeedback>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  </div>
);

PostForm.propTypes = {
  fields: PropTypes.objectOf(PropTypes.shape({
    error: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired,
    value: PropTypes.any.isRequired,
  })).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PostForm;
