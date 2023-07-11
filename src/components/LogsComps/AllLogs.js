import React from "react";
import { json } from "react-router-dom";

function AllLogs({ logs }) {
  return(
    <React.Fragment>
      {logs.map((log)=>(log.heart_rate))}
    </React.Fragment>
  )
}

export default AllLogs;

