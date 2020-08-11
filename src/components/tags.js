import React from "react"
import { Link, graphql } from "gatsby"

const Tags = ({ children }) =>
  children && (
    <ul style={{ marginBottom: 0, marginLeft: 0, display: "inline-flex" }}>
      {children.split(", ").map(t => (
        <li
          key={t}
          style={{
            
            listStyle: "none",
          }}
        >
          
		  <Link style={{ backgroundImage: "none",borderRadius: `4px`,
            border: `1px solid grey`,
            padding: `2px 6px`,
            marginRight: `5px`,
            fontSize: `80%`,
            backgroundColor: "#007acc",
            color: "white",
            listStyle: "none",}} to={`/tags/${t}/`}>{t}</Link>
        </li>
      ))}
    </ul>
  )

export default Tags