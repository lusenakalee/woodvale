import React from "react";
import { Link, useSubmit } from "react-router-dom";

function IncidentDetail({incident}) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  return (
    <React.Fragment>
        {incident.id}
      <Link to="./edit">Edit</Link>
      <button onClick={startDeleteHandler}>Delete</button>
    </React.Fragment>
  );
}

export default IncidentDetail;
