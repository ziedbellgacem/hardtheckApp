import React from "react";
import "./comment.css";
import { Button } from "react-bootstrap";
import { deleteComment } from "../../redux/actions/commentAction";
import { useDispatch, useSelector } from "react-redux";

function Comment({ comment }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);

  return (
    <div className="container ">
      <div className="d-flex flex-row user-info">
        <img
          className="rounded-circle"
          src={
            comment.user.pictureUrl
              ? `uploads/${comment.user.pictureUrl}`
              : "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800057/61010892-ic%C3%B4ne-d-utilisateur-homme-profil-homme-d-affaires-avatar-illustration-vectorielle-de-glyphe-de-perso.jpg?ver=6"
          }
          width={40}
          alt="pict"
        />
        <div className="d-flex flex-column justify-content-start ml-2">
          <span className="d-block font-weight-bold name">
            {comment.user.firstname} {comment.user.lastname}
          </span>
          {/* <span className="date text-black-50">{setDate(new Date())}</span> */}
        </div>
      </div>
      <div className="comment12">
        <p className="commentText">{comment.text}</p>
        <Button
          variant="light"
          onClick={() => {
            dispatch(deleteComment(product._id, comment._id));
          }}
        >
          <i className="fas fa-times-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default Comment;
