// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


test1 = [1,2,4,0];

test2 = [5,3,0,2,4];

test3 = [0,4,6,7,2,8,9,1,3];


function missingNumber(nums) {
    // sort nums
    let swap;
    do {
        swap = false;
        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i] > nums[i + 1]) {
                swap = true;
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
            }
        }
    } while(swap == true)
    
    // find missing #
    for (let i = 0; i < nums.length; i ++) {
        if ((nums[i] + 1) !== nums[i + 1]) {
            return nums[i] + 1;
        }
    }

}

console.log(missingNumber(test1))
console.log(missingNumber(test2))
console.log(missingNumber(test3))