type EquationProps = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export default function CubicEquation({ a, b, c, d }: EquationProps) {
  return (
    <h2 className="text-xl font-bold text-center">
      f(x) = {a}x³{" "}
      {b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}x²{" "}
      {c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`}x{" "}
      {d >= 0 ? `+ ${d}` : `- ${Math.abs(d)}`}
    </h2>
  );
}; //if not >=0, it switches sign to - and makes it positive with absolute