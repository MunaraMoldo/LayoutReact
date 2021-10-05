import React, {useState} from 'react';
import Video from '../../videos/video.mp4';


import {Button} from '../ButtonElement';
import {
    HeroContainer,
    HeroBack,
    VideoBack,
    HeroContent,
    HeroBtnWrapper,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight} from './HeroElements';

const HeroSection = () =>{
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return(
         <HeroContainer>
            <HeroBack>
                <VideoBack autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBack>
            <HeroContent>
                <HeroH1>Virtual Banking Made it Easy</HeroH1>
                <HeroP>Sign Up for a new account today and receive $250 in credit towards  your next payment
                </ HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
         </HeroContainer>
    )
}

export default HeroSection;