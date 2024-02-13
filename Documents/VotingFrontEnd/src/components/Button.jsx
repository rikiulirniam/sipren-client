import { useState } from "react";

function Button(props) {
  return (
    <>
      <button onClick={() => props.change()} className="btn btn-primary">
        {!props.content ? "Hello" : props.content}
      </button>
    </>
  );
}

export default Button;
