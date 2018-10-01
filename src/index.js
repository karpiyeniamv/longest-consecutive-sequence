module.exports = function longestConsecutiveLength(array) {
    if (array.length ==0 )
    {
        return 0;
    }

    nums = [];
    for (var i=0; i<array.length;i++)
    {
        nums[i]=array[i];
    }
    nums = array.sort(function compareNumbers(a, b) {
        return a - b;
    })
    //console.log (nums);


    longestStreak = 1;
    currentStreak = 1;

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i-1]) {
            if (nums[i] == nums[i-1]+1) {
                currentStreak += 1;
            }
            else {
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 1;
            }
        }
    }

    return longestStreak;
}
