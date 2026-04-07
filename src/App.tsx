import { useState } from 'react'
import './App.css'
import CubicInput from './components/CubicInput'
import CubicEquation from './components/CubicEquation'
import CubicTable from './components/CubicTable'
import CubicGraph from './components/CubicGraph'
import CubicHistory from './components/CubicHistory'

type CubicVariables = {
  a: number;
  b: number;
  c: number;
  d: number;
};



function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  const [d, setD] = useState(0)
  const [root1, setRoot1] = useState<number | string>(''); //string for complex, number for real
  const [root2, setRoot2] = useState<number | string>('');
  const [root3, setRoot3] = useState<number | string>('');
  const [history, setHistory] = useState<CubicVariables[]>([])
  const saveEquation = () => {
    setHistory([...history, { a, b, c, d }])
  };

  return (
    <div className="dashboard-wrapper">
      <h1 className="main-title">Cubic Solver</h1>

      <div className="card input-section">
        <CubicInput
          a={a} b={b} c={c} d={d}
          setA={setA} setB={setB} setC={setC} setD={setD}
          onSave={saveEquation}
        />
      </div>

      <div className="equation-display">
        <CubicEquation a={a} b={b} c={c} d={d} />
      </div>

      <div className="main-grid">


        <div className="grid-side card results-container">
          <CubicTable a={a} b={b} c={c} d={d} onRootsCalculated={function (r1: number | string, r2: number | string, r3: number | string): void {
            setRoot1(r1);
            setRoot2(r2);
            setRoot3(r3);
          } }  />
        </div>


        <div className="grid-center card">
          <CubicGraph a={a} b={b} c={c} d={d} root1={root1} root2={root2} root3={root3} />
        </div>


        <div className="grid-side card history-container">
          <h3 className="sidebar-header"></h3>
          <CubicHistory history={history} />
        </div>

      </div>
    </div>
  )

};

export default App