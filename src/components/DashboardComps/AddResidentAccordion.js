import React, { useState } from "react";
import {
  AccordionList,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Text,
} from "@tremor/react";

function AddResidentAccordion() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    age: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleDone = () => {
    // Do something with the form data
    console.log(formData);
  };

  return (
    <AccordionList className="max-w-md mx-auto">
      <Accordion>
        <AccordionHeader>
          <Text>Add Resident</Text>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex">
            {step === 1 && (
              <div>
                <p className="text-xs font-medium text-gray-500">1/3 - Address</p>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-4 p-2 border border-gray-300 rounded"
                />
                <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-2 w-1/3 rounded-full bg-blue-500"></div>
                  <h2 className="sr-only">Step 1</h2>
                </div>
                <div className="flex mt-4">
                  <button
                    className="px-4 py-2 bg-gray-500 text-white rounded mr-4"
                    onClick={handlePreviousStep}
                    disabled={step === 1}
                  >
                    Back
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="text-xs font-medium text-gray-500">2/3 - Name</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-4 p-2 border border-gray-300 rounded"
                />
                <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-2 w-2/3 rounded-full bg-blue-500"></div>
                  <h2 className="sr-only">Step 2</h2>
                </div>
                <div className="flex mt-4">
                  <button
                    className="px-4 py-2 bg-gray-500 text-white rounded mr-4"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="text-xs                 font-medium text-gray-500">3/3 - Age</p>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="mt-4 p-2 border border-gray-300 rounded"
                />
                <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-2 w-3/3 rounded-full bg-blue-500"></div>
                  <h2 className="sr-only">Step 3</h2>
                </div>
                <div className="flex mt-4">
                  <button
                    className="px-4 py-2 bg-gray-500 text-white rounded mr-4"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={handleDone}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </AccordionBody>
      </Accordion>
    </AccordionList>
  );
}

export default AddResidentAccordion;

