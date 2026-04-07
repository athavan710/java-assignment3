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
    <div className="max-w-7xl mx-auto p-6 min-h-screen bg-slate-50 font-sans text-slate-900">
      <h1 className="text-5xl font-extrabold text-blue-600 text-center my-10">
        Cubic Solver
      </h1>
      <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_10px_50px_rgba(37,99,235,0.1)] p-8 mb-10 max-w-3xl mx-auto">
        <CubicInput
          a={a} b={b} c={c} d={d}
          setA={setA} setB={setB} setC={setC} setD={setD}
          onSave={saveEquation}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr_1.2fr] gap-8 items-start">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 min-h-[450px]">
          <h3 className="text-slate-800 font-extrabold text-xl mb-6 text-center">Results</h3>
          <CubicTable a={a} b={b} c={c} d={d} onRootsCalculated={(r1, r2, r3) => {
            setRoot1(r1);
            setRoot2(r2);
            setRoot3(r3);
          }} />
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 flex flex-col items-center">
          <div className="mb-6 w-full text-center py-4 bg-blue-50 rounded-2xl">
            <CubicEquation a={a} b={b} c={c} d={d} />
          </div>
          <CubicGraph a={a} b={b} c={c} d={d} root1={root1} root2={root2} root3={root3} />
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 min-h-[450px]">
          <h3 className="text-slate-800 font-extrabold text-xl mb-6 text-center">History</h3>
          <div className="overflow-hidden rounded-2xl border border-slate-100">
            <CubicHistory history={history} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;