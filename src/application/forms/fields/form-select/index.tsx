import React from "react";
import { Field } from "react-final-form";
import SelectProps from "./props";

const FormSelect = ({ children, label, name }: SelectProps) => (
  <Field name={name}>
    {({ input, meta }) => (
      <div>
        <label>{label}</label>
        <select {...input}>{children}</select>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    )}
  </Field>
);

export default FormSelect;
