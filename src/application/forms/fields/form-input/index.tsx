import React from "react";
import { Field } from "react-final-form";
import InputProps from "./props";

const FormInput = ({ label, name, ...rest }: InputProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <div>
        <label>{label}</label>
        <input {...input} {...rest} />
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    )}
  </Field>
);

export default FormInput;
