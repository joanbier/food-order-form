export default function validate(form) {
  if (!form.dish_name) {
    return "The name is required";
  } else if (form.dish_name.length < 4) {
    return "The name must be longer than 3 characters";
  }
  if (form.type === "pizza" && !form.no_of_slices) {
    return "Number of pizza slices is required";
  }

  if (form.type === "pizza" && form.diameter < 20) {
    return "Diamater is required";
  }

  if (form.type === "soup" && !form.spiciness_scale) {
    return "Spiciness scale is required";
  }
  if (form.type === "sandwich" && !form.slices_of_bread) {
    return "Number of slices of bread is required";
  }
  return null;
}
