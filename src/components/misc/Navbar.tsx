import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiX, HiMenu, HiChevronDown } from "react-icons/hi";
import { ThemeSwitcher } from "./ThemeSwitcher";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useNetwork } from "wagmi";

// type Props = {
//   user: UserType;
// };

const loggedNavigation = [
  { name: "Home", href: "/", hasMenu: false },
  { name: "Packlist Banner", href: "/mission", hasMenu: false },
  { name: "Whitepaper", href: "https://docs.pixeldoggo.com", hasMenu: false },
];

const navigation = [
  { name: "Home", href: "/", hasMenu: false },
  { name: "Mission", href: "/mission", hasMenu: false },
  { name: "Whitepaper", href: "https://docs.pixeldoggo.com", hasMenu: false },
  // {
  //   name: "More",
  //   href: "#",
  //   hasMenu: true,
  //   inline: true,
  //   subMenu: [
  //     {
  //       name: "Tool 01",
  //       description: "Short description of the tool",
  //       href: "##",
  //       icon: HiMenu,
  //     },
  //     {
  //       name: "Tool 02",
  //       description: "Short description of the tool",
  //       href: "##",
  //       icon: HiMenu,
  //     },
  //     {
  //       name: "Tool 03",
  //       description: "Short description of the tool",
  //       href: "##",
  //       icon: HiMenu,
  //     },
  //     {
  //       name: "Tool 04",
  //       description: "Short description of the tool",
  //       href: "##",
  //       icon: HiMenu,
  //     },
  //     {
  //       name: "Tool 05",
  //       description: "Short description of the tool",
  //       href: "##",
  //       icon: HiMenu,
  //     },
  //   ],
  // },
];

const Navbar = () => {
  return (
    <Popover as="header" className="relative">
      <div className="bg-transparent pt-4 sm:pt-6">
        <nav
          className="relative mx-auto mb-4 flex lg:pt-8 sm:pt-2 max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link
                href="/"
                className="cursor-pointer dark:text-white text-gray-800"
              >
                <>
                  <span className="sr-only">Doggos</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    height="80"
                    viewBox="0 0 446.06 110.82"
                    fill="currentColor"
                  >
                    <g>
                      <path d="M436.08,0c2.43,9.59-.79,18.15-4.95,26.51C426.36,36.08,419.19,44.72,420,56.4c.06,1-1.83,2.87-2.87,2.92-6.06.28-12.14.14-18.29.14-.47-2.63-.8-4.18-1-5.75-.5-3.46-2.56-5.06-5.84-4.05-2.08.64-3.84,2.26-5.75,3.44,1.43,2.11,2.39,5.25,4.38,6.15,5.57,2.53,11.62,4,17.39,6.12C426,72,427.22,88.61,419.5,102c-1.27,2.19-4.05,4-6.54,4.92-8.38,3.11-16.95,4.72-24.21.85-3.55,1-6,2.14-8.39,2.19-16.24.4-16.45.76-16.12-15.65a41.27,41.27,0,0,0,0-5.45c-.59-5,1.59-8.09,6.54-8.19a39.39,39.39,0,0,1,11.91,1.69c1.5.45,2.67,3,3.4,4.75,2.16,5.4,9.91,7.72,13.75,3.51,1.07-1.17.78-5.64-.3-6.3a46.56,46.56,0,0,0-12-4.94c-9-2.47-17.69-5.36-23-14.89-.93,11.8-3.1,22.15-9.19,31.62-13,20.22-44,18.9-57.82.32C294.24,92,292,86.7,289.44,82c-.64,7.25-1.21,15.16-2.13,23-.2,1.72-1.51,4.6-2.54,4.69-2.86.28-7.07,2.07-7.66-3.3-26,9-42.82-.29-50.66-23.23-.63,7.28-1.13,14.57-2,21.81-.2,1.73-1.5,4.63-2.51,4.72-2.86.27-7.08,2.1-7.68-3.28-29.42,9.78-44.64-2.72-51.1-27.29-3.5,11.69-8.15,22.62-20.22,28.19-15.74,7.25-34.48,2.48-45.41-11.58-11.36-14.61-10.62-36.91,2.92-50.95,14.36-14.87,33.81-16.39,50.43-4,5.76,4.29,9,11.9,12.68,17,3.16-4.5,6.63-10.24,10.9-15.3,4.77-5.65,11.59-7.69,18.85-7.75,4.41,0,8.82.64,13.24.77,1,0,2-.87,3-1.29,1.3-.54,2.61-1.38,4-1.46,10.91-.68,12.16.43,12,11.15a179,179,0,0,1-1,18.08c-.68,5.83-6.27,4.42-9.79,5.09-1.89.36-4.56-2.11-6.5-3.74-1.15-1-1.78-2.73-2.29-4.26-1.82-5.46-5.06-8.5-11.3-7.59a14.19,14.19,0,0,0-11.79,9c-3.87,9.63-3,19.1,2.92,27.76,3.47,5,10.95,8.11,17.27,4.21,3.19-2,5.14-4.31,4.48-7.88-.73-4-4.27-1.88-6.6-2.33a27.23,27.23,0,0,0-4.24,0c0-2.23-.59-4.54.16-6.27s2.81-4.34,4.42-4.43c8-.45,16-.2,24.22-.2.07-7.62,1.67-16.34,7.16-23.83,5.91-8.07,13.7-13,24.07-12.81,4.25.07,8.49.66,12.74.79,1,0,2-.86,3-1.28,1.3-.54,2.61-1.39,3.95-1.47,10.9-.69,12.18.44,12,11.13A179,179,0,0,1,287.32,62c-.67,5.83-6.26,4.44-9.78,5.1-1.89.36-4.56-2.1-6.5-3.73-1.16-1-1.77-2.73-2.29-4.25-1.84-5.43-5-8.52-11.29-7.61a14.26,14.26,0,0,0-11.81,9c-3.88,9.61-3,19.09,2.91,27.76,3.49,5.08,11,8.11,17.26,4.22,3.19-2,5.17-4.28,4.51-7.87-.73-4-4.27-1.88-6.59-2.34a27.25,27.25,0,0,0-4.24,0c0-2.54-.34-5,.14-7.29.27-1.33,1.89-3.4,2.89-3.39,8.8,0,17.6.49,26.75.82-.65-8,2.21-16.49,7.77-23.9S310,35.27,319.31,33.84c20.22-3.09,33.23,2.94,43.68,24.6-1.19-26.77,22.86-32.16,35.88-25.88,3.73-1.58,6.8-4.12,8.64-3.43,7.65,2.87,12.48-1.08,15.85-6.39,4.55-7.18,7.87-15.12,11.72-22.74ZM111.85,73.67c1.33,3.56,2.31,7.3,4.05,10.65,3.42,6.59,15.25,8.22,20,2.43,4.93-6,7.63-21.11.56-29.06-4.12-4.64-9.76-5.41-15-2.27C114.53,59.5,112.81,66,111.85,73.67Zm199.55,0c1.33,3.57,2.31,7.31,4.05,10.67,3.42,6.59,15.26,8.22,20,2.43,4.92-6,7.62-21.11.56-29.06-4.12-4.63-9.77-5.41-15-2.28C314.08,59.5,312.37,66,311.4,73.65Z" />
                      <path d="M446.06,14.87c-2.33,6.25-4.54,12.54-7,18.72a15,15,0,0,1-4.66,5.94c0-1.13-.48-2.66.07-3.3,5.31-6.08,7-13.53,8.75-21.07.36-1.55,1.88-2.84,2.87-4.26Z" />
                      <path d="M58.16,105c-7.81,3.86-15.86,6.07-24.34,5-10.54-1.38-17.47-7.78-20.54-17.6-1.41-4.51-3.84-7.81-6.76-11.25A37.65,37.65,0,0,1,.58,71.23c-1.73-4.13.54-8,5.07-8.68,4.82-.74,7.45-3,9.43-7.55C22,38.93,36.79,33.06,55.71,38.37c.07-1,.19-2,.21-2.94.14-7.62.14-7.62-7.53-7.68-5.54,0-6.2-.85-5.45-6.58a25.76,25.76,0,0,1,.56-4.34c3-10,2.3-10,14.21-10.77,5-.33,10.16.47,15.22.92,3.58.31,5.59,2.4,5.94,6,0,.5,0,1,0,1.49.33,22.22.84,44.44.86,66.66,0,5,1.8,7.53,6.39,8,4,.4,5,2.58,4.72,6,0,.33,0,.66,0,1,.42,12.91.8,14.54-15.68,14.75C69.18,110.89,62.63,110.28,58.16,105Zm-.81-35.33-.43,0c0-3.13.14-6.28-.08-9.4a4.22,4.22,0,0,0-1.67-3,13.59,13.59,0,0,0-19.12,5.9c-3,6.06-2.49,12.5-1.68,18.75a9.44,9.44,0,0,0,9.79,8.29c5.92,0,11.38-2.78,11.85-7.94C56.4,78,56.9,73.84,57.35,69.64Z" />
                      <path d="M409,25.65C415.06,17.16,420.76,9.19,426.83.7,426.83,8.3,416,23.45,409,25.65Z" />
                    </g>
                  </svg>
                </>
              </Link>
              <div className="flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-800 dark:text-white bg-transparent rounded-md focus-ring-inset hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <HiMenu size={24} />
                </Popover.Button>
              </div>
            </div>
            {/* Add content here to get menu next to icon */}
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="hidden space-x-8 md:ml-10 md:flex">
              {navigation.map((item) => (
                <>
                  {item.hasMenu && <MegaMenu data={item} />}
                  {!item.hasMenu && (
                    <Link
                      href={item.href}
                      key={item.name}
                      className="text-base font-medium dark:text-white text-gray-800 hover:text-soft-blue-400"
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              ))}
              {/* {address &&
                isConnected &&
                loggedNavigation.map((item) => (
                  <>
                    {item.hasMenu && <MegaMenu data={item} />}
                    {!item.hasMenu && (
                      <Link
                        href={item.href}
                        key={item.name}
                        className="text-base font-medium dark:text-white text-gray-800 hover:text-soft-blue-400"
                      >
                        {item.name}
                      </Link>
                    )}
                  </>
                ))} */}
            </div>
            <ThemeSwitcher />
            <div id="ctnbutton">
              <ConnectButton chainStatus={"none"} showBalance={false} />
            </div>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top transform md:hidden"
        >
          <div className="overflow-hidden rounded-lg shadow-xl backdrop-blur-sm bg-soft-blue-400 ring-1 ring-white ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="40"
                  viewBox="0 0 446.06 110.82"
                  fill="currentColor"
                >
                  <g>
                    <path d="M436.08,0c2.43,9.59-.79,18.15-4.95,26.51C426.36,36.08,419.19,44.72,420,56.4c.06,1-1.83,2.87-2.87,2.92-6.06.28-12.14.14-18.29.14-.47-2.63-.8-4.18-1-5.75-.5-3.46-2.56-5.06-5.84-4.05-2.08.64-3.84,2.26-5.75,3.44,1.43,2.11,2.39,5.25,4.38,6.15,5.57,2.53,11.62,4,17.39,6.12C426,72,427.22,88.61,419.5,102c-1.27,2.19-4.05,4-6.54,4.92-8.38,3.11-16.95,4.72-24.21.85-3.55,1-6,2.14-8.39,2.19-16.24.4-16.45.76-16.12-15.65a41.27,41.27,0,0,0,0-5.45c-.59-5,1.59-8.09,6.54-8.19a39.39,39.39,0,0,1,11.91,1.69c1.5.45,2.67,3,3.4,4.75,2.16,5.4,9.91,7.72,13.75,3.51,1.07-1.17.78-5.64-.3-6.3a46.56,46.56,0,0,0-12-4.94c-9-2.47-17.69-5.36-23-14.89-.93,11.8-3.1,22.15-9.19,31.62-13,20.22-44,18.9-57.82.32C294.24,92,292,86.7,289.44,82c-.64,7.25-1.21,15.16-2.13,23-.2,1.72-1.51,4.6-2.54,4.69-2.86.28-7.07,2.07-7.66-3.3-26,9-42.82-.29-50.66-23.23-.63,7.28-1.13,14.57-2,21.81-.2,1.73-1.5,4.63-2.51,4.72-2.86.27-7.08,2.1-7.68-3.28-29.42,9.78-44.64-2.72-51.1-27.29-3.5,11.69-8.15,22.62-20.22,28.19-15.74,7.25-34.48,2.48-45.41-11.58-11.36-14.61-10.62-36.91,2.92-50.95,14.36-14.87,33.81-16.39,50.43-4,5.76,4.29,9,11.9,12.68,17,3.16-4.5,6.63-10.24,10.9-15.3,4.77-5.65,11.59-7.69,18.85-7.75,4.41,0,8.82.64,13.24.77,1,0,2-.87,3-1.29,1.3-.54,2.61-1.38,4-1.46,10.91-.68,12.16.43,12,11.15a179,179,0,0,1-1,18.08c-.68,5.83-6.27,4.42-9.79,5.09-1.89.36-4.56-2.11-6.5-3.74-1.15-1-1.78-2.73-2.29-4.26-1.82-5.46-5.06-8.5-11.3-7.59a14.19,14.19,0,0,0-11.79,9c-3.87,9.63-3,19.1,2.92,27.76,3.47,5,10.95,8.11,17.27,4.21,3.19-2,5.14-4.31,4.48-7.88-.73-4-4.27-1.88-6.6-2.33a27.23,27.23,0,0,0-4.24,0c0-2.23-.59-4.54.16-6.27s2.81-4.34,4.42-4.43c8-.45,16-.2,24.22-.2.07-7.62,1.67-16.34,7.16-23.83,5.91-8.07,13.7-13,24.07-12.81,4.25.07,8.49.66,12.74.79,1,0,2-.86,3-1.28,1.3-.54,2.61-1.39,3.95-1.47,10.9-.69,12.18.44,12,11.13A179,179,0,0,1,287.32,62c-.67,5.83-6.26,4.44-9.78,5.1-1.89.36-4.56-2.1-6.5-3.73-1.16-1-1.77-2.73-2.29-4.25-1.84-5.43-5-8.52-11.29-7.61a14.26,14.26,0,0,0-11.81,9c-3.88,9.61-3,19.09,2.91,27.76,3.49,5.08,11,8.11,17.26,4.22,3.19-2,5.17-4.28,4.51-7.87-.73-4-4.27-1.88-6.59-2.34a27.25,27.25,0,0,0-4.24,0c0-2.54-.34-5,.14-7.29.27-1.33,1.89-3.4,2.89-3.39,8.8,0,17.6.49,26.75.82-.65-8,2.21-16.49,7.77-23.9S310,35.27,319.31,33.84c20.22-3.09,33.23,2.94,43.68,24.6-1.19-26.77,22.86-32.16,35.88-25.88,3.73-1.58,6.8-4.12,8.64-3.43,7.65,2.87,12.48-1.08,15.85-6.39,4.55-7.18,7.87-15.12,11.72-22.74ZM111.85,73.67c1.33,3.56,2.31,7.3,4.05,10.65,3.42,6.59,15.25,8.22,20,2.43,4.93-6,7.63-21.11.56-29.06-4.12-4.64-9.76-5.41-15-2.27C114.53,59.5,112.81,66,111.85,73.67Zm199.55,0c1.33,3.57,2.31,7.31,4.05,10.67,3.42,6.59,15.26,8.22,20,2.43,4.92-6,7.62-21.11.56-29.06-4.12-4.63-9.77-5.41-15-2.28C314.08,59.5,312.37,66,311.4,73.65Z" />
                    <path d="M446.06,14.87c-2.33,6.25-4.54,12.54-7,18.72a15,15,0,0,1-4.66,5.94c0-1.13-.48-2.66.07-3.3,5.31-6.08,7-13.53,8.75-21.07.36-1.55,1.88-2.84,2.87-4.26Z" />
                    <path d="M58.16,105c-7.81,3.86-15.86,6.07-24.34,5-10.54-1.38-17.47-7.78-20.54-17.6-1.41-4.51-3.84-7.81-6.76-11.25A37.65,37.65,0,0,1,.58,71.23c-1.73-4.13.54-8,5.07-8.68,4.82-.74,7.45-3,9.43-7.55C22,38.93,36.79,33.06,55.71,38.37c.07-1,.19-2,.21-2.94.14-7.62.14-7.62-7.53-7.68-5.54,0-6.2-.85-5.45-6.58a25.76,25.76,0,0,1,.56-4.34c3-10,2.3-10,14.21-10.77,5-.33,10.16.47,15.22.92,3.58.31,5.59,2.4,5.94,6,0,.5,0,1,0,1.49.33,22.22.84,44.44.86,66.66,0,5,1.8,7.53,6.39,8,4,.4,5,2.58,4.72,6,0,.33,0,.66,0,1,.42,12.91.8,14.54-15.68,14.75C69.18,110.89,62.63,110.28,58.16,105Zm-.81-35.33-.43,0c0-3.13.14-6.28-.08-9.4a4.22,4.22,0,0,0-1.67-3,13.59,13.59,0,0,0-19.12,5.9c-3,6.06-2.49,12.5-1.68,18.75a9.44,9.44,0,0,0,9.79,8.29c5.92,0,11.38-2.78,11.85-7.94C56.4,78,56.9,73.84,57.35,69.64Z" />
                    <path d="M409,25.65C415.06,17.16,420.76,9.19,426.83.7,426.83,8.3,416,23.45,409,25.65Z" />
                  </g>
                </svg>
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md bg-soft-blue-200 hover:bg-soft-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyber-webx">
                  <span className="sr-only">Close menu</span>
                  <HiX size={16} />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <>
                    {!item.hasMenu && (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium dark:text-white text-gray-800 rounded-md hover:bg-soft-blue-200"
                      >
                        {item.name}
                      </a>
                    )}
                  </>
                ))}
              </div>
              {/* Add button here */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const MegaMenu = (data: any) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center text-base font-medium dark:text-white text-gray-800 hover:text-soft-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span>{data.data.name}</span>
            <HiChevronDown
              size={24}
              className={`${open ? "" : "text-opacity-70"}
                  ml-1 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 dark:bg-gray-900 bg-white p-7 lg:grid-cols-2">
                  {data.data.subMenu.map((item: any) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out dark:hover:bg-gray-800 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div
                        key={item.name}
                        className="flex h-10 w-10 shrink-0 items-center justify-center text-gray-800 dark:text-white sm:h-12 sm:w-12"
                      >
                        <item.icon size={24} />
                      </div>
                      <div key={item.name} className="ml-4">
                        <p
                          key={item.name}
                          className="text-sm font-medium dark:text-white text-gray-800"
                        >
                          {item.name}
                        </p>
                        <p key={item.name} className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="dark:bg-gray-900 bg-gray-50 p-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.pixeldoggo.com"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <span className="flex items-center">
                      <span className="text-sm font-medium dark:text-white text-gray-800">
                        Whitepaper
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500">
                      Know more about Doggos
                    </span>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Navbar;
