"use client";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
  borderWidth: "8px",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#79A471"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Spinner;
