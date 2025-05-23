const Button = ({ btntext, style, staricon }) => {
  return (
    <button className={` w-24 p-1 rounded-sm cursor-pointer ${style}`}>
      <img src={staricon} alt="" />
      {btntext}
    </button>
  );
};

export default Button;
