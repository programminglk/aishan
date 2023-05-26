import React, { useEffect, useRef, useState } from 'react';
import interact from 'interactjs';

import ThesisElementMovableComponent from './ThesisElementMovableComponent';

const ThesisElementStaticComponent = ({element, index, handleMovableElementDrop}) => {

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
      <div onClick={handleClone} key={index} 
          className='flex justify-center bg-green-200 pt-1 pb-1 pl-2 pr-2 m-2 rounded-md hover:bg-green-600 
          text-black hover:text-white text-sm border-2 border-gray-300 hover:cursor-pointer'>
        {element}
      </div>

      <div className='relative'>
        {clonedElements.map((el, index) => (
          <ThesisElementMovableComponent index={index} element={element} key={index} handleMovableElementDrop={handleMovableElementDrop}/>
        ))}
      </div>
    </div>    
  );
};

export default ThesisElementStaticComponent;