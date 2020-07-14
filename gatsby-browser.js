/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import App from './src/assets/scripts/App'
import "./src/assets/styles/main.scss"

const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/components/utils/linkResolver');

registerLinkResolver(linkResolver);

export const onClientEntry = () => {
    window.addEventListener('load', () => {
        console.log('Loaded ✨')
        new App()
    })
}