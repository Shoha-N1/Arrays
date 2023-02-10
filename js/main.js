
                      // Eng katta element

//    let nums = [12, 21, 36, 71, 24, 85, 12, 30, 25]
//    let max = nums[0]

//    for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max){
//          max = nums[i]
//     }
   
//    }

//    console.log(max)

                      // Eng kichik qiymat

//    let nums = [12, 21, 36, 71, 24, 85, 1, 30, 25]
//    let min = nums[0]

//    for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < min){
//          min = nums[i]
//     }
   
//    }

//    console.log(min)

 

                        // O'rtacha qiymat

//    let nums = [6, 25, 91, 23, 72, 9, 18, 6]
//    let sum = 0

//    for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
//    }

//    console.log(sum / nums.length)


                        // Arrayda n bormi?

//    let nums = [6, 25, 91, 23, 72, 9, 18, 6]
//    let n = 91
//    let found = false

//    for (let i = 0; i < nums.length; i++) {
//     if(nums[i] == n){
//         found = true
//     }
//    }

//    console.log(found)


              // n-chi index

//    let nums = [6, 25, 91, 23, 72, 9, 18, 6]
//    let n = 2
   

//    for (let i = 0; i < nums.length; i++) {
//     if(n < 0 || n >= nums.length){
//         console.log(0)
//     }else{
//         console.log(nums[n])
//     }
//    }


              // Array oxiriga son qo'shish

//    let nums = [6, 25, 91, 23, 72, 9, 18, 6]
//    let n = 7
//    let arrSize = [nums.length + 1]

   

//    for (let i = 0; i < nums.length; i++) {
//     arrSize[i] = nums[i]

//     arrSize[nums.length] = n
//    }

//    console.log(arrSize)
 

              // Array boshiga son qo'shish

//    let nums = [6, 25, 91, 23, 72, 9, 18, 6]
//    let n = 7
//    let mas = [nums.length + 1]
//    mas[0] = n

   

//    for (let i = 1; i < nums.length; i++) {
//     mas[i] = nums[i-1]
//    }

//    console.log(mas)


             // a index ga b ni qo'yish

//    let nums = [12, 21, 36, 71, 24, 85, 12, 30, 25]
//    let a = 1;
//    let b = 17;
//    let subIndex = 0
//    let mas = [nums.length + 1]

//    for (let i = 0; i < nums.length; i++) {
//     if( i == a){
//         mas[i] = b
//     }else{
//         mas[i] = nums[subIndex];
//        subIndex++;
//     }
//    }

//    console.log(mas)


             // n index ni olib tashlash

//    let nums = [4,5,6,7]
//    let n = 2;

//    let mas = [nums.length + 1]
//    let subIndex = 0

//    for (let i = 0; i < nums.length-1; i++) {
//     if( i == n){
//         subIndex++
//     }
//     mas[i] = nums[subIndex];
//     subIndex++;
//    }

//    console.log(mas)


               // n index ni olib tashlash

//    let nums = [4,5,6,7]
//    let mas = [nums.length]

//    for (let i = 0; i < nums.length; i++) {
//     mas[nums.length -1 -i] = nums[i]
//    }

//    console.log(mas)


               // Arrayda n nechi marta bor

//    let nums = [4,5,6,7,4]
//    let count = 0
//    let n = 4

//    for (let i = 0; i < nums.length; i++) {
//     if(nums[i] == n){
//         count++
//     }
//    }

//    console.log(count)


