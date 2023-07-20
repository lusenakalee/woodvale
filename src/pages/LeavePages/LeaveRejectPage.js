import React from "react";
import Modal from "../../components/UIComps/ModalComp";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { getAuthToken } from "../../util/Auth";

function LeaveRejectPage() {
  const navigate = useNavigate();
  const data = useActionData();
  function cancelHandler() {
    navigate("..");
  }
  const navigation = useNavigation()
  const isSubmitting = navigation.state ==="submitting"
  return (
    <React.Fragment>
      <Modal>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <Form method="post">
          <p>Are you sure you want to Reject this leave</p>
          <button type="submit"disabled={isSubmitting}>{isSubmitting ? "Rejecting": "Yes"}</button>
          <button type="button" onClick={cancelHandler}>
            No
          </button>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default LeaveRejectPage;

export async function leaveRejectAction({ request, params }) {
  let url = "/leave-records/disapprove/";
  const token = getAuthToken();
  const data = await request.formData();
  const id = params.leaveId;
  const residentId = params.id;

  const rejectData = {
    reject_comment: data.get('reject'),
  }
  const response = await fetch(url + id, {
    method: "post",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(rejectData),
  });
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Something went wrong!!" }, { status: 500 });
  }
  return redirect(`/login/residents/${residentId}/leaves/${id}`);
}
