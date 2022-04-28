import { useState, createContext, Children } from "react";
import { Data } from "../Data";
import { toast } from "react-toastify";


export  const MarketContext = createContext()


export const MarketContextProvider= ({children}) => {
const [data, setData]= useState(Data)

    const deleteItem = (id)=> {
        if(window.confirm("Are you sure You want to delete it ? ")){
            setData(data.filter((item)=> item.id !==id))
            toast.info("You deleted an item.")
        }
    }


    return(
        <MarketContext.Provider 
            value={{
                data,
                setData,
                deleteItem,
            }}
        >
            {children}

        </MarketContext.Provider>
    )
}