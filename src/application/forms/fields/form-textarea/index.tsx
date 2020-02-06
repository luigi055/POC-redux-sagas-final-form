import React from "react";
import { Field } from "react-final-form";
import TextAreaProps from "./props";

const FormTextArea = ({ label, name, ...rest }: TextAreaProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <div>
        <label>{label}</label>
        <textarea {...input} {...rest}></textarea>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    )}
  </Field>
);

export default FormTextArea;
