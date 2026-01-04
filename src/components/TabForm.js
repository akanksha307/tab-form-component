import { useState } from "react";
import { Interests } from "./Interests";
import { Profile } from "./Profile";
import { Settings } from "./Settings";

export const TabForm = () => {
  const [data, setData] = useState({
    name: "Akanksha",
    age: "30",
    email: "akanksha@gmail.com",
    interests: ["Dancing", "Travelling"],
    theme: "dark",
  });

  const [error, setError] = useState({});

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }

        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "At least one interest must be selected";
        }

        setError(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevTab) => prevTab - 1);
    }
  };

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevTab) => prevTab + 1);
    }
  };

  const handleSubmitClick = () => {
    console.log("Submitted Data:", data);
  };

  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent
          data={data}
          setData={setData}
          error={error}
          setError={setError}
        />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};
