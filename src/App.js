import './App.css';
import logo from './img/logo.png';
import Button from './components/button';
import EqualButton from './components/equalbutton';
import Clearbutton from './components/clearbutton';
import Screen from './components/screen';
//import ResultScreen from './components/resultScreen';
import Title from './components/title';
import {useState} from 'react';
import Section from './components/section';


function App() {


const [input, setInput] = useState('');

const addInput = val => {
        setInput(input + val);

};

return (

        <div className='App h-screen'>
                <div className='object-contain h-12 mt-1 flex justify-center'>
                        <img
                        src ={logo}
                        className='logo'
                        alt='logo' />
                </div>
                <div className='mx-auto overflow-hidden mt-2 shadow-lg mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6'>
                <section>
                        <Title />
                        <Screen input={input} />
                </section>
                <Section>
                        <Button handleClick={addInput}>7</Button>
                        <Button handleClick={addInput}>7</Button>
                        <Button handleClick={addInput}>8</Button>
                        <Button handleClick={addInput}>9</Button>
                        <Button handleClick={addInput}>÷</Button>
                </Section>
                <section className='flex items-stretch bg-purple-900 h-20'>
                        <Button handleClick={addInput}>4</Button>
                        <Button handleClick={addInput}>5</Button>
                        <Button handleClick={addInput}>6</Button>
                        <Button handleClick={addInput}>x</Button>
                </section>
                <section className='flex items-stretch bg-purple-900 h-20'>
                        <Button handleClick={addInput}>1</Button>
                        <Button handleClick={addInput}>2</Button>
                        <Button handleClick={addInput}>3</Button>
                        <Button handleClick={addInput}>-</Button>
                </section>
                <section className='flex items-stretch bg-purple-900 h-20'>
                        <Button handleClick={addInput}>0</Button>
                        <Button handleClick={addInput}>.</Button>
                        <EqualButton handleClick={addInput}>=</EqualButton>
                        <Button handleClick={addInput}>+</Button>
                </section>
                <section className='flex items-stretch bg-purple-900 h-20'>
                        <Clearbutton>Reset</Clearbutton>
                </section>
                </div>
        </div>
        );
}

export default App;


