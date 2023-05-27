'use client'

import ThesisElementStaticComponent from './componets/ThesisElementStaticComponent';
import DropzoneThesisElementsComponent from './componets/DropzoneThesisElementsComponent';

import { React, useState, useEffect } from 'react';

import app_vals from './locales/app_values';

const allMovableElementIdsInMap =  new Set();
const movableElementIdtoDropZoneMap = {};
const dropZoneAndMovableElementsSTATICObj = {
  Abstract: new Set(),
  Introduction: new Set(),
  'Literature Review': new Set(),
  Technology: new Set(),
  Approach: new Set(),
  Design: new Set(),
  Implementation: new Set(),
  Evaluation: new Set(),
  Conclusion: new Set(),
}


export default function Home() {

  
  // const [dropZoneAndMovableElementsMap, setDropZoneAndMovableElementsMap] = useState({
  //   Abstract: new Set(),
  //   Introduction: new Set(),
  //   'Literature Review': new Set(),
  //   Technology: new Set(),
  //   Approach: new Set(),
  //   Design: new Set(),
  //   Implementation: new Set(),
  //   Evaluation: new Set(),
  //   Conclusion: new Set(),
  // });

  const [elementMoved, setElementMoved] = useState(false);


  useEffect(() => {
    console.log("in useEffect");
    console.log("dropZoneAndMovableElementsSTATICObj: ", dropZoneAndMovableElementsSTATICObj);

    Object.entries(dropZoneAndMovableElementsSTATICObj).forEach(([key, value]) => {
      value.forEach((id) => {
        allMovableElementIdsInMap.add(id);
      });
    });
    console.log("allMovableElementIds: ", allMovableElementIdsInMap);

  }, [elementMoved]);

  const handleMovableElementDrop = (movableElementId, movableElement, dropZone) => {

    console.log("in handleMovableElementDrop");

    console.log("allMovableElementIdsInMap: ", allMovableElementIdsInMap);
    console.log("-- movableElementIdToDropZoneMap: ", movableElementIdtoDropZoneMap);
  
    // if movable element was in a dropzone before, and now not in a dropZone, then remove it from the dropZone
    if (allMovableElementIdsInMap && allMovableElementIdsInMap.has(movableElementId) && 
    dropZone === null && movableElement !== "DELETE"
    && movableElementIdtoDropZoneMap[movableElementId] !== null) {
      console.log("was in a dropzone, but now not in any: ", movableElementId);

      var previousDropZone = movableElementIdtoDropZoneMap[movableElementId];

      // allMovableElementIdsInMap.delete(movableElementId);
      movableElementIdtoDropZoneMap[movableElementId] = null;
      dropZoneAndMovableElementsSTATICObj[previousDropZone].delete(movableElementId);
      setElementMoved(!elementMoved);  

      
    }
  
    // if movable element was not in a dropzone before, and now in a dropZone, then add it to the dropZone
    if ((allMovableElementIdsInMap == null && dropZone !== null) || 
    (movableElementIdtoDropZoneMap[movableElementId] == null && dropZone !== null) ||
    (!allMovableElementIdsInMap.has(movableElementId) && dropZone !== null)
    ) {
      console.log("not in a dropzone before. but now in: ", dropZone);
      console.log("movableElementIdsInMap: ", allMovableElementIdsInMap);
      console.log("movableElementId: ", movableElementId);
      console.log("dropZone: ", dropZone);

      movableElementIdtoDropZoneMap[movableElementId] = dropZone;
      dropZoneAndMovableElementsSTATICObj[dropZone].add(movableElementId);

      console.log("movableElementIdtoDropZoneMap: ", movableElementIdtoDropZoneMap);
      console.log("dropZoneAndMovableElementsSTATICObj: ", dropZoneAndMovableElementsSTATICObj);


      setElementMoved(!elementMoved);
    }
  
    // if movable element was in a dropzone before, and now in a different dropZone, then remove it from the previous dropZone and add it to the new dropZone
    if (allMovableElementIdsInMap && allMovableElementIdsInMap.has(movableElementId) && 
    dropZone !== null && movableElementIdtoDropZoneMap[movableElementId] !== null
    && dropZone !== movableElementIdtoDropZoneMap[movableElementId] ) // to check if the dropzone is same as previous dropzone. then do not enter this function.
     {
      console.log("was in a dropzone before, and now in a different dropzone: ", dropZone);
      console.log("previousDropZone: ", movableElementIdtoDropZoneMap[movableElementId]);
      var previousDropZone = movableElementIdtoDropZoneMap[movableElementId];

      movableElementIdtoDropZoneMap[movableElementId] = dropZone;
      
      dropZoneAndMovableElementsSTATICObj[previousDropZone].delete(movableElementId);
      dropZoneAndMovableElementsSTATICObj[dropZone].add(movableElementId);
      console.log("dropZoneAndMovableElementsSTATICObj: ", dropZoneAndMovableElementsSTATICObj);
      setElementMoved(!elementMoved);     

    }
  
    // if second parameter is "DELETE", then delete the movable element from the all static objects
    if (movableElement === "DELETE") {

      console.log("in DELETE");
      console.log("movableElementIdtoDropZoneMap: ", movableElementIdtoDropZoneMap);
      console.log("movableElementIdtoDropZoneMap[movableElementId]: ", movableElementIdtoDropZoneMap[movableElementId]);
      console.log("dropZoneAndMovableElementsSTATICObj: ", dropZoneAndMovableElementsSTATICObj);
      console.log("dropZoneAndMovableElementsSTATICObj: ", dropZoneAndMovableElementsSTATICObj[movableElementIdtoDropZoneMap[movableElementId]]);

      allMovableElementIdsInMap.delete(movableElementId);
      movableElementIdtoDropZoneMap[movableElementId] && delete movableElementIdtoDropZoneMap[movableElementId];
      dropZone && dropZoneAndMovableElementsSTATICObj[dropZone].delete(movableElementId);
      setElementMoved(!elementMoved);     
    }
  
    // if movable element was not in a dropzone before, and now not in a dropZone, then do nothing
    if (dropZone === null && movableElement != "DELETE") {
      console.log("not in a dropzone before. and now also not in any, movableElementId: ", movableElementId);
      allMovableElementIdsInMap.add(movableElementId);
      movableElementIdtoDropZoneMap[movableElementId] = null;

      console.log("movableElementIdtoDropZoneMap: ", movableElementIdtoDropZoneMap);
      console.log("allMovableElementIdsInMap: ", allMovableElementIdsInMap);
      console.log("dropZoneAndMovableElementsSTATICObj: ", dropZoneAndMovableElementsSTATICObj);
    }
  };

  return (
    <main className="flex min-h-screen flex-col justify-between">

      <div className='flex flex-col sm:flex-row'>
        
        {/* left panel. i.e Instruction, bag of elements, and score and info section */}
        <div className='flex flex-col bg-gray-500 p-2 items-center sm:w-3/12 sm:items-start sm:min-h-screen'>
          <p className='text-lg text-white sm:pt-5 sm:pl-2'> Instructions </p>
          <p className='text-sm text-white sm:pt-3 sm:pl-2'> - Left Mouse Button: To Create a Dragable Element </p>
          <p className='text-sm text-white sm:pt-1 sm:pl-2 sm:pb-4'> - Right Mouse Button: To Delete a Dragable Element </p>

          <hr className='w-full border-1 border-gray-200 my-2' />
          
          {/* bag of elements */}
          <div className='flex flex-row flex-wrap'>

            {
              // app_vals.thesis_elements.sort(() => Math.random() - 0.5).map((element, index) => {
              app_vals.thesis_elements.map((element, index) => {
                return (
                  <ThesisElementStaticComponent element={element} index={index} key={index} handleMovableElementDrop={handleMovableElementDrop} 
                  elementMoved={elementMoved}
                  />
                )
              })
            }

          </div>
          
        </div>

        {/* right panel. i.e game display pannel */}
        <div className='flex flex-col bg-white p-2 sm:w-9/12 items-start sm:min-h-screen overflow-y-scroll'>
        
          {/* Thesis outline, i.e drop outer container */}
          <div className='flex flex-col w-full h-6/6'>
            
            {
              app_vals.thesis_element_dropzones.map((dropzone, index) => {
                return (
                  <DropzoneThesisElementsComponent element={dropzone} index={index} key={index} 
                  dropZoneMovableElements={dropZoneAndMovableElementsSTATICObj[dropzone]} elementMoved={elementMoved}/>
                )
              })
            }
            
          </div>
    
        </div>
      </div>

    </main>
  )
}