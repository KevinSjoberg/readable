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

const CommentForm = ({ fields, onInputChange, onSubmit }) => (
  <div>
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
      <Button>Submit</Button>
    </Form>
  </div>
);

CommentForm.propTypes = {
  fields: PropTypes.objectOf(PropTypes.shape({
    error: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired,
    value: PropTypes.any.isRequired,
  })).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
