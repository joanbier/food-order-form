import "./FormSuccess.css";

const FormSuccess = props => {
  const {
    dish_name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread
  } = props.data;
  return (
    <div className="success">
      <h2>We have received your request!</h2>
      <div className="details">
        <h3>Details of your order:</h3>
        <p>
          {type}: <span>{dish_name}</span>
        </p>
        <p>
          Preparation time: <span>{preparation_time}</span>
        </p>
        {diameter && (
          <p>
            Diameter: <span>{diameter}cm</span>
          </p>
        )}
        {no_of_slices && (
          <p>
            Number of slices: <span>{no_of_slices}</span>{" "}
          </p>
        )}
        {spiciness_scale && (
          <p>
            Spiciness scale: <span>{spiciness_scale}</span>{" "}
          </p>
        )}
        {slices_of_bread && (
          <p>
            Slices of bread: <span>{slices_of_bread}</span>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormSuccess;
