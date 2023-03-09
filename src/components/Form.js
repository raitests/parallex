import React from "react";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import classes from "./Form.module.css";

let userSchema = object({
  email: string().email().required("please enter email"),
  password: string().required().min(8),
  number: number().required(),
});

const Form = () => {
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: { email: "", password: "", number: "" },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: userSchema,
    });

  return (
    <div className={classes.card}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          autoComplete="off"
        />
        {errors.email && touched.email ? <p>{errors.email}</p> : null}
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          autoComplete="off"
        />
        {errors.password && touched.password ? <p>{errors.password}</p> : null}
        <input
          type="number"
          name="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.number}
          autoComplete="off"
        />
        {errors.number && touched.number ? <p>{errors.number}</p> : null}
        <button type="submit" disabled>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
