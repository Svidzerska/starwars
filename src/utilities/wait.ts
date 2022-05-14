export const wait = (duration: number) => {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject(new Error("wrong time"));
    }
    setTimeout(resolve, duration);
  });
};
