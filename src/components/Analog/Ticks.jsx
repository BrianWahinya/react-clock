const Ticks = () => {
  const generateTicks = () => {
    const elems = [];
    for (let i = -1; i < 60; i++) {
      elems.push(
        <div
          key={i}
          className="ticks"
          style={{ transform: `rotate(${6 * i}deg)` }}
        ></div>
      );
    }
    return elems;
  };
  return <>{generateTicks()}</>;
};

export default Ticks;
