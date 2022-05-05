import  {useState,useEffect} from 'react';
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false); //creamos este estado para retornar el error que se produzca al cargar o crear la data del LocalStore
  const [item, setItem] = useState(initialValue); //controla el estado de la data que se retorna
  
  useEffect(() => { //se ejecuta despues de que se carga todo 
      try {
        const localStorageItem = localStorage.getItem(itemName); //obtiene la data del localStore
        let parsedItem;
        
        //Validamos la informacion que obtenemos del localStorage
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
          //como no se habia informacion en localStorage se inicializa el objeto con la data de demostracion que recibe en initial Value
        } else {
          parsedItem = JSON.parse(localStorageItem); //retorna la data que obtiene del localStorage y la parsea
        }
        setItem(parsedItem); //asigna la data al objeto que retornara el estado item
      } catch(error) {
        //si ocurre un error en el try lo retorna con el siguiete estado
        setError(error);
      }
  },[]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    error,
  };
}

export { useLocalStorage };
