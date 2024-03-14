import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const UserList = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        let user = res.data;
        console.log(res.data);
        setUser(user);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="flex gap-9 flex-wrap w-screen">
      {user.map((u) => (
        <div key={user.id}  className="flex   ">
          <div className="flex p-8 *:m-2  flex-wrap w-[400px] bg-blue-500">
            <div className="flex flex-col">
                <p>{`Name: ${u.name}`}</p>
                <p>{`Usename: ${u.username}`}</p>
                <p>{`Email: ${u.email}`}</p>
                <p>{`Website: ${u.website}`}</p>
                <p>{`Address: ${u.address.suite}, ${u.address.street}, ${u.address.city}`}</p>
                <p>{`phone No: ${u.phone}`}</p>
                <p>{`Company: ${u.company.name}.`}</p>
            </div>
            </div>

            </div>
      ))}
    </div>
  );
};

export default UserList;
