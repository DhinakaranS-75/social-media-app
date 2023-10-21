import React from "react";
import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Dhinakaran Dhina</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Dhinakaran Dhina</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span>Nitesh</span> Profice Pic Changed
            </div>
            <span>10Hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
