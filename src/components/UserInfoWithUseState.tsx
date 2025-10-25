import { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: "", age: "0", hobbies: [] });
  console.log(user);
  return (
    <form>
      <input
        className="border border-purple-500 m-10"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        className="border border-purple-500 m-10"
        type="number"
        name="age"
        id="age"
        placeholder="Age"
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <input
        className="border border-purple-500 m-10"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="Hobby"
        onChange={(e) => setUser({ ...user, hobbies: e.target.value })}
      />
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UserInfoWithUseState;
