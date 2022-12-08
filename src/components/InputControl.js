import React from "react";

function InputControl(props) {
  return (
    <div className="cursor-text relative max-w-xs font-medium my-0.5">
      <div className="w-full">
        <input
          type={props.type}
          name={props.name}
          onChange={props.handleEvent}
          className="peer h-8 w-full border rounded px-2 text-teal-600 border-gray-300 placeholder-transparent focus:outline-none focus:border-transparent focus:border-b-teal-600 bg-transparent z-50"
          placeholder={props.label}
        ></input>
        <label className="absolute left-2 -top-5 bg-white text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm -z-20">
          {props.label}
        </label>
      </div>
    </div>
  );
}

export default InputControl;
