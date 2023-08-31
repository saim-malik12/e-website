import {Helmet} from "react-helmet"
import React from 'react'

const Meta = (props) => {
  return (
    <Helmet>
    <title>{props.title}</title>
    <link rel="stylesheet" href="" />
</Helmet>
  )
}

export default Meta
