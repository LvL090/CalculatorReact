import React from 'react';

const DeleteButton = (props) => (
    
        <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold cursor-pointer'>
            <div className='rounded-full h-16 w-16 flex items-center bg-indigo-500 justify-center shadow-lg border-4 border-slate-700 hover:border-2 hover:border-slate-500 focus:outline-none'
            onClick={props.handleClick}>
                {props.children}
            </div>
        </div>

    );


export default DeleteButton;