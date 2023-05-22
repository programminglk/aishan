import React, { useEffect, useRef } from 'react';
import interact from 'interactjs';

const DropzoneThesisElementsComponent = ({element, index}) => {
  const dropzoneRef = useRef(null);

  useEffect(() => {
    const dropzoneElement = dropzoneRef.current;

    interact(dropzoneElement).dropzone({
      // Set dropzone options here
      ondrop: (event) => {
        const droppedElement = event.relatedTarget;
        console.log('Element dropped:', droppedElement);
      },
    });

    return () => {
      interact(dropzoneElement).unset();
    };
  }, []);

  return (
    <div ref={dropzoneRef} className='flex flex-col'>
            
        <div className='flex flex-row rounded-sm w-1/4 justify-center pl-3 pr-3 pt-1 pb-1 bg-gray-700'>
            <p className='text-md text-white'> {element} </p>
        </div>

        {/* elements drop container */}
        <div className='flex flex-col ml-4 mt-1 mb-3 h-12 bg-blue-100 
            border-dashed border-2 border-gray-400
            dropzone_abstract'>
            {/* dashed border with full width div */}
        </div>
    </div>

  );
};

export default DropzoneThesisElementsComponent;
