import React from "react";
import Card from "../components/Card";
// import { RES_LIST } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
import Noresultfound from "../components/Noresultfound";
import axios from "axios";
import { Link } from "react-router-dom";
const Body = () => {
  // const [resList, setResList] = useState([RES_LIST]);
  const [resList, setResList] = useState([]);
  const [filteredRestaurent, setFilterdRestaurent] = useState([]);
  const [searchtext, setSearchtext] = useState("");

  // console.log(`Body Rendered`);

  useEffect(() => {
    // console.log("useeffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5027816&lng=77.3216404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
    // console.log(jsonData);
    setResList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants !== undefined
        ? jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants 
    );

    setFilterdRestaurent(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants !== undefined
        ? jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );

    // console.log(resList, "rl");
    // console.log(filteredRestaurent, "fr");

  };

  // console.log(resList)

  // console.log(resList[0]?.info?.name);
  return resList && resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="lowe_search_head">
        <div className="search_section">
          <div className="wrap_search">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                value={searchtext}
                onChange={(e) => {
                  setSearchtext(e.target.value);
                }}
                placeholder="What are you looking for?"
              />
              <button
                type="submit"
                className="searchButton"
                onClick={() => {
                  const filteredRes = resList.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchtext.toLowerCase())
                  );
                  console.log(filteredRes);
                  setFilterdRestaurent(filteredRes);
                }}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="filter_sec">
          <button
            className="btn btn_filter"
            onClick={() => {
              console.log("btn_click");
              const filteredlist = resList.filter(
                (response) => response.info.avgRating > 4.3
              );
              console.log(filteredlist);
              setResList(filteredlist);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      {filteredRestaurent.length === 0 ? (
        <Noresultfound />
      ) : (
        <div className="cards_rest">
          {/* not using keys (not acceptable) <<< index as a key <<< unique id (best practice) */}
          {filteredRestaurent.map((restaurant) => (
            console.log(restaurant),
            <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id} >
              <Card resdata={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
