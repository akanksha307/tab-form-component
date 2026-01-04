export const Profile = ({ data, setData, error, setError }) => {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    setData((prevData) => ({
      ...prevData,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
        {error.name && <span className="error">{error.name}</span>}
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
        {error.age && <span className="error">{error.age}</span>}
      </div>
      <div>
        <label>Email : </label>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
        {error.email && <span className="error">{error.email}</span>}
      </div>
    </div>
  );
};
