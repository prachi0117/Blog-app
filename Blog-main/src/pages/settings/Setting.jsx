import React from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./setting.scss";
export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="span1">Update Your Account</span>
          <span className="span2">Delete Account</span>
        </div>
        <form >
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="" />
            <label htmlFor="fileInput">
                <i className="settingIcon far fa-user-circle"></i>
            </label>
            <input type="file"  id="fileInput" style={{display:'none'}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Arpit" />
          <label>Email</label>
          <input type="email" placeholder="arpitgoyal841@gmail.com" />
          <label>Password</label>
          <input type="password"  />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
