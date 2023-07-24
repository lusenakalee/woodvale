import React from "react";
import { json, redirect, useSubmit } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import { TableCell, TableRow } from "@tremor/react";
import { Link } from "react-router-dom";

function AttachmentList({ attachments }) {
  async function startDeleteHandler(resident_id, id) {
    const proceed = window.confirm("Are you sure?");
    const token = getAuthToken();
    if (proceed) {
      const response = await fetch(
        `/resident/upload/${resident_id}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw json(
          { message: "Could not delete attachment." },
          {
            status: 500,
          }
        );
      }
      return redirect(`/login/residents/${resident_id}/attachment`);
    }
  }
  return (
  <React.Fragment>
    {attachments.map((attachment)=>(attachment.upload_date))}
  </React.Fragment>);
}

export default AttachmentList;
