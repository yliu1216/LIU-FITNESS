import React, {useState, useEffect, createContext  } from "react"

export const ExerciseContext = createContext();

export function ExerciseProvider({children}){
    const [exerciseData, setExerciseData] = useState([]);
    const [selectedBodyPart, setSelectedBodyPart] = useState(null);
    const [selectedExerciseData, setSelectedExerciseData] = useState([]);

    return(
        <ExerciseContext.Provider value={{
            exerciseData,
            selectedBodyPart,
            setSelectedBodyPart,
            selectedExerciseData,
        }}>
            {children}
        </ExerciseContext.Provider>
    )
}
