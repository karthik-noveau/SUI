import React from 'react'

import './style.css'

const SUISpinner = () => {
    return (

        <div className='SUISpinner'>
            <div className='SUISpinnerContainer'>
                <div className='SUISpinnerContainerBox'>
                    <div className="sbl-circ"></div>
                    <p>Loading...</p>
                </div>
            </div>
        </div>

    )
}

export default SUISpinner