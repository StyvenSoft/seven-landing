import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Button } from '../../globalStyles';
import {
    FooterContainer,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebSiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements';

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
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email' />
                    <Button>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon /> SEVEN
                    </SocialLogo>
                    <WebSiteRights>SEVEN © 2020</WebSiteRights>
                    <SocialIcons>
                        <SocialIconLink href={'https://www.facebook.com/steveen.echeverri'} target="_blank" arial-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href={'https://www.instagram.com/styvensoft/'} target="_blank" arial-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href={'https://twitter.com/styvensoft'} target="_blank" arial-label="Twitter"><FaTwitter /></SocialIconLink>
                        <SocialIconLink href={'https://co.linkedin.com/in/steveen-echeverri'} target="_blank" arial-label="Linkedin"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
