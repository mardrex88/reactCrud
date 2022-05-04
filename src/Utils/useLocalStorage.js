import React, {useState,useEffect} from 'react';

function useLocalStorage(dataName, initialValue) {
  const [error, setError] = useState(false);
  const [data, setData] = useState(initialValue);
  
  useEffect(() => {
      try {
        const localStorageData = localStorage.getData(dataName);
        let parsedData;
        
        if (!localStorageData) {
          localStorage.setData(dataName, JSON.stringify(initialValue));
          parsedData = initialValue;
        } else {
          parsedData = JSON.parse(localStorageData);
        }

        setData(parsedData);
      } catch(error) {
        setError(error);
      }
  },[]);
  
  const saveData = (newData) => {
    try {
      const stringifiedData = JSON.stringify(newData);
      localStorage.setData(dataName, stringifiedData);
      setData(newData);
    } catch(error) {
      setError(error);
    }
  };

  return {
    data,
    saveData,
    error,
  };
}

export { useLocalStorage };
