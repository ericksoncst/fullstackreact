import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'
import _ from 'lodash';


import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field key={name} component={SurveyField} type="text" name={name} label={label}/>
      );
    });
  }

  render() {
    return (
      <div style={{ marginTop: '20px'}}> 
          <form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
            {this.renderFields()}
            <div style={{ marginTop: '15px'}}>
              <Link to="/surveys" className="red btn-flat left white-text">
                Cancel
              </Link>
              <button type="submit" className="teal btn-flat right white-text">
                NEXT
                <i className="material-icons right">done</i>
              </button>
            </div>
          </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, noValueErr }) => {
    if (!values[name]) {
      errors[name] = noValueErr;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);