import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <ImageInputList />
      <ErrorMessage />
    </>
  );
};

export default FormImagePicker;
