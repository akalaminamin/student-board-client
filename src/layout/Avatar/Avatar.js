import React from "react";

const Avatar = (props) => {
  const { url, width = "100px", height = "100px" } = props;
  return (
    <div style={{ width: width, height: height }} className="mx-auto mt-4">
      <img src={url} className="rounded-circle card-img-top" alt="student" />
    </div>
  );
};

export default Avatar;
