import "./profile.css";
import React from "react";
import { Button } from "react-bootstrap";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import Loader from "../loading/loading";
import { Link } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.authReducer.user);
  const isLoading = useSelector((state) => state.authReducer.loading);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Announcement />
          <Navbar />
          <div className="prof">
            <div>
              <img
                className="pict"
                src={
                  user.pictureUrl
                    ? `uploads/${user.pictureUrl}`
                    : "https://booleanstrings.com/wp-content/uploads/2021/10/profile-picture-circle-hd.png"
                }
                width="400px"
                height="400px"
                alt="pictureprofile"
              />
            </div>
            <div className="info">
              <h3>First Name</h3>
              <p>{user.firstname}</p>
              <h3>Last name</h3>
              <p>{user.lastname}</p>
              <h3>Email</h3>
              <p>{user.email}</p>
              <Link to="/profile/editprofile">
                {" "}
                <Button variant="primary">Edit Profile</Button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Profile;
