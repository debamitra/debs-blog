import React from "react"

import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const TagsPage = ({ data , location}) => {
	
	
const allTags = data.allMarkdownRemark.group;
	
	
return (
<Layout location={location}>
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <div>
      <h1>Tags</h1>
      <ul style={{ marginBottom: 0, marginLeft: 0, display: "inline-flex" }}>
        {allTags.map(tag => (
          <li key={tag.fieldValue} style={{
            
            listStyle: "none",
          }}>
            <Link style={{ backgroundImage: "none",borderRadius: `4px`,
            border: `1px solid grey`,
            padding: `2px 6px`,
            marginRight: `5px`,
            fontSize: `80%`,
            backgroundColor: "#007acc",
            color: "white",
            listStyle: "none",}} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount}) 
            </Link>
			&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
        ))}
      </ul>
    </div>
  </div>
  </Layout>
 )
}



export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
  `;