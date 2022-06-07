import './App.css';
import Button from './components/button';
import EqualButton from './components/equalbutton';
import Clearbutton from './components/clearbutton';
import Screen from './components/screen';
import Title from './components/title';
import DeleteButton from './components/delete';
//import Section from './components/section';
import { useState } from 'react';
import { evaluate } from 'mathjs';




function App() {


const [input, setInput] = useState('');
const addInput = val => {
        setInput(input + val);

};

const calculateResult = () => {
        if (input) {
        setInput(evaluate(input));
        }
        else {
                alert ("Please enter values ​​to perform calculations") ;
        }
};

return (

        <div className='App h-screen'>

                <div className='mx-auto overflow-hidden mt-2 shadow-lg mb-2 bg-slate-700 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6'>
                <section>
                        <Title />
                        <Screen input={input} />
                </section>
                <section className='flex items-stretch bg-slate-700 h-20'>      
                        <Button handleClick={addInput}>%</Button>
                        <Button handleClick={addInput}>(</Button>
                        <Button handleClick={addInput}>)</Button>
                        <DeleteButton handleClick ={() => setInput ('')}>c</DeleteButton>
                </section>
                <section className='flex items-stretch bg-slate-700 h-20'>      
                        <Button handleClick={addInput}>7</Button>
                        <Button handleClick={addInput}>8</Button>
                        <Button handleClick={addInput}>9</Button>
                        <Button handleClick={addInput}>/</Button>
                </section>
                <section className='flex items-stretch bg-slate-700 h-20'>
                        <Button handleClick={addInput}>4</Button>
                        <Button handleClick={addInput}>5</Button>
                        <Button handleClick={addInput}>6</Button>
                        <Button handleClick={addInput}>*</Button>
                </section>
                <section className='flex items-stretch bg-slate-700 h-20'>
                        <Button handleClick={addInput}>1</Button>
                        <Button handleClick={addInput}>2</Button>
                        <Button handleClick={addInput}>3</Button>
                        <Button handleClick={addInput}>-</Button>
                </section>
                <section className='flex items-stretch bg-slate-700 h-20 mb-10'>
                        <Button handleClick={addInput}>0</Button>
                        <Button handleClick={addInput}>.</Button>
                        <EqualButton handleClick={calculateResult}>=</EqualButton>
                        <Button handleClick={addInput}>+</Button>
                </section>
                <section className='flex items-stretch bg-slate-700 h-20'>
                        <Clearbutton handleClick ={() => setInput ('')}>Reset</Clearbutton>
                </section>
                </div>
        </div>
        );
}

export default App;


