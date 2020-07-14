import React from "react"
import { isEmptyObject, randomID } from "./Helpers"

import Intro from '../blocks/Intro'
import ImageCaption from '../blocks/ImageCaption'
import PostText from '../blocks/PostText'

const components =  {
  "project_intro": Intro,
  "image_with_caption": ImageCaption,
  "text": PostText,
}
  
  const ComponentParser = props => {
    let { content } = props

    if (!content) return null
    const filteredComponents = content.filter(
      component =>
        !component || !isEmptyObject(component) || component.name !== null
    )

    console.log(filteredComponents)

    if (filteredComponents && filteredComponents.length > 0) {
      const pageComponents = filteredComponents.map((component, index) => {

        const Component = components[component.type]
  
        if (!Component) return null
  
        return (
          <Component
            index={index}
            key={`component-${randomID()}`}
            {...component}
            {...component.data}
            {...component.attributes}
          />
        )
      })
  
      if (pageComponents) {
        return pageComponents
      }
    }
    return null
  }

export default ComponentParser