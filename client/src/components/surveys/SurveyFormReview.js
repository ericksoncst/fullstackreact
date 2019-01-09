import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name}>
        <label style={{fontWeight: "bold", fontSize: "12px"}}>{label}</label>
        <div style={{fontWeight: "bold", fontSize: "16px"}}>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please enter your entries</h5>
      {reviewFields}  
      <div style={{ marginTop: "15px"}} >
        <button className="yellow white-text darken-3 btn-flat" onClick={onCancel}>
          Back
        </button>
        <button 
          onClick={() => submitSurvey(formValues, history)}
          className="green white-text btn-flat right">
          Send Survey
          <i className='material-icons right'>email</i>
        </button>
      </div>      
    </div>
  )
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
