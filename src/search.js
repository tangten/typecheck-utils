function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

function jumpSearch(arr, target) {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n)); // Calculate optimal step size

  let prev = 0;
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1; // Target not in the array
    }
  }

  // Target found in the block, perform linear search
  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) {
      return -1;
    }
  }

  if (arr[prev] === target) {
    return prev;
  }

  return -1;
}

function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // Interpolation formula
    const pos =
      low +
      Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

    if (arr[pos] === target) {
      return pos;
    } else if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1; // Target not found
}

function ternarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (high - low > 1) { 
    const mid1 = low + Math.floor((high - low) / 3);
    const mid2 = high - Math.floor((high - low) / 3);

    if (arr[mid1] === target) {
      return mid1;
    } else if (arr[mid2] === target) {
      return mid2;
    } else if (target < arr[mid1]) {
      high = mid1 - 1; 
    } else if (target > arr[mid2]) {
      low = mid2 + 1; 
    } else {
      low = mid1 + 1; 
      high = mid2 - 1; 
    }
  }

  // Handle when the array has only 2 elements remaining
  if (arr[low] === target) {
    return low;
  } else if (arr[high] === target) {
    return high;
  } else {
    return -1; // Target not found
  }
}

function fibonacciSearch(arr, target) {
  let fibM_minus_2 = 0; 
  let fibM_minus_1 = 1; 
  let fibM = fibM_minus_1 + fibM_minus_2; 

  // Find the smallest Fibonacci number greater than or equal to array length
  while (fibM < arr.length) {
    fibM_minus_2 = fibM_minus_1;
    fibM_minus_1 = fibM;
    fibM = fibM_minus_1 + fibM_minus_2;
  }

  let offset = -1;

  while (fibM > 1) {
    // Check if fibM_minus_2 is a valid location within the array  
    const i = Math.min(offset + fibM_minus_2, arr.length - 1);

    if (arr[i] < target) {
      fibM = fibM_minus_1;
      fibM_minus_1 = fibM_minus_2;
      fibM_minus_2 = fibM - fibM_minus_1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibM_minus_2;
      fibM_minus_1 -= fibM_minus_2;
      fibM_minus_2 = fibM - fibM_minus_1;
    } else {
      return i; 
    }
  }

  // Handle remaining element, possible match
  if (fibM_minus_1 && arr[offset + 1] === target) {
    return offset + 1; 
  }

  return -1; // Target not found
}

export { linearSearch, binarySearch, jumpSearch, interpolationSearch, ternarySearch, fibonacciSearch };
