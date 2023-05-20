function addTwoDigits(n: any): number {
    // converting to string and splitting it into an array of substrings
    const nums = n.toString().split('');

    // parsing a string argument and returning an integer
    return parseInt(nums[0]) + parseInt(nums[1]);

    // return nums.reduce((a: string, b: string) => {
    //     return parseInt(a) + parseInt(b);
    // });
}

console.log(addTwoDigits(29));