import React from "react";
import Images from "./ImgThumbnails";
import ImageOnMouseOver from "./pages/ImageChangeOnMouseOver";
import ImageToggleOnMouseOver from "./ImageTogglerOnMouseOver";

function Bows() {
  return (
    <>
      <h1>Fall Collection</h1>
      <ImageToggleOnMouseOver />
      <ImageOnMouseOver />
      <Images />
    </>
  );
}

export default Bows;
