import React, {useState} from 'react';
import CanvasDraw from 'react-canvas-draw'
import { Box, Flex, Button, CanvasWrapper } from './styles';
import ColorPicker from './colorPicker.js'
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from './sliders/sliders';
import tshirt from './icons/tshirt.png'
import backOfShirt from './icons/backoftshirt.png'

export default () => {
const [selectedColor, setColor] = useState('black')
const [selectedRadius, setRadius] = useState(1)
const [shirtOrientation, setShirtOrientation] = useState(tshirt)  
const [toggleCanvas, setToggleCanvas] = useState(false)   
const domain = [1, 25];
const defaultValues = [1];

const sliderStyle = {
    position: "relative",
    width: "100%"
    };


const setColorState = (color) => {
    setColor(color)
}

const setBrushRadius = (e) => {
    let [value] = e;
    setRadius(value)
}

const toggleShirtOrientation = (shirt) => {
    setShirtOrientation(shirt)
}

const toggleCanvasDisplay = () => {
    setToggleCanvas(!toggleCanvas)
}

let front = '';
let back = ''

return (
<Box>
    <CanvasWrapper showCanvas={!toggleCanvas}>
        <CanvasDraw
        ref={canvasDraw => (front = canvasDraw)}
        canvasHeight='600px'
        canvasWidth='500px'
        brushColor={selectedColor}
        brushRadius={selectedRadius}
        gridColor="rgba(150,150,150,0.2)"
        backgroundColor="rgba(150,150,150,0.1)"
        catenaryColor={selectedColor}
        imgSrc={tshirt}
        /> 
        <CanvasDraw
            ref={canvasDraw => (back = canvasDraw)}
            canvasHeight='600px'
            canvasWidth='500px'
            brushColor={selectedColor}
            brushRadius={selectedRadius}
            gridColor="rgba(150,150,150,0.2)"
            backgroundColor="rgba(150,150,150,0.1)"
            catenaryColor={selectedColor}
            imgSrc={backOfShirt}
        /> 
    </CanvasWrapper>
    <button
            onClick={() => {
                shirtOrientation === tshirt ? front.undo() : back.undo();
            }}
          >
            Undo
          </button>
    <Flex flexDirection='column' alignItems='center'>
        <Flex>
            <Button onClick={() => toggleShirtOrientation(tshirt)}>Front</Button>
            <Button onClick={() => toggleShirtOrientation(backOfShirt)}>Back</Button>
        </Flex>
    <Flex>
        <Flex>
            <Flex flexDirection='column' alignItems='center'>
                <ColorPicker color='blue' />
                <Button onClick={() => setColorState('blue')}>Select</Button>
            </Flex>

            <Flex flexDirection='column' alignItems='center'>
                <ColorPicker color='green'/>
                <Button onClick={() => setColorState('green')}>Select</Button>
            </Flex>

            <Flex flexDirection='column' alignItems='center'>
                <ColorPicker color='red' />
                <Button onClick={() => setColorState('red')}>Select</Button>
            </Flex>

            <Flex flexDirection='column' alignItems='center'>
                <ColorPicker color='black' />
                <Button onClick={() => setColorState('black')}>Select</Button>
            </Flex>
        </Flex>
        </Flex>

        <Box style={{ margin: "10%", height: 120, width: "80%" }}>
            <Slider
            mode={2}
            step={1}
            domain={domain}
            rootStyle={sliderStyle}
            values={defaultValues}
            onChange={(e) => setBrushRadius(e)}
            >
            <Rail>
                {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
            </Rail>
            <Handles>
                {({ handles, getHandleProps }) => (
                <div className="slider-handles">
                    {handles.map(handle => (
                    <Handle
                        key={handle.id}
                        handle={handle}
                        domain={domain}
                        getHandleProps={getHandleProps}
                    />
                    ))}
                </div>
                )}
            </Handles>
            <Tracks left={false} right={false}>
                {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                    <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                    />
                    ))}
                </div>
                )}
            </Tracks>
            <Ticks count={10}>
                {({ ticks }) => (
                <div className="slider-ticks">
                    {ticks.map(tick => (
                    <Tick key={tick.id} tick={tick} count={ticks.length} />
                    ))}
                </div>
                )}
            </Ticks>
            </Slider>
        </Box>
    </Flex>
</Box>
)}