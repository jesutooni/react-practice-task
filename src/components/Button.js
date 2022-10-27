const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className="py-1 px-4 mt-3 bg-red-400 text-white"
    >
      {props.children}
    </button>
  );
};

export default Button;
