import React, { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constants";

const RestaurantMenu = () => {
  const [ResInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRes();
  }, []);

  const { resId } = useParams();

  const fetchRes = async () => {
    const RestaurantResponse = await fetch(
        RES_MENU +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const jsonRestData = await RestaurantResponse.json();
    // console.log(jsonRestData);
    setResInfo(jsonRestData);
  };

  //   console.log(ResInfo);

  if (ResInfo == null) return <Shimmer />;

  const { name, cloudinaryImageId, costForTwoMessage, cuisines } =
    ResInfo?.data?.cards?.[0]?.card?.card?.info;

  const { itemCards } =
    ResInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards, "itmcard");

  return (
    <>
      <p>{name}</p>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <div style={{ marginTop: "30px" }}>
        <ul>
          {itemCards &&
            itemCards.map((card_itm) => {
              return (
                <>
                  <li key={card_itm.card.info.id}>
                    {card_itm.card.info.name} - Rs{" "}
                    {card_itm.card.info.price / 100}{" "}
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
