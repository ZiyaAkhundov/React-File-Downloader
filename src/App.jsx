import { useState,useRef } from 'react';
import axios from 'axios';

function App() {
  const getPost = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts/feed/posts', {
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  getPost();
  const [inputValue, setInputValue] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const buttonRef = useRef(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('')
    buttonRef.current.innerText = 'Downloading...';
    buttonRef.current.disabled = true;
    if (inputValue.trim() !== '') {
      console.log('Input is filled');
      fetchFile(inputValue)
    } else {
      console.log('Input is empty');
    }
  };
  const fetchFile = (url)=>{
    fetch(url)
    .then(res => res.blob())
    .then(file => {
      let tempUrl = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = tempUrl;
      link.download = 'File';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      console.log(tempUrl);
      link.click();
      link.remove();
      buttonRef.current.innerText = 'Download';
      buttonRef.current.disabled = false;
    })
    .catch((error) => {
      console.log(error.message);
      setErrorMessage('Error downloading')
      buttonRef.current.innerText = 'Download';
      buttonRef.current.disabled = false;
    });
  
  }
  return (
    <>
      <div className='w-full flex justify-center items-center bg-blue-200 h-full-dvh'>
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
              <input value={inputValue} onChange={handleInputChange} type="text" className='w-full border border-gray-500 focus:outline-none py-2 px-4 rounded-md text-xl' />
          </div>
          <div className='px-5 py-2'>
            <button ref={buttonRef} className='w-full bg-blue-700 text-white py-3 rounded-md disabled:cursor-not-allowed disabled:bg-blue-500' onClick={handleSubmit} type='button' disabled={!inputValue}>Download</button>
            {errorMessage &&<p className='text-red-700 font-bold'>{errorMessage}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
