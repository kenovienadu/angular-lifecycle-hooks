export const mockApiCall = (): Promise<boolean> => {
  console.log('mock api call running');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
};

export const logTimeAtIntervals = (interval = 1000) => {
  return setInterval(() => {
    console.log(new Date().toTimeString());
  }, interval);
};
