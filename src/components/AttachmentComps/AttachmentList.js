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
  return (<React.Fragment>
          {attachments.map((item) => (
            <TableRow key={item.id}>
              <Link to={`./${item.id}`}>
                <TableCell>{item.description}</TableCell>
              </Link>
              <TableCell className="text-right">
                {item.upload_date}
              </TableCell>
              <TableCell className="text-right">
                <button onClick={() => startDeleteHandler(item.resident_id, item.id)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
  </React.Fragment>);
}

export default AttachmentList;
