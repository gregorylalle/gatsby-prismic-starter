import React, { Component } from "react"
import { RichText } from 'prismic-reactjs'
import Img from "gatsby-image"
// import SplitText from '../../assets/scripts/utils/SplitText'

// const Caption = (props => {
//     console.log(props)
//     let captionText = props.primary.caption

//     if (captionText[0].text !== "") {
//         return (
//             <h2 data-parallax>{ RichText.asText(captionText) }</h2>
//             // <h2 data-parallax>{ splittedTitle }</h2>
//         )
//     } else {
//         return null
//     }
// })

// const ImageCaption = props => {
//     return(
//         <section className="image-caption">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-24">
//                         <div className="image-with-caption">
//                             { caption(props) }
//                             <Img fluid={props.primary.imageSharp.childImageSharp.fluid} alt={props.primary.image.alt} data-scroll />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

const Caption = ({title, refTitle}) => {
    if (RichText.asText(title)) return <h2 className="image-caption__title" ref={refTitle}>{ RichText.asText(title) }</h2>
    else return null
}

export default class ImageCaption extends Component {
    constructor(props) {
        super(props)

        this.title = React.createRef()
    }
    componentDidMount() {
        console.log('Did mount')

        // if (this.title.current) {
        //     const splittedTitle = new SplitText(this.title.current, {
        //         type: 'words',
        //         wordsClass: 'w'
        //     })
        // }
    }
    render() {
        return(
            <section className="image-caption">
                <div className="container">
                    <div className="row">
                        <div className="col-24">
                            <div className="image-with-caption">
                                <Img fluid={this.props.primary.imageSharp.childImageSharp.fluid} alt={this.props.primary.image.alt} data-scroll />
                                <Caption title={this.props.primary.caption} refTitle={this.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

// export default ImageCaption