import React, { useState, useEffect} from 'react'
import { Box, Flex } from 'theme-ui'
import Color from 'color'
import { navigate } from 'gatsby'


const Index = (props) => {
  // default color if no color is in state
  const currentColor = props?.location?.state?.color || '#4e8d7c'
  // calculate nextColor from currentColor
  const nextColor = Color(currentColor).rotate(50).string()

  const [color, setColor] = useState(currentColor)

  // setup timeout to change color after component has been mounted
  useEffect(() => {
      const timer  = setTimeout(() => setColor(nextColor), 1000)
      return () => {
          clearTimeout(timer)
      }
  }, [])

  return (
    <Flex sx={{ width: '100vw', height: '100vh', backgroundColor: color , justifyContent: 'center', alignItems: 'center', transition: 'all ease-in 0.2s'}}>
      <Box sx={{border: '3px solid black', p: 2, cursor: 'pointer'}} onClick={() => {
        navigate('/other', {state: {color: color}})
      }}>
        random {color}
      </Box>
    </Flex>
  )
}

export default Index
