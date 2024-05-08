import React from 'react';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const BookModal = ({ item, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        ></AiOutlineClose>
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {item.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500'>{item._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl'></PiBookOpenTextLight>
          <h2 className='my-1'></h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl'></BiUserCircle>
          <h2 className='my-1'>{item.author}</h2>
        </div>
        <p className='mt-4'>Anything You want to show</p>
        <p className='my-2'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          facilis facere autem asperiores, tempore possimus vero exercitationem
          nam corporis natus laudantium mollitia, sint neque maiores magni
          aliquid nostrum fugiat accusantium.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
