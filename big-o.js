const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'martin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo');

function findNemo(array) {

  let t0 = performance.now();

  for(let i = 0; i < array.length; i++) {
    if(array[i] ===  'nemo') {
      console.log('Nemo found!');
    }
  }

  let t1 = performance.now();
  console.log(`Time to find nemo is ${t1-t0}`);
}

findNemo(large);
