import React, { useState, useEffect, useRef } from 'react';
import interact from 'interactjs';

import app_vals from '../locales/app_values';

const DropzoneThesisElementsComponent = ({element, index, dropZoneMovableElements, elementMoved}) => {
  const dropzoneRef = useRef(null);

  // DropZone Styles on various Occasions
  const dropzone_no_elements_style = "flex flex-col ml-0 mt-0.5 mb-3 h-16 bg-gray-100 \
  border-dashed border-2 border-gray-300 dropzone_abstract";

  const dropzone_have_one_or_more_bad_elements_style = "flex flex-col ml-0 mt-0.5 mb-3 h-16 bg-red-200 \
  border-dashed border-2 border-gray-300 dropzone_abstract";

  const dropzone_is_healthy_style = "flex flex-col ml-0 mt-0.5 mb-3 h-16 bg-emerald-300 \
  border-dashed border-2 border-gray-300 dropzone_abstract";

  const [dropZoneStyle, setDropZoneStyle] = useState(dropzone_no_elements_style);


  useEffect(() => {
    const dropzoneElement = dropzoneRef.current;

    interact(dropzoneElement).dropzone({
      // Set dropzone options here
      ondragenter: (event) => {
      },
      ondrop: (event) => {
      },
    });

    return () => {
      // interact(dropzoneElement).unset();
    };
  }, []);


  return (
    <div className='flex flex-col'>    
        <div className='flex flex-row rounded-sm w-2/5 sm:w-1/4 justify-center sm:pl-3 sm:pr-3 pt-1 pb-1 bg-gray-700'>
            <p className='text-md text-white'> {element} </p>
        </div>

        {/* elements drop container */}
        <div ref={dropzoneRef} className={dropZoneStyle} id={element}>
            {/* dashed border with full width div */}
        </div>
    </div>

  );
};

export default DropzoneThesisElementsComponent;