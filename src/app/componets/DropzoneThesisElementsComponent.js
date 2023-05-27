import React, { useState, useEffect, useRef } from 'react';
import interact from 'interactjs';

import app_vals from '../locales/app_values';

const DropzoneThesisElementsComponent = ({element, index, dropZoneMovableElements, elementMoved}) => {
  const dropzoneRef = useRef(null);

  // DropZone Styles on various Occasions
  const dropzone_no_elements_style = "flex flex-col ml-4 mt-0.5 mb-3 h-16 bg-gray-100 \
  border-dashed border-2 border-gray-400 dropzone_abstract";

  const dropzone_have_one_or_more_bad_elements_style = "flex flex-col ml-4 mt-0.5 mb-3 h-16 bg-red-200 \
  border-dashed border-2 border-gray-400 dropzone_abstract";

  const dropzone_is_healthy_style = "flex flex-col ml-4 mt-0.5 mb-3 h-16 bg-emerald-300 \
  border-dashed border-2 border-gray-400 dropzone_abstract";

  const [dropZoneStyle, setDropZoneStyle] = useState(dropzone_no_elements_style);

  const dropZoneAcceptedElements = Object.keys(app_vals.dropzone_thesis_element_scores[element]);

  console.log("===> Coming from DROP ZONE <============");


  useEffect(() => {
    // console.log("===> Coming from DROP ZONE: dropZoneMovableElements: ", dropZoneMovableElements);
    if(dropZoneMovableElements.size > 0) {
      console.log("===> Coming from DROP ZONE: dropZoneMovableElements: ", dropZoneMovableElements);
      var dropZoneElements = [];

      dropZoneMovableElements.forEach(element => {
        console.log(element); // 

        let startIndex = element.indexOf("_") + 1; // Find the index of the first "_" and add 1 to exclude it
        let endIndex = element.lastIndexOf("_"); // Find the index of the last "_"
        let el = element.substring(startIndex, endIndex);
        dropZoneElements.push(el);
      });
      console.log("dropZone accepted elements: ", dropZoneAcceptedElements);
      console.log("dropZoneElements: ", dropZoneElements);

      const hasMissingElement = dropZoneElements.some(element => !dropZoneAcceptedElements.includes(element));

      if (hasMissingElement) {
        console.log("some of the dropzone elements are not accepted");
        if (dropZoneStyle !== dropzone_have_one_or_more_bad_elements_style) {
          setDropZoneStyle(dropzone_have_one_or_more_bad_elements_style);
        }
      } else {
        console.log("all of the dropzone elements are accepted");
        if (dropZoneStyle !== dropzone_is_healthy_style) {
          setDropZoneStyle(dropzone_is_healthy_style);
        }
      }         
    } else {
      console.log("dropZoneMovableElements is empty");
      if (dropZoneStyle !== dropzone_no_elements_style) {
        setDropZoneStyle(dropzone_no_elements_style);
      }

    }

  }, [elementMoved, dropZoneStyle, dropZoneMovableElements]);



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
        <div className='flex flex-row rounded-sm w-1/4 justify-center pl-3 pr-3 pt-1 pb-1 bg-gray-700'>
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