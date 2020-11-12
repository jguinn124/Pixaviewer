import React from "react";
import Typography from "@material-ui/core/Typography";

const ImageView = (props) => {
  const {
    largeImageURL: image,
    tags,
    user: owner,
  } = props.location.state.image;
  return (
    <div>
      <img src={image} alt={tags} />
      <Typography variant="caption" component="p">
        <p>&copy;pixabay</p>
        <h4>
          Credit: <span>{owner}</span>
        </h4>
      </Typography>
    </div>
  );
};

export default ImageView;
