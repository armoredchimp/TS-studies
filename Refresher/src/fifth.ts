let abc = undefined;
const def = null;

function getData(): string | undefined {
  return '';
}

const data = getData()

if (data) {
  const altData = data; //string
}

let input: unknown;
input = 'someInput';
let secretValue: string



if (typeof input === 'string') {
  secretValue = input;
}


function doTasks(tasks: number): void | never {
  if (tasks > 3) {
    throw new Error('Too many tasks')
  }
}