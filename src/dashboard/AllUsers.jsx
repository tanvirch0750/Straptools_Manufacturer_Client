import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import auth from "../Firebase.init";

const AllUsers = () => {
  const navigate = useNavigate();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="all-user">
      <h2 className="">All User</h2>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td data-lebel="">{idx + 1}</td>
                <td data-lebel="Email">{user.email}</td>
                <td data-lebel="Quantity">User</td>
                <td data-lebel="Make Admin">
                  <button className="btn table-btn">Make Admin</button>
                </td>
                <td data-lebel="Delete">
                  <button className="btn table-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
