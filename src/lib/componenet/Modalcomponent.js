import React, { useState } from 'react';
import './Modalcomponent.css'
import close from './close.jpg'

export default function Modalcomponent({ type = undefined, size = undefined, show = false, label = "" }) {

    const [openModal, setOpenModal] = useState(true)
    return (
        <div className="modal-component">
            {
                openModal && (
                    <div className={`modal-wrapper modal-${type} modal-${size} `}>
                        <div className="modal-label"> {label} </div>
                        <div onClick={() => { setOpenModal(false) }} style={{ position: "absolute", top: 5, left: 5 }}>

                            <img src={close} style={{ width: "30px", height: "28px" }} />
                        </div>
                    </div>
                )

            }
        </div>
    )
}