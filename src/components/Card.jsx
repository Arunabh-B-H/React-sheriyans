import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img
            src={props.logo}
          />
          <button>
            Save <Bookmark size={12} color="#636060" />
          </button>
        </div>
        <div className="center">
          <h2>
           {props.company} <span>{props.postedAt}</span>
          </h2>
          <p>{props.title}</p>
          <div>
            <h4>{props.type}</h4>
            <h4> {props.level}</h4>
          </div>

          <div></div>
        </div>
        <div className="bottom">
          <div>
            <div>
              <h3>{props.salary}</h3>
              <p>{props.location}</p>
            </div>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
