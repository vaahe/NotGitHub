import React from "react";

export default function Button({ handleClick }) {
  return (
    <button>
      <img
        src="/assets/arrow-right.svg"
        alt="icon"
        width="70px"
        className="border-2 p-2 rounded-2xl mx-auto mt-5 hover:scale-125 cursor-pointer
        transition ease-in-out delay-150 duration-300"
        onClick={() => handleClick()}
      />
    </button>
  );
}
