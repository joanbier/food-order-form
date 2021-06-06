import "./FormSuccess.css";

const FormSuccess = props => {
  return (
    <div className="success">
      <h2>We have received your request!</h2>
      <div>
        <h3>Your have ordered</h3>
        <p>{props.data.dish_name}</p>
        {props.data.diameter && <p>Diameter:{props.data.diameter}cm</p>}
      </div>
    </div>
  );
};

export default FormSuccess;
