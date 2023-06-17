import React from 'react'

import { SUIRippleButton } from '../../SUI_Library_Components/widgets/buttons/ripplebutton'

import HomeBanner from './images/HomeBanner.png'
import MobileHomeBanner from './images/MobileHomeBanner.png'

import './style.css'
import { Link, useNavigate } from 'react-router-dom'

function StartUp() {

    const navigate = useNavigate();
    return (
        <div className='startUp'>
            <div className='startUpBanner'>
                <img src={HomeBanner} alt={HomeBanner} />
                <img src={MobileHomeBanner} alt={HomeBanner} />
            </div>
            <div className='startUpText'>
                <div className='startUpTextContainer'>
                    <p>SKY UI 1.0</p>
                    <p>Professionally designed widgets and components for beautiful, engaging Continuous innovation for developers to cover your needs today and tomorrow</p>
                    <div className='startUpButtonContainer'>
                        <Link to="/components">
                            <SUIRippleButton className="startUpButton">
                                Getting Started
                            </SUIRippleButton>
                        </Link>
                        <Link to="/">
                            <SUIRippleButton className="startUpSecondButton">
                                Design Language
                            </SUIRippleButton>
                        </Link>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default StartUp