import React from "react";

const ImageView = (props) => {
  const {
    largeImageURL: image,
    tags,
    user: owner,
    pageURL,
  } = props.location.state.image;
  return (
    <div>
      <img src={image} alt={tags} />
      <p>&copy;pixabay</p>
      <h4>
        Credit: <span>{owner}</span>
      </h4>
    </div>
  );
};

export default ImageView;
