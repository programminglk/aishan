'use client'

import ThesisElementStaticComponent from './componets/ThesisElementStaticComponent';
import DropzoneThesisElementsComponent from './componets/DropzoneThesisElementsComponent';

import { React, useState, useEffect } from 'react';

import app_vals from './locales/app_values';


export default function Home() {

  
  const [dropZoneAndMovableElementsMap, setDropZoneAndMovableElementsMap] = useState({
    Abstract: new Set(),
    Introduction: new Set(),
    'Literature Review': new Set(),
    Technology: new Set(),
    Approach: new Set(),
    Design: new Set(),
    Implementation: new Set(),
    Evaluation: new Set(),
    Conclusion: new Set(),
  });
  
  const [allMovableElementIdsInMap, setAllMovableElementsInMap] = useState(null);

  useEffect(() => {
    console.log("in useEffect");
    console.log(dropZoneAndMovableElementsMap)

    const allMovableElementIds = [];
    Object.entries(dropZoneAndMovableElementsMap).forEach(([key, value]) => {
      value.forEach((id) => {
        allMovableElementIds.push(id);
      });
    });
    setAllMovableElementsInMap(allMovableElementIds);
    console.log("allMovableElementIds: ", allMovableElementIds);

  }, [dropZoneAndMovableElementsMap]);

  // Get all elements from the sets
  
  console.log("current dropZoneAndMovableElementsMap: ", dropZoneAndMovableElementsMap);

  const handleMovableElementDrop = (movableElementId, movableElement, dropZone) => {

    console.log("in handleMovableElementDrop");

    console.log("allMovableElementIdsInMap: ", allMovableElementIdsInMap);
  
    // if movable element was in a dropzone before, and now not in a dropZone, then remove it from the dropZone
    if (allMovableElementIdsInMap && allMovableElementIdsInMap.includes(movableElementId) && dropZone === null) {
      console.log("was in a dropzone, but now not in any: ", movableElementId);
      Object.entries(dropZoneAndMovableElementsMap).forEach(([key, value]) => {
        if (value.has(movableElementId)) {
          // dropZoneAndMovableElementsMap[key] = dropZoneAndMovableElementsMap[key].filter((id) => id !== movableElementId);
          setDropZoneAndMovableElementsMap((prevMap) => {
            return {
              ...prevMap,
              [key]: prevMap[key].filter((id) => id !== movableElementId)
            }
          });
        }
      });
    }
  
    // if movable element was not in a dropzone before, and now in a dropZone, then add it to the dropZone
    if ((allMovableElementIdsInMap == null && dropZone !== null) || (!allMovableElementIdsInMap.includes(movableElementId) && dropZone !== null)) {
      console.log("not in a dropzone before. but now in: ", dropZone);
      const dropZoneSet = new Set(dropZoneAndMovableElementsMap[dropZone]);
      dropZoneSet.add(movableElementId);

      setDropZoneAndMovableElementsMap((prevMap) => {
        return {
          ...prevMap,
          [dropZone]: dropZoneSet
        }
      });
    }
  
    // if movable element was in a dropzone before, and now in a different dropZone, then remove it from the previous dropZone and add it to the new dropZone
    if (allMovableElementIdsInMap && allMovableElementIdsInMap.includes(movableElementId) && dropZone !== null) {
      console.log("was in a dropzone before, and now in a different dropzone: ", dropZone);
      var previousDropZone = null;
      var previousDropZoneSet = null;
      var newDropZoneSet = null;
  
      Object.entries(dropZoneAndMovableElementsMap).forEach(([key, value]) => {
      
        if (value.has(movableElementId) && key !== dropZone) {
          previousDropZone = key;
          previousDropZoneSet = new Set(dropZoneAndMovableElementsMap[key].delete(movableElementId));
          console.log("previousDropZoneSet: ", previousDropZoneSet);

        } else if (key === dropZone) {
          newDropZoneSet = new Set(dropZoneAndMovableElementsMap[dropZone].add(movableElementId));
        }
      });

      setDropZoneAndMovableElementsMap((prevMap) => {
        return {
          ...prevMap,
          [previousDropZone]: previousDropZoneSet,
          [dropZone]: dropZoneSet
        }
      }
      );
    }
  
    // if second parameter is "DELETE", then delete the movable element from the dropZoneAndMovableElementsMap
    if (movableElement === "DELETE") {
      Object.entries(dropZoneAndMovableElementsMap).forEach(([key, value]) => {
        if (value.has(movableElementId)) {
          // dropZoneAndMovableElementsMap[key] = dropZoneAndMovableElementsMap[key].filter((id) => id !== movableElementId);
          setDropZoneAndMovableElementsMap((prevMap) => {
            return {
              ...prevMap,
              [key]: prevMap[key].filter((id) => id !== movableElementId)
            }
          }
          );
        }
      });
    }
  
    // if movable element was not in a dropzone before, and now not in a dropZone, then do nothing
    if (allMovableElementIdsInMap && !allMovableElementIdsInMap.includes(movableElementId) && dropZone === null) {
      return;
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
                  <ThesisElementStaticComponent element={element} index={index} key={index} handleMovableElementDrop={handleMovableElementDrop} />
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
                  <DropzoneThesisElementsComponent element={dropzone} index={index} 
                  key={index} dropZoneAndMovableElements={dropZoneAndMovableElementsMap[dropzone]} />
                )
              })
            }
            
          </div>
    
        </div>
      </div>

    </main>
  )
}