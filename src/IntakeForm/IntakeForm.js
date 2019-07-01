import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './IntakeForm.css';

const renderInputField = (param, setFormData, intakeData) => {

  return (
    <div className="form-field">
      <label htmlFor={param.field_name} className="label">
        {param.text}
      </label>

      <Field 
        type={param.field_name}
        name={param.field_name}
        placeholder={param.placeholder}
        className="input-field"
        onChange={(e) => setFormData(Object.assign({}, intakeData, {[`${param.field_name}`]: e.target.value})) }
      />

      <ErrorMessage name={param.field_name} component="div" />
    </div>
  );
}

const IntakeForm = (props) => {
  console.log(props, 'actions')
  return (
    <Form>
      <div className="title">
        {props.title}
      </div>

      <div className="form-inputs">
        {props.params.map(param => renderInputField(param, props.setFormData, props.intakeData)) }
      </div>
    </Form>
  )
}

export default IntakeForm;