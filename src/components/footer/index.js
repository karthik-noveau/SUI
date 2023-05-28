import React from 'react'
import { AiFillInstagram, AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { TfiLinkedin } from 'react-icons/tfi'
import { BsFacebook } from 'react-icons/bs'

import './style.css'
import { SUIButton } from './../../widgets/buttons/antbutton/index';

const SUIFooter = () => {
    return (
        <div>
            <div className="SUIFooter">
                <div className="SUIFooterContainer">
                    <div className="SUIFooterNewsLetterContainer">
                        <p>Subscribe our news letter</p>
                        <div className="SUIFooterNewsLetterInputContainer">
                            <input type='email' placeholder='Enter the Mail Id'/>
                            <SUIButton className="newsLetterButton">Submit</SUIButton>
                        </div>
                    </div>
                    <div className="SUIFooterBottomContainer">
                        <div className="SUIFooterLogoContainer">
                            <img src="https://firebasestorage.googleapis.com/v0/b/skynoveau-office.appspot.com/o/logo.png?alt=media&token=e375539c-5dff-44c8-98b2-50b8adc60488" />
                            <div className="SUIFooterDescriptionContainer">
                                <p>The Wix website builder offers a complete solution from enterprise-grade infrastructure</p>
                            </div>
                            <div className="SUIFooterSocialmediaContainer">
                                <div className='socialMediaIcon'>
                                    <a href='https://www.instagram.com/woodheadcreative_official/'>
                                        <AiFillInstagram />
                                    </a>
                                </div>
                                <div className='socialMediaIcon'>
                                    <a href='https://twitter.com/WoodheadWhc'>
                                        <FaTwitter />
                                    </a>
                                </div>
                                <div className='socialMediaIcon'>
                                    <a href='https://www.linkedin.com/company/woodhead-creative/'>
                                        <TfiLinkedin />
                                    </a>
                                </div>
                                <div className='socialMediaIcon'>
                                    <a href='https://www.facebook.com/WoodHeadCreative'>
                                        <BsFacebook />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="SUIFooterLinkContainer">
                            <div className="SUIFooterLinkContainerBox">
                                <div className="SUIFooterLinkContainerBoxItem">
                                    <ul>
                                        <li>QUICK LINKS</li>
                                        <li>Home</li>
                                        <li>Services</li>
                                        <li>Clients</li>
                                        <li>Testimonials</li>
                                    </ul>
                                </div>
                                <div className="SUIFooterLinkContainerBoxItem">
                                    <ul>
                                        <li>QUICK CONTACT</li>
                                        <li>Feel free to contact</li>
                                        <li>+91-9840717144</li>
                                        <li>woodheadcreative@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="SUIFooterLinkContainerBoxItem">
                                    <ul>
                                        <li>OUR ADDRESS</li>
                                        <li>WoodHeadCreative</li>
                                        <li>D125/E, Santhosh Colony, K.K</li>
                                        <li>Nagar,Chennai - 600078</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='SUIFooterCopyWriteContainer'>
                        <div className='SUIFooterCopyWriteContainerBox'>
                            <p>All rights reserved</p>
                            <p>copyrights <AiOutlineCopyrightCircle className='copyrightIcon' /> 2023 Skynoveau Technology Pvt.Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SUIFooter