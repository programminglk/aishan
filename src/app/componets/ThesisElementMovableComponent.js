import React, { useEffect, useRef } from 'react';
import interact from 'interactjs';

const ThesisElementMovableComponent = ({index, element}) => {
  const draggableRef = useRef(null);

  useEffect(() => {
    const draggableElement = draggableRef.current;

    interact(draggableElement).draggable({
      // Set the draggable options here
      // For example, you can specify the CSS class when dragging starts

        onmove: (event) => {
            const target = event.target;
            
            // We are extracting the original position of the draggable item and 
            // since its a string so we are parsing it to float. Then we are simply 
            // finding the change in position using the event.dx and event.dy event listener.
            // Then we calculate the new position of the item by simply adding the change in
            // position to the original position. 
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        
            // Then we are using the css property “transform” to translate the (or change) 
            // the position of the element to the new position:
            target.style.transform = `translate(${x}px, ${y}px)`;
        
            // Finally we are updating the data-x and data-y attributes of the element
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        },

        onstart: (event) => {
            event.target.classList.add('dragging');
        },
        // Remove the CSS class when dragging ends
        onend: (event) => {
            event.target.classList.remove('dragging');
        },

    });


    const handleDelete = (event) => { // Prevent the default context menu
        const divToRemove = event.target;
        if (divToRemove.classList.contains('movable_element')) {
            event.preventDefault();
            divToRemove.remove();
        }
    };

    document.addEventListener('contextmenu', handleDelete);

    return () => {
        document.removeEventListener('contextmenu', handleDelete);
    };


  }, []);

  return (
    <div ref={draggableRef}
        key={index}
        className='movable_element absolute z-50
        flex justify-center bg-yellow-200 p-2 m-2 rounded-md hover:bg-gray-500 
         text-black hover:text-white text-sm border-2 border-gray-300'
        id={element + '_' + index}
    >
        {element}
    </div>
   
  );
};

export default ThesisElementMovableComponent;