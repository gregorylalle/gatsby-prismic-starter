import React from "react"
import { RichText } from 'prismic-reactjs'

const Intro = props => {
    const {
        project_title,
    } = props.primary

    return (
        <div className="intro__wrapper">
            {RichText.render(project_title)}
        </div>
    )
}

export default Intro