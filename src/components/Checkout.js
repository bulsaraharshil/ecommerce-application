import { useRef, useEffect } from "react";
import * as React from "react";

export default function Checkout() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleCardSubmit() {
    const cardDetail = inputRef.current.value;
    console.log({ cardDetail });
  }

  return (
    <div style={{ padding: "1rem" }}>
      <label>
        Credit Card Number:
        <input ref={inputRef} type="text" />{" "}
      </label>
      <button className="button button-primary" onClick={handleCardSubmit}>DONE</button>
    </div>
  );
}
