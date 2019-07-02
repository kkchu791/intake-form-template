import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import './ClinicFormGroup.css';

const PersonalInfoFormGroup = (props) => {
  return (
     <div>
      <div className="title">
        Personal Information
      </div>

      <div className="form-inputs">

        <label className="label">
          First Name
        </label>

        <Field 
          type="first_name"
          name="first_name"
          placeholder="first name"
          className="input-field"
          onChange={props.handleChange}
        />

        <label className="label">
          Last Name
        </label>

        <Field 
          type="last_name"
          name="last_name"
          placeholder="last name"
          className="input-field"
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

export default PersonalInfoFormGroup;

