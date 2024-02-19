import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import useLocalStorage from "../../hook/useLocalStorage";
import Mode from "../Mode";

function UserPanel() {
  // const [users, setUsers] = useLocalStorage("users", []);
  const [users, setUsers] = useState([]);
  const { decode, token } = useContext(UserContext);

  useEffect(() => {
    getAll();
  }, []);


  // refreshde silinir
  async function getAll() {
    const data = await fetch("http://localhost:3000/api/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await data.json();
    setUsers(res);
  }

  async function deleteUser(id) {
    if (decode && decode.role === "admin") {
      await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await getAll();
      console.log(decode.role);
      console.log(token);
    }
  }

  
  return (
    <>
      <table border={"1px solid gray"}>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>role</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((x) => (
              <tr key={x._id}>
                <th>{x._id}</th>
                <td>{x.username}</td>
                <td>{x.email}</td>
                <td>{x.role}</td>
                <td>
                  <button>update</button>
                </td>
                <td>
                  <button onClick={() => deleteUser(x._id)}>delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Mode />
    </>
  );
}

export default UserPanel;
