import React from "react";
import "./adminuser.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/actions/authAction";
function AdminUser({ user }) {
  const dispatch = useDispatch();
  const deletUser = () => {
    if (window.confirm("are you sure ")) {
      dispatch(deleteUser(user._id));
    }
  };
  return (
    <tbody>
      <tr>
        <th scope="row">{user._id}</th>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.email}</td>

        <td>
          {" "}
          <Button onClick={deletUser}>
            <i className="far fa-trash-alt"></i>
          </Button>
        </td>
      </tr>
    </tbody>
  );
}

export default AdminUser;
