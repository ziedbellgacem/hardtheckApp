import React, { useState } from "react";
import Comment from "./Comment";
import "./commentlist.css";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/actions/commentAction";

function CommentList({ product }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentReducer.comments);
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div className="comment">
      <div className="bg-light p-2">
        <div className="d-flex flex-row align-items-start">
          <img
            className="rounded-circle"
            src={
              user.pictureUrl
                ? `uploads/${user.pictureUrl}`
                : "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800057/61010892-ic%C3%B4ne-d-utilisateur-homme-profil-homme-d-affaires-avatar-illustration-vectorielle-de-glyphe-de-perso.jpg?ver=6"
            }
            width={40}
            alt="img"
          />
          <textarea
            className="form-control ml-1 shadow-none textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mt-2 text-right">
          <button
            className="btn btn-primary btn-sm shadow-none"
            type="button"
            onClick={() => {
              dispatch(addComment(product._id, text));
              setText("");
            }}
          >
            Post comment
          </button>
          <button
            className="btn btn-outline-primary btn-sm ml-1 shadow-none"
            type="button"
            onClick={() => setText("")}
          >
            Cancel
          </button>
        </div>
      </div>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
