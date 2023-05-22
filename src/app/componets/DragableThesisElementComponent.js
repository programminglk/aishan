
import React, { useEffect, useRef } from 'react';
import interact from 'interactjs';

const DragableThesisElementComponent = ({element, index}) => {
    const draggableRef = useRef(null);

    useEffect(() => {
        const draggableElement = draggableRef.current;



        interact(draggableElement).draggable({
            // inertia: true,
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
                // if (event.button === 1) { // Check if right mouse button is clicked
                  const clonedElement = draggableElement.cloneNode(true);
                  const parentElement = draggableElement.parentNode;
                  parentElement.appendChild(clonedElement);
                  
                  // Set the position of the cloned element
                  const rect = draggableElement.getBoundingClientRect();
                  clonedElement.style.position = 'fixed';
                  clonedElement.style.left = `${rect.left}px`;
                  clonedElement.style.top = `${rect.top}px`;
      
                  interact(clonedElement).draggable({

                    onmove: (event) => {
                        const target = event.target;
                    
                        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
                
                        target.style.transform = `translate(${x}px, ${y}px)`;

                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);
                    },
                  }); // Enable dragging on the cloned element
                // }
            },

            

            // // Remove the CSS class when dragging ends
            // onend: (event) => {
            //     event.target.classList.remove('dragging');
            // },
        })
        .resizable({}); // Enable resizing on the draggable element;

        return () => {
            interact(draggableElement).unset();
        };

    }, []);

  return (
    <div ref={draggableRef} key={index} id={'thesis_elem_'+ element} 
        className='flex justify-center bg-green-200 p-2 m-2 rounded-md hover:bg-gray-500 
        text-black hover:text-white text-sm
        border-2 border-gray-300'>
      {element}
      {/* border thin div */}
    </div>
    
  );
};

export default DragableThesisElementComponent;
