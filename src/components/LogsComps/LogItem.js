import React from 'react'
import { Link } from 'react-router-dom';
import { useSubmit } from 'react-router-dom';

function LogItem({log}) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  return (
    <React.Fragment>
        {log.blood_pressure}
        <button onClick={startDeleteHandler}>Delete</button>
        <Link to="./edit">Edit</Link>
    </React.Fragment>
  )
}

export default LogItem