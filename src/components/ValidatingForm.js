import PropTypes from 'prop-types';
import React, { Component } from 'react';
import validateFields from '../utils/validators';


const buildFormFields = (errors, values) =>
  Object.keys(values).reduce((fields, field) => ({
    ...fields,
    [field]: { error: errors[field], valid: errors[field] === '', value: values[field] },
  }), {});

class ValidatingForm extends Component {
  constructor(props) {
    super(props);

    this.state = Object.keys(props.fields).reduce((state, field) => ({
      ...state,
      errors: { ...state.errors, [field]: '' },
      values: { ...state.values, [field]: props.fields[field] },
    }), {});

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ values: { ...this.state.values, [name]: value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { validators } = this.props;
    const { values } = this.state;
    const { isValid, fieldErrors } = validateFields(values, validators);

    this.props.onSubmit(isValid, values);
    this.setState({ errors: fieldErrors });
  }

  render() {
    const { Form } = this.props;
    const { errors, values } = this.state;

    return (
      <Form
        fields={buildFormFields(errors, values)}
        onInputChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

ValidatingForm.propTypes = {
  fields: PropTypes.objectOf(PropTypes.string).isRequired,
  Form: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validators: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.func)).isRequired,
};

export default ValidatingForm;
