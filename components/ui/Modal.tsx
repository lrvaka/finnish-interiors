import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRef, Fragment } from "react";
import Image from "next/image";

function Modal({
  children,
  inner,
}: {
  children: JSX.Element | JSX.Element[];
  inner: JSX.Element | JSX.Element[];
}) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={Fragment}
      >
        <Dialog
          className=" shadow-2xl z-50 p-1 pb-5 md:p-5 w-[98vw] h-[85vh] md:h-[90vh] md:w-[90vw] 2xl:h-[80vh] 2xl:w-[80vw] fixed bg-white border rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClose={() => setIsOpen(false)}
        >
          <Dialog.Panel className="h-full relative flex flex-col">
            {inner}
            <button
              className="p-1 bg-red-300 text-black lg:p-2 w-max h-max self-center absolute top-0 left-0 z-20"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Dialog.Panel>
        </Dialog>
      </Transition>
      <div
        onClick={() => setIsOpen(true)}
        className="h-full w-full cursor-pointer"
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
