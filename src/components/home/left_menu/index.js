import React from 'react'

import './style.css'
import { SUIButton } from '../../../SUI_Library_Components/widgets/buttons/antbutton'

const LeftHomeMenu = () => {
    return (
        <>
            <div className='LeftHomeMenu'>
                <div className='LeftHomeMenuContainer'>
                    <SUIButton className="LeftHomeMenuButton">Button</SUIButton>
                    <SUIButton className="LeftHomeMenuButton">Spinner</SUIButton>
                    <SUIButton className="LeftHomeMenuButton">Slider</SUIButton>
                    <SUIButton className="LeftHomeMenuButton">Footer</SUIButton>
                </div>
            </div>
        </>
    )
}

export default LeftHomeMenu