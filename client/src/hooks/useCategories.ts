
import { useState, useEffect } from 'react';

let listeners:Array<any> = [];
let state:any= [];

const setState = (newState:any) => {
  state = newState ;
  listeners.forEach((listenerSet) => {
    listenerSet(state);
  });
};



const useCategories  = () => {
  const newListener = useState()[1];
    useEffect(() => {
        listeners.push(newListener);
        return () => { //componentWillUnmount().
            listeners = listeners.filter(listener => listener !== newListener);
        };
    }, [ ]);
  return [state, setState];
};


export default useCategories;