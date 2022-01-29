import React from "react";
import "./404page.css";

function ErorrPage() {
  return (
    <div className="err">
      <h2 className="title">404</h2>
      <p>Oops! Something is wrong.</p>
      <a className="button">
        <i class="fas fa-home"></i>Go back in initial page, is better.
      </a>
    </div>
  );
}

export default ErorrPage;
