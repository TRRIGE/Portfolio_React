import React from 'react'
import TextImage from '../assets/text.png'

const Text = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col text-center">
                    <img src={TextImage} height={300} width={570} alt='...' id="text-image" />
                </div>
            </div>
        </div>
    )
}

export default Text