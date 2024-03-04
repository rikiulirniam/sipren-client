function Alert({ message, color = "primary" }) {
  return <div className={"alert alert-" + color}>{message}</div>;
}
export default Alert;