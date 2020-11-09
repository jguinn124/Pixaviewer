import React from "react";
import { Link } from "react-router-dom";

const ImageList = (props) => {
  console.log(props);
  return (
    <div>
      {props.images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.largeImageURL} alt={image.tags} />
            <Link
              to={{
                pathname: `/image/${image.id}`,
                state: { image: image },
              }}
            >
              <button> View </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default ImageList;
