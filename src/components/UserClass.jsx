import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const {name, location} = this.props;
    return (
      <div className="main_crd">
        <div className="user_crdd">
          <div>
            <img
              src="https://cdn.midjourney.com/b4917b7e-f175-4676-a093-b52c1071032a/grid_0.png"
              alt="John Doe"
            />
          </div>
          <div style={{ width: "100%" }}>
            <span>{name}</span><br/>
            <span>{location}</span>
          </div>
        </div>

        <div className="user_crdd">
          <div>
            <img
              src="https://cdn.midjourney.com/272769d6-641a-4959-8ff4-aea3fa394eba/grid_0.png"
              alt="John Doe"
            />
          </div>
          <div style={{ width: "100%" }}>
            <span>{name}</span><br/>
            <span>{location}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
