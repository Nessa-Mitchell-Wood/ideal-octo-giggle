export function Circles() {
  const colours = [
    "bg-black",
    "bg-orange-500",
    "bg-blue-500",
    "bg-black",
    "bg-purple-500",
    "bg-pink-500",
    "bg-black",
    "bg-purple-500",
    "bg-blue-500",
    "bg-black",
    "bg-blue-500",
    "bg-amber-500",
    "bg-black",
  ];
  return (
    <div
      id="circles"
      className="min-h-dvh relative blur-[200px] overflow-hidden"
    >
      {colours.map((colour) => {
        return (
          <div
            data-circle
            className={`absolute top-[0%] left-[0%] ${colour} w-[400px] h-[400px] rounded-full`}
          ></div>
        );
      })}
    </div>
  );
}
