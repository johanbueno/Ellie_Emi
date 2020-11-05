import React from "react";
import ImageToggleOnMouseOver from "../ImageTogglerOnMouseOver";
import Emi from "../img/Emi.jpg";
import EmiBlack from "../img/Emi.jpeg";
import Sisters from "../img/Sister copy.jpg";
import SisterBlack from "../img/Sister.jpeg";
import PumkinBlack from "../img/pumpkin.jpeg";
import Pumkin from "../img/pumpkin copy.jpg";

import "../index.css";

const ImageOnMouseOver = () => {
  return (
    <div id="bnwpics">
      <ImageToggleOnMouseOver
        primaryImg={Emi}
        secondaryImg={EmiBlack}
      ></ImageToggleOnMouseOver>
      <ImageToggleOnMouseOver
        primaryImg={Sisters}
        secondaryImg={SisterBlack}
      ></ImageToggleOnMouseOver>
      <ImageToggleOnMouseOver
        primaryImg={Pumkin}
        secondaryImg={PumkinBlack}
      ></ImageToggleOnMouseOver>
    </div>
  );
};

export default ImageOnMouseOver;
