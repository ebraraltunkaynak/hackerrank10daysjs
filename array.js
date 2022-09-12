function getSecondLargest(nums) {
    
    nums=nums.sort()

    return nums[nums.indexOf(Math.max.apply(Math,nums))-1]
    // Complete the function
}