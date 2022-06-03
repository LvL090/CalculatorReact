import React from 'react';

function ClearButton (props) {
    return (
        <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
            <div className='rounded-full h-16 w-48 flex items-center bg-orange-400 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>{props.children}</div>
        </div>

    )
}

export default ClearButton;