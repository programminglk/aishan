import React, { useEffect, useRef } from 'react';
import interact from 'interactjs';

const ThesisElementMovableComponent = ({index, element, handleMovableElementDrop, elementMoved}) => {
  const draggableRef = useRef(null);

  useEffect(() => {
    const draggableElement = draggableRef.current;

    interact(draggableElement).draggable({
        inertia: true,

        onmove: (event) => {
            const target = event.target;
            
            // We are extracting the original position of the draggable item and 
            // since its a string so we are parsing it to float. Then we are simply 
            // finding the change in position using the event.dx and event.dy event listener.
            // Then we calculate the new position of the item by simply adding the change in
            // position to the original position. 
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        
            // Then we are using the css property "transform" to translate the (or change) 
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

            //get dropped zone
            const droppedZone = event.relatedTarget;
            let droppedZoneId = null
            if (droppedZone != null) {
                droppedZoneId = droppedZone.id;
            } 
            console.log("==>> comming from moved element droppedZone: ", droppedZoneId);

            // get dropped element text
            const droppedElementText = event.target.innerText;
            handleMovableElementDrop(event.target.id, droppedElementText,  droppedZoneId)
        },

    }).resizable({
        edges: { left: false, right: true, bottom: false, top: false },
        modifiers: [
          interact.modifiers.restrictSize({
            min: { width: 100 }, // Set the minimum width of the div
            max: { width: 500 }, // Set the maximum width of the div
          }),
        ],
        inertia: true, // Enable inertia for smooth resizing
    }).on('resizemove', (event) => {
        const { width } = event.rect;
        draggableElement.style.width = `${width}px`;
    });


    const handleDelete = (event) => { // Prevent the default context menu
        const divToRemove = event.target;
        if (divToRemove.classList.contains('movable_element')) {
            event.preventDefault();
            console.log("==>> comming from moved element handleDelete: ", event.target.id);
            handleMovableElementDrop(event.target.id, "DELETE",  null);
            
            divToRemove.remove();
        }
    };

    document.addEventListener('contextmenu', handleDelete);

    return () => {
        document.removeEventListener('contextmenu', handleDelete);
    };


  }, []);

  return (
    <button ref={draggableRef}
        key={index}
        className='movable_element absolute z-50
        flex justify-center bg-yellow-400 pt-0.5 pb-0.5 pl-2 pr-2 mt-0 ml-2 mr-2 rounded-md hover:bg-yellow-600 
        text-black hover:text-white text-sm border-2 border-gray-400'
        id={'movable_' + element + '_' + index}
    >
        {element}
    </button>
   
  );
};

export default ThesisElementMovableComponent;