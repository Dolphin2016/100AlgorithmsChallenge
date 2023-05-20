function add(...param1: number[]): number {
    let total = 0;

    param1.forEach((num) => {
        total += num;
    });
    return total;
}

console.log(add(1, 2, 3, 4, 5, 6, 7));
console.log(add(3, 5));