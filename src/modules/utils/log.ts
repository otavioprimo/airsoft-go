const log = (...params: any) => {
  if (__DEV__) {
    console.tron.log(...params);
  }
};

export default log;
