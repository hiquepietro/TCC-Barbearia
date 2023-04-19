
import './App.css';
import {Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function App() {
  return (
    <div className="container">
      <h1>Login</h1>
      <Formik initialValues={{}}>
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field"
            placeHolder="Email"/>

            <ErrorMessage component="span"
            name="email"
            className="form-error"/>
          </div>

        </Form>
      </Formik>
    </div>
  );
}

export default App;
