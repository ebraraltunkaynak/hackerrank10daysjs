function getSecondLargest(nums) {
    nums=new Set(nums);
    nums=Array.from(nums);
    nums.sort();
    return nums[nums.length-2];
    // Complete the function
}
function comparator(a,b){
    return a-b;
}