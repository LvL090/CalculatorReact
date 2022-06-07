import React from 'react';


function Section ({children}) {
return (
        
        <section className='flex items-stretch bg-slate-700 h-20'>
        {children}
        </section>
        );
}

export default Section;