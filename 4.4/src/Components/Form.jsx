import { useRef } from "react";
import MyInput from "./MyInput";

export default function Form() {
  const inputRef = useRef(null);
  const handleFovusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleFovusInput}>Focus the input</button>
    </>
  );
}
