import React from 'react';

function Button (props) {

    const IsOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=') && (value !== 'Reset') && (value !== 'c');
    };

    return (
        <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold cursor-pointer'>
            <div className={`rounded-full h-16 w-16 flex items-center bg-slate-700 justify-center shadow-xl border-4 border-slate-700 hover:border-2 hover:border-slate-500 focus:outline-none ${IsOperator (props.children) ? 'operator' : ''}`.trimEnd () } onClick={() => props.handleClick (props.children)} >
                {props.children}
            </div>
        </div>

    );
}

export default Button;

