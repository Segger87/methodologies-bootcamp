import React from 'react'
import { Box, Flex, ColourBox } from './styles';


export default ({color}) => <Box>
    <Flex>
        <Box>
            <p>{color}</p>
            <ColourBox boxColor={color}/>
        </Box>
    </Flex>
</Box>