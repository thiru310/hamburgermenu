import "./css/formcontent.css";
import React, { useState } from "react";
import DropDown from "./DropDown";
import ReactSimpleDropDown from "./ReactSimpleDropDown";
import KaraikalMunicipality from "./KaraikalMuncipality";
export default function FormContent() {
  //fvalue hold and set with fname when submin clicked
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });
  const inputEvent = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setFullName((preVal) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preVal.lname,
          email: preVal.email,
          phone: preVal.phone
        };
      } else if (name === "lName") {
        return {
          fname: preVal.fname,
          lname: value,
          email: preVal.email,
          phone: preVal.phone
        };
      } else if (name === "email") {
        return {
          fname: preVal.fname,
          lname: preVal.value,
          email: value,
          phone: preVal.value
        };
      } else if (name === "phone") {
        return {
          fname: preVal.fname,
          lname: preVal.value,
          email: preVal.email,
          phone: value
        };
      }
    });
  };

  const onSubmits = (event) => {
    //preventDefault method used for not doing the default form action ex:not doing treffershing the page.
    event.preventDefault();
  };
  return (
    <>
    <div className="login-box">
    <form>
        {/* <div>
            <KaraikalMunicipality />
        </div> */}
    <div className="user-box">
        <div>
            <ReactSimpleDropDown/>
        </div>
      <DropDown />
        <label>Name of the Project</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="select your Project"
            name="fName"
          />
        <label>Name of the Project</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="enter the ULB"
            name="fName"
          />
        <label>Name of the ULB</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="select the proposed water supply"
            name="fName"
          />
        <label>Proposed for 24/7 Water Supply</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="DPR Cost (in CR)"
            name="fName"
          />
        <label>DPR Cost (in CR)</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="enter your total project cost"
            name="fName"
          />
        <label>TPC (Total Project Cost) Including O& M cost (in Cr)</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="enter dpr preparation date"
            name="fName"
          />
        <label>Est. DPR Preparation Date</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="select est award date"
            name="fName"
          />
        <label>Est. Award Date</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="select dpr preparation date"
            name="fName"
          />
        <label>DPR Preparation Date</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="select DD signed date"
            name="fName"
          />
        <label>DD (MA) SIGNED</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="select estimated completion date"
            name="fName"
          />
        <label>Est. Completion Date</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="select In Principal approval"
            name="fName"
          />
        <label>In Principal Approval SHPSC</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="SLTC Approval date"
            name="fName"
          />
        <label>SLTC Approval Date</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="DPR approved date"
            name="fName"
          />
        <label>DPR Approved SHPSC</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="G.O No."
            name="fName"
          />
        <label>G.O No.</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="G.O Issue date "
            name="fName"
          />
        <label>G.O Issue date </label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="Approved Project Cost "
            name="fName"
          />
        <label>Approved Project Cost </label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="GoI Share Capex (in CR)"
            name="fName"
          />
        <label>GoI Share Capex (in CR)</label>
      </div>
      <div className="user-box">
      <input
            type="text"
            onChange={inputEvent}
            placeholder="Project Status "
            name="fName"
          />
        <label>Project Status </label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>
    </>
  );
}
