import { StatelessComponent } from "react";

const Profile = ({ name, lastName, age }) => {
  return (
    <>
      <h2>Profile</h2>
      <h3>
        {name} {lastName}
      </h3>
      <h3>Age: {age}</h3>
    </>
  );
};

export default Profile;
