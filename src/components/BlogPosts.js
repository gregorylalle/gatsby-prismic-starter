import React from 'react'
import { Link } from "gatsby"
import { RichText } from 'prismic-reactjs'
import { linkResolver } from './utils/linkResolver'

// Function to retrieve a small preview of the post's text
const firstParagraph = (post => {
  
  // Find the first text slice of post's body
  let firstTextSlice = post.body.find(slice => slice.type === 'text');
  if (firstTextSlice != null) {
    // Set the character limit for the text we'll show in the homepage
    const textLimit = 150
    let text = RichText.asText(firstTextSlice.primary.text)
    let limitedText = text.substring(0, textLimit)

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      return (
        <p>{ limitedText.substring(0, limitedText.lastIndexOf(' ')) + '...' }</p>
      );
    } else {
      // If it's shorter than the limit, just show it normally
      return <p>{ text }</p>;
    }
  } else {
    // If there are no slices of type 'text', return nothing
    return null;
  }
})

// A summary of the Blog Post
const PostSummary = ({ post }) => {
  
  // Store and format the blog post's publication date
  // let postDate = Date(post.date);
  // postDate = postDate ? 
  //   new Intl.DateTimeFormat('en-US', {
  //     month: 'short', 
  //     day: '2-digit', 
  //     year: 'numeric'
  //   }).format(postDate) :
  //   '';

  // Default title when post has no title set
  const defaultTitle = 'Untitled'
  
    return (
        <div className="col-lg-8 col-md-12">
            <div className="blog-post__post" key={ post.id } >
                <h2>
                    <Link to={ linkResolver(post._meta) }>
                    { RichText.asText(post.title).length !== 0 ? RichText.asText(post.title) : defaultTitle }
                    </Link>
                </h2>
                {/* <p className="blog-post-meta">
                    <time>{ postDate }</time>
                </p> */}
                { firstParagraph(post) }
            </div>
        </div>
    );
}

export default ({ posts }) => {
    if(!posts) return null;
  
    return(
        <div className="container">
            <div className="row">
                {posts.map((post) => {
                    return <PostSummary post={ post.node } key={ post.node._meta.id }/>
                })}
            </div>
        </div>
  )
}