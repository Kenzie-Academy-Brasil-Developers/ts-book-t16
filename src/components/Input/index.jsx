import { forwardRef } from "react";

export const Input = forwardRef(({ id, label, children, ...rest }, ref) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input id={id} ref={ref} {...rest} />
      {children}
    </div>
  );
});

