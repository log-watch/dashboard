import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, FilterIcon, TrashIcon } from '@heroicons/react/solid';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const [logEntries, setLogEntries] = useState(
    Array.from({ length: 7 }, (_, i) => i + 1)
  );
  return (
    <div className='flex flex-col'>
      <Head>
        <title>LogWatch -|- Feed</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex h-[97vh]'>
        <div className='w-1/3'></div>
        <div className='m-3 bg-midnight-blue rounded-md w-full h-full px-10'>
          <div className='flex justify-between mt-10'>
            <div>
              <p className='text-3xl font-extrabold'>Log Watch</p>
              <p className='text-sm font-extralight'>
                A Simple Logging Application From Tritum
              </p>
            </div>
            <Filter />
          </div>
          <p>{logEntries.length} logs</p>
          {logEntries.map((entry: any, index: number) => (
            <div
              key={index}
              className=' flex mt-4 bg-darkslate-gray w-full p-2 rounded-md'
            >
              <div className='w-5/6'>
                <p className='text-[0.6rem] font-bold'>Stealth API</p>
                <p className='text-sm font-bold'>📃 API Request</p>
                <div className='bg-midnight-blue rounded-lg border-gray-800 border-1 p-2 mt-2'>
                  Thyke#2260 Has requested /api/yiff/gay
                </div>
              </div>
              <div className='w-1/6 flex items-center justify-center'>
                <button className='p-2 bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-red-300 hover:bg-red-400'>
                  <TrashIcon
                    className=' h-5 w-5 text-violet-200 hover:text-violet-100'
                    aria-hidden='true'
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );

  function Filter() {
    return (
      <div className='text-right'>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex w-full justify-center rounded-md bg-darkslate-gray bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
              Filter
              <FilterIcon
                className='ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
                aria-hidden='true'
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <ChevronDownIcon />
                      ) : (
                        <ChevronDownIcon
                          className='mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                      )}
                      Edit
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    );
  }
};

export default Home;
