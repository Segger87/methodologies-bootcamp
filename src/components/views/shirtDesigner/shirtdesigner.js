import React, {useState} from 'react';
import CanvasDraw from 'react-canvas-draw'
import { Box, Flex } from './styles';
import ColorPicker from './colorPicker.js'

export default () => {

const [selectedColor, setColor] = useState('green')
const [selectedRadius, setRadius] = useState(12)

const setColorState = (color) => {
    setColor(color)
}

const setBrushRadius = (e) => {
    setRadius(e.target.value)
}

return (<Box>
    <CanvasDraw
    canvasWidth='500px'
    brushColor={selectedColor}
    brushRadius={selectedRadius}
    style={{
    boxShadow:
        "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)"
    }}
/>
    <Flex>
        <Box>
            <ColorPicker color='blue' />
            <button onClick={() => setColorState('blue')}>Select</button>
        </Box>

        <Box>
            <ColorPicker color='green'/>
            <button onClick={() => setColorState('green')}>Select</button>
        </Box>

        <Box>
            <ColorPicker color='red' />
            <button onClick={() => setColorState('red')}>Select</button>
        </Box>

        <Box>
            <ColorPicker color='black' />
            <button onClick={() => setColorState('black')}>Select</button>
        </Box>
    </Flex>

    <Flex>
        <Box>
            <input onChange={(e) => setBrushRadius(e)} placeholder='Set Radius' />
        </Box>
    </Flex>

</Box>
)}