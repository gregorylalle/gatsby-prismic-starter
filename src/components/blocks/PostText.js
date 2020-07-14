import React from "react"
import { RichText } from 'prismic-reactjs'

const PostText = props => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-24">
                    <div className="post-text">
                        { RichText.render(props.primary.text) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostText