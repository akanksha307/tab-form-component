export const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleThemeChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleThemeChange}
          />
          Light
        </label>
      </div>
    </div>
  );
};
