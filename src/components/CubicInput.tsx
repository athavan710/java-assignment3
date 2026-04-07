type InputProps = {
    a: number;
    b: number;
    c: number;
    d: number;
    setA: (value: number) => void;
    setB: (value: number) => void;
    setC: (value: number) => void;
    setD: (value: number) => void;
    onSave: () => void;
};

export default function CubicInput({ a, b, c, d, setA, setB, setC, setD, onSave }: InputProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 grid grid-cols-2 md:grid-cols-5 gap-4 items-end">
            <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">a value: </label>
                <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full p-2 border rounded" />
            </div>
            <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">b value: </label>
                <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full p-2 border rounded" />
            </div>
            <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">c value: </label>
                <input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} className="w-full p-2 border rounded" />
            </div>
            <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">d value: </label>
                <input type="number" value={d} onChange={(e) => setD(Number(e.target.value))} className="w-full p-2 border rounded" />
            </div>
            <button
                onClick={onSave}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl transition-colors shadow-lg shadow-blue-100">
                Save
            </button>
        </div>
    ); //e is event and takes given value and updates it to a,b,c,d
};