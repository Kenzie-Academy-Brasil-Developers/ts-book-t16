export const Input2 = ({ id, label, register, children, ...rest }) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input id={id} {...rest} {...register}/>
      {children}
    </div>
  );
};

