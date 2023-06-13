import React from 'react'

import { SUIRippleButton } from '../../SUI_Library_Components/widgets/buttons/ripplebutton'
import './style.css'

function StartUp() {
    return (
        <div className='startUp'>
            <div className='startUpBanner'>
                
            </div>
            <div className='startUpText'>
                <div className='startUpTextContainer'>
                    <p>SKY UI 1.0</p>
                    <p>Help designers/developers building beautiful products more flexible and working with happiness</p>
                    <SUIRippleButton className="startUpButton">
                        Getting Started
                    </SUIRippleButton>
                </div>
            </div>
        </div>
    )
}

export default StartUp