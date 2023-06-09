import React, { useContext, useEffect } from 'react'
import useInstruments, { InstrumentsContext } from '../hooks/InstrumentContext'
import InstrumentBox from './InstrumentBox';

const Measure = ({id}) => {

    const {instruments, setInstruments} = useContext(InstrumentsContext);

  return (
    <div className="measure-outer">
        <div className="measure-upper-container">
            <div className="measure-vert"/>
            <div className="measure-upper">
                <div className="instrument-stack upper">
                    {Object.keys(instruments["drums"]).map((instrument_number) => {
                        return <InstrumentBox name="Drums" instrument={"drums"} number={instrument_number} activity={instruments["drums"][instrument_number][id]}/>
                    })}
                </div>
                <div className="instrument-stack upper">
                    {Object.keys(instruments["bass"]).map((instrument_number) => {
                        return <InstrumentBox name="Bass" instrument={"bass"} number={instrument_number} activity={instruments["bass"][instrument_number][id]}/>
                    })}
                </div>
            </div>
            <div className="measure-vert"/>
        </div>
        <div className="measure-lower-container">
            <div className="measure-vert"/>
            <div className="measure-lower">
                <div className="instrument-stack lower">
                {Object.keys(instruments["melody"]).map((instrument_number) => {
                        return <InstrumentBox name="Melody" instrument={"melody"} number={instrument_number} activity={instruments["melody"][instrument_number][id]}/>
                    })}
                </div>
                <div className="instrument-stack lower">
                    {Object.keys(instruments["auxiliary"]).map((instrument_number) => {
                        return <InstrumentBox name="Auxiliary" instrument={"auxiliary"} number={instrument_number} activity={instruments["auxiliary"][instrument_number][id]}/>
                    })}
                </div>

            </div>
            <div className="measure-vert"/>
        </div>

    </div>
  )
}

export default Measure