import { Stack } from '@mui/material'
import React from 'react'
import ParallaxBackground from './AppBring'
import ServiceType from './LeftSide'

const ScrollingSection = () => {
  return (
    <Stack position={"relative"} zIndex={11}>
       <ParallaxBackground/>
    </Stack>
  )
}

export default ScrollingSection