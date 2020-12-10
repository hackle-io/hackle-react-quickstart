import { HackleExperiment, HackleVariation, useTrack } from "@hackler/react-sdk"
import React from "react"
import "./App.css"

const EXPERIMENT_KEY = 5

function App() {
  const track = useTrack()
  const onClick = () => track({ key: "purchase_button_click" })
  return (
    <div className="App">
      <header />
      <footer className="Footer">
        <HackleExperiment experimentKey={EXPERIMENT_KEY}>
          <HackleVariation variation={"A"}>
            <button className={"Button-blue"} onClick={onClick}>구매하기</button>
          </HackleVariation>
          <HackleVariation variation={"B"}>
            <button className={"Button-red"} onClick={onClick}>구매하기</button>
          </HackleVariation>
        </HackleExperiment>
      </footer>
    </div>
  )
}

export default App
