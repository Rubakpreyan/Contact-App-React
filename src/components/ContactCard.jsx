import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        style={{ marginTop: "12px" }}
        className="ui avatar image"
        src={user}
        alt=""
        srcset=""
      />
      <div className="content">
        <div
          style={{
            fontFamily: "sans-serif",
            marginBottom: "7px",
            marginTop: "10px",
            marginLeft: "5px",
            fontSize: "20px",
          }}
          className="header"
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            marginBottom: "7px",
            marginTop: "10px",
            marginLeft: "5px",
          }}
        >
          {email}
        </div>
      </div>

      <i
        style={{
          color: "red",
          marginTop: "1.2rem",
          float: "right",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        className="trash alternate outline icon"
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
