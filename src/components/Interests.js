export const Interests = ({ data, setData, error }) => {
  const { interests } = data;

  const handleInterestChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((interest) => interest !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Dancing"
            checked={interests.includes("Dancing")}
            onChange={handleInterestChange}
          />
          Dancing
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Travelling"
            checked={interests.includes("Travelling")}
            onChange={handleInterestChange}
          />
          Travelling
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Music"
            checked={interests.includes("Music")}
            onChange={handleInterestChange}
          />
          Music
        </label>
      </div>
      {error.interests && <span className="error">{error.interests}</span>}
    </div>
  );
};
