import { useEffect } from "react";

type TableProps = {
    a: number;
    b: number;
    c: number;
    d: number;

    onRootsCalculated: (r1: number | string, r2: number | string, r3: number | string) => void; //if number, it sends it so it can draw dot
}

export default function CubicTable({ a, b, c, d, onRootsCalculated }: TableProps) {
    if (a === 0) {
        return <p className="text-red-500"></p>;
    };
    const p = ((3 * a * c) - (b * b)) / (3 * a * a);
    const q = ((27 * (a * a) * d) - (9 * a * b * c) + (2 * b * b * b)) / (27 * a * a * a)
    const discriminant = Number(((q / 2) ** 2 + (p / 3) ** 3).toFixed(7)); //use number to make it a number bc tofixed makes it a string sidenote for me
    const x = b / (3 * a);

    let root1: number | string;
    let root2: number | string;
    let root3: number | string;

    if (discriminant < 0) { //3 real 
        const k = 2 * Math.sqrt(-p / 3);
        const theta = Math.acos((-q / 2) / Math.sqrt((-p / 3) ** 3));
        const y1 = k * Math.cos(theta / 3);
        const y2 = k * Math.cos((theta + 2 * Math.PI) / 3);
        const y3 = k * Math.cos((theta + 4 * Math.PI) / 3);

        root1 = y1 - x;
        root2 = y2 - x;
        root3 = y3 - x;


    } else if (discriminant > 0) { //1 real, 2 imaginary
        const u = Math.cbrt((-q / 2) + Math.sqrt(discriminant));
        const v = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
        root1 = u + v - x;
        root2 = "Complex";
        root3 = "Complex";
    } else if (p === 0 && q === 0) { //triple root
        const u = Math.cbrt((-q / 2) + Math.sqrt(discriminant));
        const v = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
        root1 = u + v - x;
        root2 = u + v - x;
        root3 = u + v - x;
    } else { // single root and double root
        if (p != 0) {
            const u = Math.cbrt(-q / 2);
            root1 = (2 * u) - x;
            const doubleRoot = Math.cbrt(q / 2) - x;
            root2 = doubleRoot;
            root3 = doubleRoot;
        } else {  //discriminant = 0
            const u = Math.cbrt((-q / 2) + Math.sqrt(discriminant));
            const v = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
            root1 = u + v - x;
            root2 = Math.cbrt(q / 2) - (b / (3 * a));
            root3 = Math.cbrt(q / 2) - (b / (3 * a));
        };
    };

    useEffect(() => {
        onRootsCalculated(root1, root2, root3);
    }, [root1, root2, root3, onRootsCalculated]);

    return (
    <div className="bg-white p-4 rounded shadow-md border border-slate-200">
        <h2 className="font-bold mb-2">Results</h2>
        <p>p: {p.toFixed(2)}</p>
        <p>q: {q.toFixed(2)}</p>
        <p>Discriminant: {discriminant.toFixed(2)}</p>
        <p>Root 1: {root1}</p>
        <p>Root 2: {root2}</p>
        <p>Root 3: {root3}</p>
    </div>
);
};

    