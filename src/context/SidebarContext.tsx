import {useState, createContext, useContext} from 'react';
import type { ReactNode } from 'react';

interface SidebarProps{
    sidebarToggle:boolean,
    setSidebarToggle:React.Dispatch<React.SetStateAction<boolean>>,
}

const SidebarContext = createContext<SidebarProps | undefined>(undefined);

export function SidebarProvider({children}:{children: ReactNode;}){
    const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

    return(
        <SidebarContext.Provider value={{sidebarToggle, setSidebarToggle}}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar(){
    const context = useContext(SidebarContext);

    if(!context){
        throw new Error(
            "useSidebar must be added inside SidebarProvider"
        );
    }

    return context;
}
