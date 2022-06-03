import './App.css';
import logo from './img/logo.png';
import Button from './components/button';
import EqualButton from './components/equalbutton';
import Clearbutton from './components/clearbutton';


function App() {
  return (

  <div className='App h-screen'>
    <div className='object-contain h-12 mt-1 flex justify-center'>
      <img
        src ={logo}
        className='logo'
        alt='logo' />
    </div>
      <div className='mx-auto overflow-hidden mt-2 shadow-lg mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6'>
        <div>
            <div className='p-2 text-white text-center text-3xl bg-purple-900'><span className ='text-orange-500'>Calcu</span>lator</div>
            <div className='pt-2 p-5 pb-0 text-white text-right text-2xl bg-purple-800'>2000 + 100+123+123+123+123</div>
            <div className='p-5 text-white text-right text-2xl bg-purple-800'>=<span className='text-orange-500'>2100</span></div>
        </div>
      <section className='flex items-stretch bg-purple-900 h-20'>
              <Button 
              text = '7' />
              <Button 
              text = '8' />
              <Button 
              text = '9' />
              <Button 
              text = '÷' />
      </section>
      <section className='flex items-stretch bg-purple-900 h-20'>
              <Button 
              text = '4' />
              <Button 
              text = '5' />
              <Button 
              text = '6' />
              <Button 
              text = 'x' />
      </section>
      <section className='flex items-stretch bg-purple-900 h-20'>
              <Button 
              text = '1' />
              <Button 
              text = '2' />
              <Button 
              text = '3' />
              <Button 
              text = '-' />
      </section>
      <section className='flex items-stretch bg-purple-900 h-20'>
              <Button 
              text = '0' />
              <Button 
              text = '.' />
              <EqualButton 
              text = '=' />
              <Button 
              text = '+' />
      </section>
      <section className='flex items-stretch bg-purple-900 h-20'>
              <Clearbutton
              text = 'Clear'/>
      </section>
    </div>
  </div>

  );

}

export default App;


