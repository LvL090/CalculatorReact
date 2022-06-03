import './App.css';
import logo from './img/logo.png';
import Button from './components/button';
import EqualButton from './components/equalbutton';
import Clearbutton from './components/clearbutton';
import Screen from './components/screen';
import ResultScreen from './components/resultScreen';
import Title from './components/title';
import {useState} from 'react';


function App() {


const [input, setInput] = useState('0');

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
                <Screen input ={input} />
                <ResultScreen />
        </section>
        <section className='flex items-stretch bg-purple-900 h-20'>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>÷</Button>
        </section>
        <section className='flex items-stretch bg-purple-900 h-20'>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>x</Button>
        </section>
        <section className='flex items-stretch bg-purple-900 h-20'>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>-</Button>
        </section>
        <section className='flex items-stretch bg-purple-900 h-20'>
                <Button>0</Button>
                <Button>.</Button>
                <EqualButton>=</EqualButton>
                <Button>+</Button>
        </section>
        <section className='flex items-stretch bg-purple-900 h-20'>
                <Clearbutton>Clear</Clearbutton>
        </section>
        </div>
</div>

);

}

export default App;


