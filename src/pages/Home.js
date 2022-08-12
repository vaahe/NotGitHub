import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css';

const Home = () => {
  const navigate = useNavigate();
  navigate("/about-us")

  return (
    <div className="home h-[521px] flex items-center justify-center">
      <main className='flex flex-col welcome-text items-center'>
        <span>Welcome</span>
        <span>To</span>
        <span>NotGitHub</span>
        <button
          className='bg-black-900 border-2 hover:bg-white hover:text-black text-xl w-max p-2 mt-5 hover:scale-125 cursor-pointer
        transition ease-in-out duration-300'
          onClick={navigate}
        >LEARN MORE</button>
      </main>
    </div>
  )
}

export default Home