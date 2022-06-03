import './App.css';
import logo from './img/logo.png';

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
              <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>7</div>
              </div>
              <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>8</div>
              </div>
              <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>9</div>
              </div>
              <div className='flex-1  py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>÷</div>
              </div>
      </section>
      <section className='flex items-stretch bg-purple-900 h-20'>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>4</div>
            </div>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>5</div>
            </div>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>6</div>
            </div>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>x</div>
            </div>
      </section>
      <section className='flex items-stretch bg-purple-900 h-20'>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>1</div>
            </div>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>2</div>
            </div>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>3</div>
            </div>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>-</div>
            </div>
      </section>
      <section className='flex items-stretch bg-purple-900 h-20'>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>0</div>
            </div>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>.</div>
            </div>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>=</div>
            </div>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-16 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>+</div>
            </div>
      </section>
      <section className='flex items-stretch bg-purple-900 h-20'>
            <div className='flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold'>
                  <div className='rounded-full h-16 w-48 flex items-center bg-orange-400 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none'>Clear</div>
            </div>
      </section>
    </div>
  </div>

  );

}

export default App;


