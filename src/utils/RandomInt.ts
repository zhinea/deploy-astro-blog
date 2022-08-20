function InitRandomizer(max: number): Function {
  return function random(): number {
    return Math.floor(Math.random() * max) + 1;
  };
}

export default InitRandomizer;
