/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



import { rhythm } from "../utils/typography"



const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
			github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong> {author.summary} 
        {` `} 
		<a style={{ fontWeight: 900, boxShadow: 'none' }} href={`https://twitter.com/${social.twitter}`}><FontAwesomeIcon icon={["fab", "twitter"]} 
style={{color:"#000000"}} 		/></a> 
            | 
		<a style={{ fontWeight: 900, boxShadow: 'none' }} href={`https://linkedin.com/in/${social.linkedin}`}><FontAwesomeIcon icon={["fab", "linkedin"]}  style={{color:"#000000"}} /></a>
			|
		<a style={{ fontWeight: 900, boxShadow: 'none' }} href={`https://github.com/${social.github}`}><FontAwesomeIcon icon={["fab", "github"]} 
		 style={{color:"#000000"}} /></a>
	  
      </p>
	  
    </div>
  )
}

export default Bio