"use client";

import CustomError from "../../../components/shared/CustomError";

export default function Error({ error, reset }) {
  return <CustomError error={error} reset={reset} />;
}
