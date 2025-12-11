import { createContext, FC, ReactNode, useContext, useState } from "react";

type Stage = "Egg" | "Larva" | "Pupa" | "Adult"

interface CycleContextType {
    stage: Stage,
    setStage: (value: Stage) => void;
    nextStage: () => void
}

const CycleContext = createContext<CycleContextType | null>(null);

export const CycleProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [stage, setStage] = useState<Stage>("Egg")

    const nextStage = () => {
        setStage((prev) => {
            switch (prev) {
                case "Egg":
                    return "Larva";
                case "Larva":
                    return "Pupa";
                case "Pupa":
                    return "Adult";
                default:
                    return "Adult";
            }
        })
    }

    return (
        <CycleContext.Provider
            value={{
                stage, setStage, nextStage
            }}>
            {children}
        </CycleContext.Provider>
    )
}

export const useCycle = () => {
    const context = useContext(CycleContext);
    if (!context) throw new Error("CycleContext must be used inside provider")
    return context;
}
