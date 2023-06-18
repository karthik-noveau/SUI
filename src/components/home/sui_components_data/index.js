import React, { useState } from 'react'

import { SUINavbar } from '../../../SUI_Library_Components/components/navbar'
import { createPortal } from 'react-dom'

const SUIComponentPageData = () => {
    return (
        <div>
            <IFrame>
                {/* <SUINavbar /> */}
                <p>hai</p>
            </IFrame>
        </div>
    )
}

const IFrame = ({ children }) => {
    const [ref, setRef] = useState()
    const container = ref?.contentWindow?.document?.body
    return (
        <iframe title="data" ref={setRef}>
            {container && createPortal(children, container)}
        </iframe>
    )
}

export default SUIComponentPageData
