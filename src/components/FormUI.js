import React, { useState } from "react";
import InputControl from "./InputControl";

function FormUI() {
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    setFormData((formData) => {
      return {
        ...formData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const showData = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(event);
  };

  return (
    <div className="md:p-10 sm:p-5 shadow-lg rounded-lg m-5">
      <form>
        <div>
          <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 max-2xl:grid-cols-1">
            <InputControl
              name="documenttype"
              type="text"
              label="Document Type"
              handleEvent={handleChange}
            />
            <InputControl
              name="conpanycode"
              type="text"
              label="Company Code"
              handleEvent={handleChange}
            />
            <InputControl
              name="postingdate"
              type="date"
              label="Posting Date"
              handleEvent={handleChange}
            />
            <InputControl
              name="documentdate"
              type="date"
              lable="Document Date"
              handleEvent={handleChange}
            />
            <InputControl
              name="reference"
              type="text"
              label="Reference"
              handleEvent={handleChange}
            />
            <InputControl
              name="currency"
              type="text"
              label="Currency"
              handleEvent={handleChange}
            />
            <InputControl
              name="calculatetax"
              type="text"
              label="Calculate Tax"
              handleEvent={handleChange}
            />
            <InputControl
              name="documentheadertext"
              type="text"
              label="Document Header Text"
              handleEvent={handleChange}
            />
            <InputControl
              name="ledgergroup"
              type="text"
              label="Ledeger Group"
              handleEvent={handleChange}
            />
            <InputControl
              name="reveseralreason"
              type="text"
              label="Reveseral Reason"
              handleEvent={handleChange}
            />
            <InputControl
              name="reveseraldate"
              type="text"
              label="Reveseral Date"
              handleEvent={handleChange}
            />
            <InputControl
              name="reveseralperiod"
              type="text"
              label="Reveseral Period"
              handleEvent={handleChange}
            />
            <InputControl
              name="period"
              type="text"
              label="Period"
              handleEvent={handleChange}
            />
            <InputControl
              name="standardjename"
              type="text"
              label="Standard JE Name"
              handleEvent={handleChange}
            />
            <InputControl
              name="preparer"
              type="text"
              label="Preparer"
              handleEvent={handleChange}
            />
            <InputControl
              name="preparerdate"
              type="date"
              label="Preparer Date"
              handleEvent={handleChange}
            />
            <InputControl
              name="approver"
              type="text"
              label="Approver"
              handleEvent={handleChange}
            />
            <InputControl
              name="approveddateandtime"
              type="text"
              label="Approved Date and Time"
              handleEvent={handleChange}
            />
            <InputControl
              name="approverl2"
              type="text"
              label="Approver 12"
              handleEvent={handleChange}
            />
            <InputControl
              name="approverl2dateandtime"
              type="date"
              label="Approver L2 date And Time"
              handleEvent={handleChange}
            />
          </div>
          <button
            className="px-5 py-2 m-4 rounded text-white bg-cyan-700 capitalize hover:bg-cyan-600 hover:-translate-y-0.5 transition-all"
            onClick={showData}
          >
            Show Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormUI;
