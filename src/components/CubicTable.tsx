import { useEffect } from "react";

type TableProps = {
    a: number;
    b: number;
    c: number;
    d: number;
    onRootsCalculated: (r1: number | string, r2: number | string, r3: number | string) => void;
}

export default function CubicTable({ a, b, c, d, onRootsCalculated }: TableProps) {
    if (a === 0) {
        return <p className="text-red-500"></p>;
    };

    const p = ((3 * a * c) - (b * b)) / (3 * a * a);
    const q = ((27 * (a * a) * d) - (9 * a * b * c) + (2 * b * b * b)) / (27 * a * a * a)
    const discriminant = Number(((q / 2) ** 2 + (p / 3) ** 3).toFixed(7));
    const x = b / (3 * a);

    let root1: number | string;
    let root2: number | string;
    let root3: number | string;

    if (discriminant < 0) {
        const k = 2 * Math.sqrt(-p / 3);
        const theta = Math.acos((-q / 2) / Math.sqrt((-p / 3) ** 3));
        const y1 = k * Math.cos(theta / 3);
        const y2 = k * Math.cos((theta + 2 * Math.PI) / 3);
        const y3 = k * Math.cos((theta + 4 * Math.PI) / 3);
        root1 = y1 - x;
        root2 = y2 - x;
        root3 = y3 - x;
    } else if (discriminant > 0) {
        const u = Math.cbrt((-q / 2) + Math.sqrt(discriminant));
        const v = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
        root1 = u + v - x;
        root2 = "Complex";
        root3 = "Complex";
    } else if (p === 0 && q === 0) {
        const u = Math.cbrt((-q / 2) + Math.sqrt(discriminant));
        const v = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
        root1 = u + v - x;
        root2 = u + v - x;
        root3 = u + v - x;
    } else {
        if (p != 0) {
            const u = Math.cbrt(-q / 2);
            root1 = (2 * u) - x;
            const doubleRoot = Math.cbrt(q / 2) - x;
            root2 = doubleRoot;
            root3 = doubleRoot;
        } else {
            const u = Math.cbrt((-q / 2) + Math.sqrt(discriminant));
            const v = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
            root1 = u + v - x;
            root2 = Math.cbrt(q / 2) - (b / (3 * a));
            root3 = Math.cbrt(q / 2) - (b / (3 * a));
        };
    };

    useEffect(() => {
        onRootsCalculated(root1, root2, root3);
    }, [root1, root2, root3, onRootsCalculated]); //calculate roots and onrootscalculated sends to graph

    const formatValue = (val: number | string) =>
        typeof val === 'number' ? val.toFixed(2) : val; //number to 2 decimal places or string

    return (
        <div className="w-full">
            <table className="w-full text-left border-collapse">
                <tbody>
                    <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600 font-medium">p</td>
                        <td className="py-2 px-4 text-slate-900 text-right">{p.toFixed(2)}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600 font-medium">q</td>
                        <td className="py-2 px-4 text-slate-900 text-right">{q.toFixed(2)}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600 font-medium">discriminant</td>
                        <td className="py-2 px-4 text-slate-900 text-right">{discriminant.toFixed(2)}</td>
                    </tr>

                    <tr className="bg-blue-600 text-white font-bold">
                        <td className="py-2 px-4 text-center">Value</td>
                        <td className="py-2 px-4 text-center">x</td>
                        <td className="py-2 px-4 text-center">y</td>
                    </tr>

                    <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600 font-medium text-center">Root 1</td>
                        <td className="py-2 px-4 text-center">{formatValue(root1)}</td>
                        <td className="py-2 px-4 text-center">0.00</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600 font-medium text-center">Root 2</td>
                        <td className="py-2 px-4 text-center">{formatValue(root2)}</td>
                        <td className="py-2 px-4 text-center">{typeof root2 === 'number' ? '0.00' : '—'}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600 font-medium text-center">Root 3</td>
                        <td className="py-2 px-4 text-center">{formatValue(root3)}</td>
                        <td className="py-2 px-4 text-center">{typeof root3 === 'number' ? '0.00' : '—'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}