'use client';

import React from 'react';
import Logo from '@/components/widgets/Logo';
import {Disclosure} from '@headlessui/react';
import Button from '@/components/widgets/Button';
import { useRouter } from 'next/navigation';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
// import Link from 'next/link';
import { TDictionary } from '@/app/[[...lang]]/dictionaries';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({data} : {data: TDictionary}) => {
  const router = useRouter();

  return (
    <>
    <a id="top"></a>
    <Disclosure as="nav" className="bg-transparent lg:flex">
      
      {({ open }) => (
        <>
          <div className="mx-auto max-w-5xl w-full px-2 lg:px-0">
            <div className="relative flex py-5 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden w-full justify-end">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RiCloseLine className="block h-6 w-6 text-[#22D3EE]" aria-hidden="true" />
                  ) : (
                    <RiMenuFill className="block h-6 w-6 text-[#22D3EE]" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div
                onClick={() => router.push('/')}
                className="items-center cursor-pointer flex-1 flex"
              >
                <Logo className="w-[6.5625rem] h-[1.21406rem]" />
              </div>
              <div className="hidden ml-6 lg:ml-0 lg:block flex-auto">
                <div className="flex gap-4 justify-center items-center">
                  {data.navbar.links.map((item) => (
                    <a key={item.name} href={item.href}>
                      <p className={classNames(
                        'text-sm font-medium tracking-[0.00438rem] px-3 py-2 hover:text-[#22D3EE] hover:bg-cyan-950/40 transition-all	transition-duration: 150ms rounded-xl',
                        item.name ? 'text-[#F3F4F6]' : 'text-[#22D3EE] underline'
                      )}
                      aria-current={item.name ? 'page' : undefined}>
                        {item.name}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 items-center pr-2 lg:static lg:inset-auto lg:ml-0 lg:pr-0 flex-1 justify-end hidden lg:flex">
                {(
                  <a href={process.env.CTA_REDIRECT_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Button shape='filled' size='small' width={118.4} > {data.navbar.buttonText} </Button>
                  </a>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden ">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {data.navbar.links.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.name
                      ? 'text-[#F3F4F6]'
                      : 'text-[#22D3EE] underline',
                    'block rounded-md px-3 py-2 text-sm font-medium tracking-[0.00438rem] p-3 hover:text-[#22D3EE] hover:underline'
                  )}
                  aria-current={item.name ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  );
};

export default Navbar;