import React from "react";
import { useSubmit } from "react-router-dom";

function ViewLeavesForm({ leaves }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  return (
    <React.Fragment>{leaves.map((item) => item.leave_date)}</React.Fragment>
  );
}

export default ViewLeavesForm;
