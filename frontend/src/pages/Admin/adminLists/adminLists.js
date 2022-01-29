import React from "react";
import "./adminLists.css";
import { Carousel, Button } from "react-bootstrap";
import Announcement from "../../../components/Announcement";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../../../redux/actions/authAction";
import { useDispatch } from "react-redux";

function AdminLists() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersList = () => {
    dispatch(getAllUsers());
    navigate("/admin/userslist");
  };
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="ad">
        <Carousel className="car">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/young-man-wearing-headset-and-play-computer-video-games-online-home-picture-id1290727524?b=1&k=20&m=1290727524&s=170667a&w=0&h=8Ff68TwSesdnGUfE_GbVq5-9l-94vga7F0lAZOK8YkQ="
              alt="First slide"
              width="700px"
              height="700px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
              width="700px"
              height="700px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
              width="700px"
              height="700px"
            />
          </Carousel.Item>
        </Carousel>
        <div className="bt">
          <Button className="bt1" onClick={usersList}>
            Users List
          </Button>

          <Link to="/admin/productslist">
            <Button className="bt2">Products list</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLists;
