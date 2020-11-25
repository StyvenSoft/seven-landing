import React from 'react';
import { FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive menbershipt to receive the lastest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubcribe at any
                </FooterSubText>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
