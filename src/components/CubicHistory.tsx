type CubicVariables = {
  a: number;
  b: number;
  c: number;
  d: number;
};

interface Props {
  history: CubicVariables[]; //array with saved equations
}

const CubicHistory = ({ history }: Props) => {
  return (
    <div className="w-full">
      {history.length === 0 ? (
        <p className="text-slate-400 text-center italic">No equations saved yet.</p>
      ) : (
        <table className="w-full text-center border-separate border-spacing-0 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 font-bold border-r border-blue-500">a</th>
              <th className="py-2 font-bold border-r border-blue-500">b</th>
              <th className="py-2 font-bold border-r border-blue-500">c</th>
              <th className="py-2 font-bold">d</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index} className="bg-white hover:bg-blue-50 transition-colors">
                <td className="py-2 border-b border-r border-slate-100 text-slate-600">{item.a}</td>
                <td className="py-2 border-b border-r border-slate-100 text-slate-600">{item.b}</td>
                <td className="py-2 border-b border-r border-slate-100 text-slate-600">{item.c}</td>
                <td className="py-2 border-b border-slate-100 text-slate-600">{item.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CubicHistory;