import React, { useState } from 'react'
import "primeicons/primeicons.css"
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.css"
import "primeflex/primeflex.css"

import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"

function UserInput() {
    const [ longUrl, setLongUrl ] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(`submit handler called`)
    }

    return (
        <div>
            <div className="card">
                <h3>Enter Long Url and Click Button</h3>
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-link"></i>
                            </span>
                            <InputText placeholder="Type or Paste Long Url" />
                        </div>
                    </div>
                </div>

                <Button label="Shorten Url" className="p-button-raised p-button-rounded" />
            </div>
        </div>
    )
}

export default UserInput
