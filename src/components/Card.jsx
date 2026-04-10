import React from "react";

const Card = (props) => {
  console.log(props);
  
  return (
    <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1764533873501-bee26e5ea0f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="" />
      <h1>{props.name}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
        veritatis dolorum quos impedit, alias itaque, nulla voluptas modi,
        corporis suscipit debitis minus quidem harum laborum necessitatibus
        ipsa? Atque, ex magni.
      </p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
