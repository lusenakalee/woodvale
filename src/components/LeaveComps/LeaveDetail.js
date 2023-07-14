import React from "react";
import { Link } from "react-router-dom";
import { useSubmit } from "react-router-dom";

function LeaveDetail({ leave }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  return (
    <React.Fragment>
        {leave.id}
      <Link to="./edit">Edit</Link>
      <button onClick={startDeleteHandler}>Delete</button>
    </React.Fragment>
  );
}

export default LeaveDetail;
