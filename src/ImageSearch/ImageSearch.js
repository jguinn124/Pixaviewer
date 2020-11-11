import React from "react";

const ImageSearch = (props) => {
  return (
    <div>
      <form onSubmit={props.handleGetRequest}>
        <input name="searchValue" placeholder="Search" />
      </form>
    </div>
  );
};

export default ImageSearch;
