import React, { useEffect } from "react";
import "./userslist.css";
import Announcement from "../../../components/Announcement";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import AdminUser from "./adminUser";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/actions/authAction";

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.authReducer.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <Announcement />
      <Navbar />
      <table className="table1">
        <thead className="thead1">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {users.map((user) => (
          <AdminUser key={user._id} user={user} />
        ))}
      </table>
      <Footer />
    </div>
  );
}

export default UsersList;
