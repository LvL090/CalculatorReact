import './App.css';
import logo from './img/logo.png';

function App() {
  return (

  <div className='App'>
    <div className='object-contain h-20 mt-1 flex justify-center'>
      <img
        src ={logo}
        className='logo'
        alt='logo' />
    </div>
    <div className='mx-auto overflow-hidden mt-2 shadow-lg mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6'>
      <div>
          <div className='p-2 text-white text-center text-3xl bg-purple-900'><span className ='text-orange-500'>Calcu</span>lator</div>
          <div className='pt-8 p-5 pb-0 text-white text-right text-2xl bg-purple-800'>2000 + 100+123+123+123+123</div>
          <div className='p-5 text-white text-right text-2xl bg-purple-800'>=<span className='text-orange-500'>2100</span></div>
      </div>
      <section className='flex items-stretch bg-purple-900 h-24'>
        <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold'>
          <div className='ounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>%</div>
        </div>
        <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold'>
          <div className='ounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>(</div>
        </div>
        <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold'>
          <div className='ounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>)</div>
        </div>
        <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold'>
          <div className='ounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>÷</div>
        </div>
      </section>
    </div>
  </div>

  );

}

export default App;


