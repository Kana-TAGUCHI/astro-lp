import { useState } from 'react';
import { FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLine = `block h-1 w-8 my-1 bg-gray-600 transition ease transform duration-300 rounded-full`;

  const navMenu = [
    { title: '特徴', link: 'feature' },
    { title: '人材獲得までの流れ', link: 'flow' },
    { title: 'よくある質問', link: 'faq' },
  ];

  return (
    <header className='fixed z-50 w-full top-0 bg-white'>
      <div className='flex justify-between items-center max-w-container mx-auto w-full h-full p-4 border-b border-gray-200 lg:py-4 lg:px-10'>
        <a href='/' className='w-20 h-5 lg:w-28'>
          <img
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt='Refit'
          />
        </a>
        <button
          className='space-y-1 z-50 lg:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`${hamburgerLine} ${
              isOpen ? 'rotate-45 translate-y-2 opacity-100' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`${hamburgerLine} ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`${hamburgerLine} ${
              isOpen ? '-rotate-45 -translate-y-2 opacity-100' : 'opacity-100'
            }`}
          ></span>
        </button>

        <nav
          className={`flex flex-col absolute top-[57px] transition-all duration-500 h-screen w-full bg-white px-7 py-8 lg:static lg:h-full lg:flex-row lg:justify-end lg:items-center lg:bg-transparent lg:p-0 lg:gap-24 ${
            isOpen ? 'right-0' : '-right-full'
          }`}
        >
          <ul className='flex flex-col text-lg font-semibold items-center lg:flex-row lg:justify-end lg:text-md lg:leading-none lg:gap-8'>
            {navMenu.map((item) => (
              <li
                key={item.link}
                className='py-4 px-2 border-b border-gray-200 w-full lg:w-auto lg:border-b-0 lg:p-0'
              >
                <ScrollLink
                  className='cursor-pointer flex items-center gap-2'
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={650}
                  onClick={() => setIsOpen(false)}
                >
                  <FiChevronRight className='text-main-600 text-3xl font-bold lg:hidden' />
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className='mt-10 flex flex-col gap-8 items-center lg:flex-row-reverse lg:mt-0 lg:gap-4'>
            {/* TODO リンクURL */}
            <a className='btn-primary lg:text-md lg:w-36 lg:py-2' href='/'>
              新規登録
            </a>
            {/* TODO リンクURL */}
            <a className='btn-secondary lg:text-md lg:w-36 lg:py-2' href='/'>
              お問い合わせ
            </a>
            {/* TODO リンクURL */}
            <a
              href='/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center font-semibold text-lg gap-1 pt-2 lg:text-sm lg:pt-0'
            >
              求職者はこちら
              <FiExternalLink className='text-2xl font-bold lg:text-md' />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
