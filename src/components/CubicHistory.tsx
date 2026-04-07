type HistoryItem = {
    a: number;
    b: number;
    c: number;
    d: number;
};

type HistoryProps = {
    history: HistoryItem[];
};

export default function CubicHistory({ history }: HistoryProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <h3 className="text-lg font-bold text-slate-700 mb-4">History</h3>


            {history.length === 0 ? (
                <p className="text-slate-400 italic">No equations saved yet.</p>
            ) : (
                <ul className="space-y-3">
                    {history.map((item, index) => (
                        <li
                            key={index}
                            className="p-3 bg-slate-50 rounded-lg border border-slate-100 font-mono text-sm"
                        >
                            <span className="text-orange-500 font-bold mr-2"></span>
                            f(x) = {item.a}x³{" "}
                            {item.b >= 0 ? `+ ${item.b}` : `- ${Math.abs(item.b)}`}x²{" "}
                            {item.c >= 0 ? `+ ${item.c}` : `- ${Math.abs(item.c)}`}x{" "}
                            {item.d >= 0 ? `+ ${item.d}` : `- ${Math.abs(item.d)}`}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}