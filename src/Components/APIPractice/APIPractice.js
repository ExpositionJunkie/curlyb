import React from "react"
import Title from "../Reusable/Title/Title"
import {Link} from "react-router-dom"
import "./APIPractice.css"

export default function APIPractice() {
  return (
    <div className="api_wrapper">
      <Title titleStr="Api Practice List" />
      <div className="inner_wrapper">
        <h2>API Practice Pages</h2>
        <h3>List of various API practice pages aggregated here.</h3>
        <h4>If you want to see what got completed during what weeks, check out my update page or dev blog for an experience of the process</h4>
        <li><Link to="/nameguesser">Age Guesser</Link> (Complete 2/15/2022)</li>
        <li><Link to="/nasapower">NASA Power Albedo API </Link>(Complete 2/17/2022)</li>
        <li><Link to="/isslocator">ISS Locator</Link>(Complete 2/17/2022)</li>
        <li><Link to="/dnd">DND Spells List Search</Link>(Complete 2/18/2022)</li>
        <li><Link to="/ip">IP Address</Link>(Complete 2/18/2022)</li>
        </div>
    </div>
  )
}