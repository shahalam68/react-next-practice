import { forwardRef } from "react";

const MyInput = function MyInput(props, ref) {
  return <input {...props} ref={ref} />;
};

const FrowardedMyInput = forwardRef(MyInput);
export default FrowardedMyInput;
