import React, { useEffect, useRef, useState } from 'react';
import interact from 'interactjs';

import ThesisElementMovableComponent from './ThesisElementMovableComponent';

const ThesisElementStaticComponent = ({element, index, handleMovableElementDrop, elementMoved}) => {

  const [clonedElements, setClonedElements] = useState([]);


  const handleClone = (event) => {
    console.log("in handleClone");
    const originalElement = event.target;
    const originalRect = originalElement.getBoundingClientRect();

    const newElement = originalElement.cloneNode(true);
    // newElement.style.position = 'absolute';
    // newElement.style.top = `${originalRect.top - 20}px`;

    setClonedElements((prevElements) => [...prevElements, newElement]);

  };


  return (
    <div>
      <button onClick={handleClone} key={index} 
          className='flex justify-center bg-gray-200 pt-0.5 pb-0.5 pl-1 lg:pl-2 pr-1 lg:pr-2 m-0.5 lg:m-2 rounded-md hover:bg-gray-600 
          text-black hover:text-white text-sm border-2 border-gray-300 hover:cursor-pointer'>
        {element}
      </button>

      <div className='relative'>
        {clonedElements.map((el, index) => (
          <ThesisElementMovableComponent index={index} element={element} key={index} handleMovableElementDrop={handleMovableElementDrop}
          elementMoved={elementMoved} />
        ))}
      </div>
    </div>    
  );
};

export default ThesisElementStaticComponent;