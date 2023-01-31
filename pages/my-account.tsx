import { useEffect, useState } from "react";

const fetchUserData = async () => {
  return fetch("/api/user", {
    headers: {
      'authorization': "Bearer token",
    },
  })
    .then((r) => r.json())
    .then((data) => data.data);
};
const MyAccount = () => {
  const [userData, setUserData] = useState({
    username: "",
    address: "",
    country: " ",
  });

  useEffect(() => {
    fetchUserData().then((user) => setUserData(user));
  }, []);

  return (
    <div>
      <h1>My account</h1>
      <section>
        <h2>User data</h2>
        <div>
          <label>username</label>
          <input type="text" readOnly value={userData.username} />
        </div>
        <div>
          <label>address</label>
          <input type="text" readOnly value={userData.address} />
        </div>
        <div>
          <label>country</label>
          <input type="text" value={userData.country} />
        </div>
      </section>
    </div>
  );
};

export default MyAccount;
