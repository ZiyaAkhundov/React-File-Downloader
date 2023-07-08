import { useState } from 'react';

function App() {
  return (
    <>
      <div className='w-full flex justify-center items-center bg-blue-300 h-full-dvh'>
        <div className="w-96 bg-white border rounded-md py-3">
          <div className="content">
            <h2 className='px-5 py-3 font-serif font-bold text-xl'>File Downloader</h2>
          </div>
          <div className='paragraph'>
            <p className='pb-3 px-5'>
              Paste the URL of an image, video, or PDF to download. <br/>This tool is made by{' '}
              <a href="https://github.com/ProgrammersSchool" target='_blank' rel='noopener noreferrer' className='font-bold'>
              <span className='text-black'>Programmers </span><span className='text-blue-800'>School </span>
              </a><br/>
              (<a href='https://github.com/ZiyaAkhundov' target='_blank' rel='noopener noreferrer' className='text-green-700 font-bold '>
                Ziya Akhundov
              </a>)
            </p>
          </div>
          <div className='inputs px-5 pt-2'>
              <input type="text" className='w-full border border-gray-500 focus:outline-none py-2 px-4 rounded-md text-xl' />
          </div>
          <div className='px-5 py-2'>
            <button className='w-full bg-blue-700 text-white py-3 rounded-md' type='button'>Download</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
