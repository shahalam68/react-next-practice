import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = function MyInput(props, ref) {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
};

const FrowardedMyInput = forwardRef(MyInput);
export default FrowardedMyInput;
