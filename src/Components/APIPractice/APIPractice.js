import React from "react";
import Title from "../Reusable/Title/Title";
import { NavLink } from "react-router-dom";
import "./APIPractice.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux/reduxIndex";

export default function APIPractice() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(
    actionCreators,
    dispatch
  );

  console.log(depositMoney)
  console.log(withdrawMoney)
  
  return (
    <div className="apiWrapper">
      <Title titleStr="Api Practice List" />
      <div className="innerWrapper pad4">
        <div className="apiExplanation">
          <div>
            <h1>Testing Div</h1>
            <h2>{account}</h2>
            <button onClick={() => depositMoney(1000)}>Deposit</button>
            <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
            
          </div>
          <h3>List of various API practice pages aggregated here.</h3>
          <h4>
            If you want to see what got completed during what weeks, check out
            my update page or dev blog for an experience of the process
          </h4>
        </div>
        <ul className="linkNoUnderline">
          <li>
            <NavLink to="/nameguesser">Age Guesser</NavLink> (Complete
            2/15/2022)
          </li>
          <li>
            <NavLink to="/nasapower">NASA Power Albedo API </NavLink>(Complete
            2/17/2022)
          </li>
          <li>
            <NavLink to="/isslocator">ISS Locator</NavLink>(Complete 2/17/2022)
          </li>
          <li>
            <NavLink to="/dnd">DND Spells List Search</NavLink>(Complete
            2/18/2022)
          </li>
        </ul>
      </div>
    </div>
  );
}
