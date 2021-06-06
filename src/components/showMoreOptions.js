export default function showMoreOptions(form, updateField) {
  const bcg = value => {
    if (value <= 3) {
      return "green";
    } else if (value <= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  if (form.type === "soup") {
    return (
      <label>
        Spiciness_scale scale:
        <input
          type="range"
          name="spiciness_scale"
          id="spiciness_scale"
          min="1"
          max="10"
          value={form.spiciness_scale}
          onChange={updateField}
        />
        <output style={{ backgroundColor: bcg(form.spiciness_scale) }}>
          {form.spiciness_scale}
        </output>
      </label>
    );
  } else if (form.type === "pizza") {
    return (
      <>
        <label>
          Number of slices:
          <input
            type="number"
            name="no_of_slices"
            id="no_of_slices"
            min="1"
            max="16"
            placeholder="8 slices"
            value={form.no_of_slices}
            onChange={updateField}
          />
        </label>
        <label>
          Diameter:{" "}
          <input
            type="number"
            step="0.01"
            min="20"
            max="60"
            name="diameter"
            placeholder="30cm"
            id="diameter"
            onChange={updateField}
            value={form.diameter}
          />
        </label>
      </>
    );
  } else if (form.type === "sandwich") {
    return (
      <label>
        Number of slices of bread required:
        <input
          type="number"
          min="1"
          max="10"
          placeholder="4 slices"
          name="slices_of_bread"
          id="slices_of_bread"
          onChange={updateField}
          value={form.slices_of_bread}
        />
      </label>
    );
  }
}
