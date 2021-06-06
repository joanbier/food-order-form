import React, { useState } from "react";
import "./Form.css";
import FormSuccess from "./FormSuccess";
import showMoreOptions from "./showMoreOptions";
import validation from "./validation";
import axios from "axios";

//https://jsonplaceholder.typicode.com/posts

const Form = () => {
  const [form, setForm] = useState({
    dish_name: "",
    preparation_time: "--:--:--",
    type: "",
    id: `order-${Date.now().toString(32)}`,
    no_of_slices: "",
    diameter: "",
    spiciness_scale: "",
    slices_of_bread: ""
  });

  const [error, setError] = useState(null);

  const [sent, setSent] = useState(false);

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    if (e.target.type === "range" || e.target.type === "number") {
      setForm({
        ...form,
        [e.target.name]: Number(e.target.value)
      });
    }

    if (e.target.name === "type") {
      const selected_type = e.target.value;

      switch (selected_type) {
        case "pizza":
          setForm({
            ...form,
            preparation_time: "01:20:00",
            type: selected_type,
            spiciness_scale: "",
            slices_of_bread: ""
          });
          break;
        case "soup":
          setForm({
            ...form,
            preparation_time: "00:25:00",
            type: selected_type,
            diameter: "",
            no_of_slices: "",
            slices_of_bread: ""
          });
          break;
        case "sandwich":
          setForm({
            ...form,
            preparation_time: "00:40:00",
            type: selected_type,
            diameter: "",
            no_of_slices: "",
            spiciness_scale: ""
          });
          break;
        default:
          console.log(`Sorry, we are out of ${selected_type}.`);
      }
    }
  };

  const setID = () => {
    const getId = `order-${Date.now().toString(32)}`;
    return getId;
  };

  const cutEmpty = () => {
    const data = {};
    for (const [key, value] of Object.entries(form)) {
      if (value) {
        data[key] = value;
      }
    }
    return data;
  };

  const hideSuccessForm = () => {
    setTimeout(() => setSent(false), 5000);
  };

  const sendToServer = data => {
    axios
      .post("https://frosty-wood-6558.getsandbox.com:443/dishes", {
        title: "Food order",
        body: data
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errorMsg = validation(form);
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    setForm({ ...form, id: setID() });
    sendToServer(cutEmpty());
    setError(null);
    setSent(true);
    hideSuccessForm();
  };

  return (
    <div>
      <h1>What would you like to eat?</h1>
      {error && (
        <div className="error">
          <i className="fas fa-info-circle"></i> {error}
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate className="form-container">
        <label>
          Dish name:
          <input
            type="text"
            name="dish_name"
            id="dish_name"
            placeholder="HexOcean pizza..."
            value={form.dish_name}
            onChange={updateField}
          />
        </label>
        <label>
          Preparation time:
          <input
            disabled
            type="time"
            step="2"
            name="preparation_time"
            id=""
            value={form.preparation_time}
          />
        </label>
        <label>
          Dish type:
          <select name="type" onChange={updateField}>
            <option value="">--Choose the dish--</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </select>
        </label>
        {showMoreOptions(form, updateField)}
        <button disabled={!form.type || sent} type="submit">
          Submit
        </button>
      </form>
      {sent && <FormSuccess data={cutEmpty(form)} />}
    </div>
  );
};

export default Form;
