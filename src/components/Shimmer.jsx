import React from "react";
import "../Shimmer.css";

const Shimmer = () => {
  return (
   <div className="cards_rest">
     <div className="shimmer">
      <div className="img_shimmer image-card animate"></div>
      <div className="meal-content card_shim_meal">
        <p className="meal-title"></p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <div className="stroke animate title"></div>
          </li>
          <li className="meal-attribute">
            <div className="stroke animate link"></div>
          </li>
          <li className="meal-attribute">
            <div className="stroke animate description"></div>
          </li>
          <li className="meal-attribute">
            <div className="stroke animate description"></div>
          </li>
        </ul>
      </div>
    </div>
    <div className="shimmer">
      <div className="img_shimmer image-card animate"></div>
      <div className="meal-content card_shim_meal">
        <p className="meal-title"></p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <div className="stroke animate title"></div>
          </li>
          <li className="meal-attribute">
            <div className="stroke animate link"></div>
          </li>
          <li className="meal-attribute">
            <div className="stroke animate description"></div>
          </li>
          <li className="meal-attribute">
            <div className="stroke animate description"></div>
          </li>
        </ul>
      </div>
    </div>
   </div>

    
  );
};

export default Shimmer;
