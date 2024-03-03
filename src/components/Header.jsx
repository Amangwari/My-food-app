import React, { useState, useEffect } from "react";

const Header = () => {
  // let btnname = "Login"resList.length === 0
  const [btnname, setbtnname] = useState("Log In");

  console.log("header render");

  useEffect(()=>{
    console.log("useeffect runs")
  },[]) 

  console.log("header render2");

  return (
    <header id="header">
      <h1>
        <i className="fa fa-cutlery" aria-hidden="true"></i> Food Ordering App
       
      </h1>
      <div>
          <button
            onClick={() => {
              btnname === "Log In"
                ? setbtnname("Log Out")
                : setbtnname("Log In");
              console.log(btnname);
            }}
          >
            {btnname}
          </button>
        </div>
    </header>
  );
};

export default Header;
