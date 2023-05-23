
import React, { useEffect, useRef, useState } from 'react';
import interact from 'interactjs';

import ThesisElementMovableComponent from './ThesisElementMovableComponent';

const ThesisElementStaticComponent = ({element, index}) => {

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
          className='flex justify-center bg-green-200 p-2 m-2 rounded-md hover:bg-gray-500 
          text-black hover:text-white text-sm border-2 border-gray-300'>
        {element}
      </div>

      <div className='relative'>
        {clonedElements.map((el, index) => (
          <ThesisElementMovableComponent index={index} element={element} key={el}/>
        ))}
      </div>
    </div>    
  );
};

export default ThesisElementStaticComponent;
