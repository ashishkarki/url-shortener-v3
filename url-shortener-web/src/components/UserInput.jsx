import React, { useState } from 'react'

function UserInput() {
    const [ longUrl, setLongUrl ] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(`submit handler called`)
    }

    return (
        <article>
            {/* <div className='card'>
                <div className='card-body'> */}
            <form className='url-form'
                onSubmit={ e => submitHandler(e) }>
                <div className='form-control'>
                    <label htmlFor='longUrl'>Enter a Long Url below:</label>
                    <input type='text'
                        id='longUrl'
                        value={ longUrl }
                        onChange={ (e) => setLongUrl(e.target.value) }
                    />
                </div>

                <button className="btn"
                    onClick={ e => submitHandler(e) }>
                    Get Shortened URL!
                </button>
            </form>
            {/* </div>
            </div> */}
        </article>
    )
}

export default UserInput
