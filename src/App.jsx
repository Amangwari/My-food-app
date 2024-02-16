import "./App.css";
import React from "react";

const Header = () => {
  return <div>Header</div>;
};

// const Card = ({ mealname, mealtype, cal, nut, rating }) => {
const Card = ({ resdata }) => {
  return (
    <>
      {/* <div className="section-meals">
        <div className="container grid grid--3-cols margin-right-md"> */}
      <div className="meal">
        <img
          src="https://github.com/erenburuk/html-css-course/blob/1aacbb283eed0f760ab9f905e4ad5099cfa11204/07-Omnifood-Desktop/img/meals/meal-1.jpg?raw=true"
          className="meal-img"
          alt="Japanese Gyozas"
        />
        <div className="meal-content">
          <div className="meal-tags">
            <span className="tag tag--vegetarian">{mealtype}</span>
          </div>
          <p className="meal-title">{mealname}</p>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
              <span>
                <strong>{cal}</strong> calories
              </span>
            </li>
            <li className="meal-attribute">
              <ion-icon
                className="meal-icon"
                name="restaurant-outline"
              ></ion-icon>
              <span>
                NutriScore &reg; <strong>{nut}</strong>
              </span>
            </li>
            <li className="meal-attribute">
              <ion-icon className="meal-icon" name="star-outline"></ion-icon>
              <span>
                <strong>{rating}</strong> rating
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};





const resObj = {
  info: {
    id: "411450",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "Bhavbhuti Marg",
    areaName: "Paharganj",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 3.6,
      serviceability: "SERVICEABLE",
      slaString: "28 mins",
      lastMileTravelString: "3.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-17 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/kfc-bhavbhuti-marg-paharganj-delhi-411450",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div>
      <div
        className="cards"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Card
          // mealname="Chicken Tikka Masala"
          // mealtype="lunch"
          // cal="223"
          // nut="86"
          // rating="4.4"
          resdata={resObj}
        />
        {/* <Card
          mealname="Roasted Vegetables with Cheese and Pistachios"
          mealtype="dinner"
          cal="543"
          nut="86"
          rating="4.4"
        />
        <Card
          mealname="Malai chaap"
          mealtype="lunch"
          cal="2334"
          nut="86"
          rating="4.4"
        />

        <Card
          mealname="Butter chilli chicken"
          mealtype="Dinner"
          cal="2334"
          nut="86"
          rating="4.4"
        /> */}
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
