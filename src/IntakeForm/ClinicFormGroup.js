import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import './ClinicFormGroup.css';

const ClinicFormGroup = (props) => {
  const [clinicData, setClinicData] = useState({});

  console.log(props.values, "props 1")

  return (
     <div>
      <div className="form-inputs">
        <label className="label">
          Clinic Attended
        </label>

        <Field 
          name="clinic_attended"
          placeholder="location"
          className="input-field"
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

export default ClinicFormGroup;

