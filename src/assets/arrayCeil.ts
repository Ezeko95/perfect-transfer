export default function arrayCeil(arr: number[], number: number) {
  const sorted = arr.sort((a: number, b: number) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      return sorted[i];
    }
  }

  // If no index found return the last element
  return sorted[sorted.length - 1];
}
