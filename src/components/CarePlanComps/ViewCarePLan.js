import React from "react";
import { useSubmit } from "react-router-dom";

function ViewCarePlan({ carePlan }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  return (
    <React.Fragment>
      <div>
        {!carePlan ? (
          <p>This resident has no care plan.</p>
        ) : carePlan.length < 1 ? (
          <p>Nothing</p>
        ) : (
          <div>
            {carePlan.activity_schedule}
            <button onClick={startDeleteHandler}>Delete</button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default ViewCarePlan;
