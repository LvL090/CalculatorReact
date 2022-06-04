import React from 'react';

function EqualButton (props) {
    return (
        
        <div className='flex-1 justify-center flex items-center text-white text-2xl font-semibold'>
            <div className='rounded-full h-16 w-16 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>
                {props.children}
            </div>
        </div>

    )
}

export default EqualButton;