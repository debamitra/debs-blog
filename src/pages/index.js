import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import { rhythm } from "../utils/typography"


const BlogIndex = ({ data, location }) => {
	
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  
    const [searchTerm, setSearchTerm] = React.useState('');
	  //call back handler/function
	  const handleSearch = event => {
    setSearchTerm(event.target.value);
    console.log('set search term' , event.target.value);
	  };
    const searchedStories = posts.filter(function(story) {
        console.log(story.node.frontmatter.title);
        console.log('searchterm:',searchTerm)
        return story.node.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(searchedStories);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Deb's Blog" />
      <Bio />
	  <Search search={searchTerm} onSearch={handleSearch} />

	  
	  
	  

	  
      {searchedStories.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
		  const { timeToRead } = node
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
			  <small>&bull; {timeToRead} min.</small>
			  {node.frontmatter.tags && node.frontmatter.tags.length > 0 ? ` - ` : ``}
			  <Tags>{node.frontmatter.tags}</Tags>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

const Search = props => {
  
  return (
    <div>
    <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={props.search} onChange={props.onSearch}/>
      </div>

  );


}




export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
		  timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
			tags
          }
        }
      }
    }
  }
`
