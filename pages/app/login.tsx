import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>LogWatch -|- Log In</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-gray-900 rounded-md p-10'>
        <div className='mb-4 relative'>
          <input
            className='input border border-gray-800 bg-black appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
            id='email'
            type='text'
          />
        </div>
        <div className='mb-4 relative'>
          <input
            className='input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
            id='password'
            type='password'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
