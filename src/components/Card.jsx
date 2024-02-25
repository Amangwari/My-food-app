import React from "react";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

// const Card = ({ mealname, mealtype, cal, nut, rating }) => {
const Card = ({ resdata }) => {
  // console.log(resdata);

  // optional chaining
  const {
    cloudinaryImageId,
    totalRatingsString,
    name,
    costForTwo,
    cuisines,
    sla,
    avgRating,
  } = resdata?.info;
  return (
    <>
      {/* <div className="section-meals">
              <div className="container grid grid--3-cols margin-right-md"> */}
      <div className="meal">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
          className="meal-img"
          alt="Japanese Gyozas"
        />
        <div className="meal-content">
          <div className="meal-tags">
            <span className="tag tag--vegetarian">{totalRatingsString}</span>
          </div>
          <p className="meal-title">{name}</p>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
              <span>
                <strong>{costForTwo}</strong>
              </span>
            </li>
            <li className="meal-attribute">
              <ion-icon
                className="meal-icon"
                name="restaurant-outline"
              ></ion-icon>
              <span>
                {" "}
                <strong>{cuisines.join(", ")}</strong>
              </span>
            </li>
            <li className="meal-attribute">
              <ion-icon className="meal-icon" name="time-outline"></ion-icon>
              <span>
                <strong>{sla.deliveryTime} minutes</strong>
              </span>
            </li>
            <li className="meal-attribute">
              <ion-icon className="meal-icon" name="star-outline"></ion-icon>
              <span>
                <strong>{avgRating}</strong> rating
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
