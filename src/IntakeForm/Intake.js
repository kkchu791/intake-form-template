import React, { useState } from 'react';
import IntakeForm from './IntakeForm';
import './Intake.css';
import { Formik } from "formik";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import clinic_params from "./form_data"

const Intake = (props) => {
  const [intakeData, setFormData] = useState({});
  const {classes} = props;

  console.log(intakeData)

  return (
    <div className="intake">
      <Paper elevation={1} className="paper">
        <h1 className="intake-title">Intake Form</h1>

        <div className="clinic-form">
          <Formik
             render={props => {
                return (<IntakeForm
                  {...props}
                  title="Clinic Information"
                  params={clinic_params}
                  intakeData={intakeData}
                  setFormData={setFormData}
                />)
              }}
           />
        </div>

        <Button
          type="submit"
          fullWidth
          color="primary"
          className="submit-button"
          onClick={() => console.log(intakeData)}
        >
          Submit
        </Button>

      </Paper>
    </div>
  );
}

export default Intake;
