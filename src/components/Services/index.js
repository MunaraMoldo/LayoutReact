import React from 'react';
import Icon1  from '../../images/svg-4.jpg';
import Icon2  from '../../images/svg-5.jpg';
import Icon3  from '../../images/svg-3.jpg';
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesIcon,
    ServicesH2,
    ServicesH1,
    ServicesP,
    ServicesCard
} from "./ServicesElements";


const Services = () => {
    return(
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} ></ServicesIcon>
                            <ServicesH2>Reduce Expenses</ServicesH2>
                            <ServicesP>We help you to reduce your fees and increase your income</ServicesP>

                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon2} ></ServicesIcon>
                            <ServicesH2>Increasing Revenue</ServicesH2>
                            <ServicesP>Your revenue will be from now on be always different and never the same</ServicesP>

                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon3} ></ServicesIcon>
                            <ServicesH2>Passive Income</ServicesH2>
                            <ServicesP>Any time and anywhere, no matter what you do, you will get income </ServicesP>

                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services;