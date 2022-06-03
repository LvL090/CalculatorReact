import React from 'react';

function Button (props) {

    const IsOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=') && (value != 'Clear');
    };

    return (
        <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold cursor-pointer'>
            <div className={`rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-4 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none ${IsOperator (props.children) ? 'operator' : '' }` .trimEnd()} >
                {props.children}</div>
        </div>

    );
}

export default Button;

