import React, { useState } from "react";
import Modal from "../../components/UIComps/ModalComp";
import {
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { getAuthToken } from "../../util/Auth";

function NewAttachmentPage() {
  const { resident } = useRouteLoaderData("resident-detail");
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [submitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  function cancelHandler() {
    navigate("..");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = getAuthToken();
    setIsSubmitting(false)

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);

    try {
      const response = await fetch(`/resident/upload/${resident.id}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });

      if (response.ok) {
        const confirmed = window.confirm("File uploaded successfully");
        if (confirmed) {
          setIsSubmitting(true)
          navigate("..");
        }
      } else if (response.status === 400) {
        const data = await response.json();
        window.alert(data.message); // Show the error message from the backend
      } else {
        window.alert("Failed to upload");
      }
    } catch (error) {
      window.alert("Network error", error);
    }
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Resident attachment
            </h2>
          </label>
          <input
            name="file"
            className="form-control mt-1 text-sm leading-6 text-gray-600 "
            type="file"
            id="formFileMultiple"
            onChange={handleFileChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
            onChange={handleDescriptionChange}
          />
          <br />
          <div className="space-x-4">
            <button
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
              disabled={submitting}
            >
              {submitting? "Submitting" : "Submit"}
            </button>
            <button
              onClick={cancelHandler}
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default NewAttachmentPage;