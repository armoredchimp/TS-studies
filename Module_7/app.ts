// Generic Types
const names: Array<string | number> = [];

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res('Done!')
  }, 2000);
});