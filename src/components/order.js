import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import  "../cssFiles/order.css";

function Order() {
    
  const [fullname, setfullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [pieces, setPieces] = useState("");
  const [design, setDesign] = useState("");
  const [alergi, setAlergi] = useState("");
  const [date, setDate] = useState("");
  const [banana, setBanana] = useState(false);
  const [walnut, setWalnut] = useState(false);
  const [strawberry, setStrawberry] = useState(false);
  const [error, setError] = useState("");

  const calculateHandler = () => {
    if (!fullname) {
      return setError("Please enter Fullname");
    } else if (!type) {
      return setError("Please choose type of cake");
    } else if (!pieces) {
      return setError("Please choose number of pieces");
    } else if (!design) {
      return setError(" Please choose a design");
    } else if (!alergi) {
      return setError("Please explain allergi");
    } else if (!date) {
      return setError("Please enter a date");
    } else if (!phone) {
      return setError("Please enter phone number");
    }
    const p1 = React.createElement(
      "p",
      { id: "announce" },
      "Dear " +
        fullname +
        ", you have choosen " +
        type +
        " cake with " +
        pieces +
        " pieces and " +
        design +
        " design, for " +
        date +
        ". Allergies include " +
        alergi
    );
    ReactDOM.render(p1, document.getElementById("announce-container"));
    const p2 = React.createElement(
      "p",
      { id: "accept" },
      "Are you sure to order your cake? "
    );
    ReactDOM.render(p2, document.getElementById("ask-container"));
    const button = React.createElement(
      "button",
      { id: "btn" },
      "Yes "
    );
    ReactDOM.render(button, document.getElementById("button-container"));
    const button2 = React.createElement("button", { id: "btn" }, "No ");
    ReactDOM.render(button2, document.getElementById("button2-container"));
  };
  return (
    <div>
    <Header />
    <div className="presentationSection">
    <h2 className="orderTitle">Beställ tårta som passsar dig</h2>
    <div className="orderStyle">
   
      <form className="orderFormStyle">
        {/* fullname input */}
        <div>
          <label>
            Full name :
            <input
              type="text"
              name="fullname"
              placeholder="Your name"
              onChange={(e) => setfullname(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <br />
        {/* Phone number input */}
        <div>
          <label>
            Phone Number :
            <input
              type="text"
              maxLength="10"
              size="30"
              placeholder="Please enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <br />
        {/*  address input */}
        <div>
          <label>
            Home address :
            <input
              type="text"
              placeholder="Please enter your home address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <br />
        {/* Email address input */}
        <div>
          <label>
            Email:
            <input
              type="email"
              size="30"
              placeholder="Please a valid email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <br />
        {/* Type of cake input */}
        <div className="typeOfCake">
          <label>
            Välj smak :
            <select
              id="sel"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">smak</option>
              <option value="Choclate">Choclate</option>
              <option value="Red velwet">Red velvet</option>
              <option value="Vanilj">Vanilj</option>
            </select>
          </label>
        </div>
        <br />
        <br />
        {/* Number of pieces input */}
        <div className="numberPieces">
          <label>Antal bytar :</label>
          <select
            value={pieces}
            onChange={(e) => setPieces(e.target.value)}
            required
          >
            <option value="">Välj en siffra</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <br />
        <br />
        {/* Design input */}
        <div className="design">
          <label>Design :</label>
          <br />
          <br />
          <label className="designLabel2">
            Simple
            <input
              type="radio"
              value="Simple"
              onChange={(e) => setDesign(e.target.value)}
              name="design"
            />
          </label>
          <br />
          <br />
          <label>
            Moderate
            <input
              type="radio"
              value="Moderate"
              onChange={(e) => setDesign(e.target.value)}
              name="design"
            />
          </label>
          <br />
          <br />
          <label>
            Advance
            <input
              type="radio"
              value="Advance"
              onChange={(e) => setDesign(e.target.value)}
              name="design"
              required
            />
          </label>
        </div>
        <br />
        <br />
        {/* alergi input */}
        <div className="alergier">
          <label>
            Skriv gärna om du har några alergier:
            <input
              type="text"
              name="alergi"
              onChange={(e) => setAlergi(e.target.value)}
              required
            />
          </label>
        </div>

        <br />
        <br />
        {/* Date of ceremony input  */}
        <div className="datumPick">
          <label>
            Välj datum :
            <input
              type="date"
              name="offerdate"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <br />
        {/* material input  */}
        <div className="materials">
          <label>Materials:</label>
          Banana
          <input
            value="banana"
            type="checkbox"
            name="banana"
            onChange={(e) => setBanana(e.target.checked)}
          />
          Walnut
          <input
            value="walnut"
            type="checkbox"
            name="Walnut"
            onChange={(e) => setWalnut(e.target.checked)}
          />
          Strawberry
          <input
            value="strawberry"
            type="checkbox"
            name="Strawberry"
            onChange={(e) => setStrawberry(e.target.checked)}
          />
        </div>
        <br />
        <br />
        {/* button input */}
        <div>
        
        <button
            className="welcomeButton"
            type="button"
            onClick={calculateHandler}
            value="Calculate Price"
            name="calc"
          > Räkna priset
        </button>
          
        </div>
      </form>
      <div id="announce-container"></div>
      <div id="ask-container"></div>
      <div id="button-container"></div>
      <div id="button2-container"></div>
      {error}
      </div>
      <Footer />
      </div>
    </div>
  );
}


export default Order;
        
    



