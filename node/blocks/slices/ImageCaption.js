const ImageCaptionBlock = `
    ... on PRISMIC_PostBodyImage_with_caption {
        type
        primary {
            caption
            image
            imageSharp {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid {
                        src
                        srcSet
                        aspectRatio
                        sizes
                        base64
                    }
                }
            }
        }
    }
`

module.exports = ImageCaptionBlock