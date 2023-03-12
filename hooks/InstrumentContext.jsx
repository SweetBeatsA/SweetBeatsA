import React, { createContext, useEffect, useReducer, useState } from 'react'

export const InstrumentsContext = createContext(null);
const InstrumentsContextProvider = ({children}) => {
    const [chordProgression, setChordProgression] = useState([]);
    const reducer = (state, action) => {

        let stateCopy = {...state};
        if (action.type == "toggle") {

            if (stateCopy[action.instrument][action.instrumentId][action.measureIndex] == "ON") {
                stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "OFF";
                return stateCopy;
            } else if (stateCopy[action.instrument][action.instrumentId][action.measureIndex] == "OFF" || stateCopy[action.instrument][action.instrumentId][action.measureIndex] == "PREVIEW") {
                
                stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "ON";

                return stateCopy;
            }
        }
        if (action.type == "preview" && stateCopy[action.instrument][action.instrumentId][action.measureIndex] != "ON") {
            stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "PREVIEW";
            return stateCopy;
        }
        if (action.type == "unpreview" && stateCopy[action.instrument][action.instrumentId][action.measureIndex] != "ON") {
            stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "OFF";
            return stateCopy;
        }
        return stateCopy;
    }
    const [instruments, setInstruments] = useReducer(reducer, {
            drums: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
                5: ["OFF", "OFF"],
            },
            bass: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
                5: ["OFF", "OFF"],
            },
            melody: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
                5: ["OFF", "OFF"],
            },
            auxiliary: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
                5: ["OFF", "OFF"],
            },
    });


    return (
        <InstrumentsContext.Provider value={{instruments, setInstruments}}>
            {children}
        </InstrumentsContext.Provider>
    )
}

export {InstrumentsContextProvider};