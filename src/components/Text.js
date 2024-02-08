import TextImage from '../images/text.png'
import React from 'react'

const Text = () => {
    return (
        <div className='row'>
            <div className="col text-center">
                <img src={TextImage} height={300} width={570} alt='...' id="text-image"/>
            </div>
        </div>
    )
}

export default Text