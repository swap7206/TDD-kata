export function add(numbers: string): number {
    if (!numbers) return 0;
    const numArray = numbers.split(/,|\n/).map((num) => Number(num));
    return numArray.reduce((sum, num) => (sum + num), 0);
  }