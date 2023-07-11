import React from 'react'
import { useSubmit } from 'react-router-dom';

function ViewIncidents({incidents}) {
    const submit = useSubmit();
    function startDeleteHandler() {
      const proceed = window.confirm("Are you sure?");
  
      if (proceed) {
        submit(null, { method: "delete" });
      }
    }
  return (
    <React.Fragment>
        {incidents.map((item)=>(item.description))}
    </React.Fragment>
  )
}

export default ViewIncidents