import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useAuth } from "./useAuth";
const DataContext = createContext();

export const DataProvider = ({children}) => {
    const { user } = useAuth();
    const [player, playerSet] = useLocalStorage("player", user);

    const setData = async (type, data) => {
        playerSet(data);
    };

    const value = useMemo(
        () => ({
            player,
            setData
        }),
        [player]
    );

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>

};

export const useData = () => {
    return useContext(DataContext);
}