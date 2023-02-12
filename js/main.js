
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


               // Arrayda O'xshash elementlar

//    let nums = [4,5,6,7,5]

//    for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if(nums[i] == nums[j]){
//             console.log("nums[" + i + "]: " + nums[j] + " =  nums[" + j + "]" + nums[j])
//         }
//     }
//    }

//    console.log()


              // 2 ta arrayda o'xshash elementlar

//    let nums1 = [4,5,6,7,5]
//    let nums2 = [11,90,72,7]

//    for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//        if(nums1[i] == nums2[j]){
//         console.log(("nums1[" + i + "] :" + nums1[i] + " = nums2[" + j + "] :" + nums2[j]));
//        }
//     }
//    }


               // Arrayda o'xshashlarini olib tashlash

//    let nums =  [1,3,4,1,5,3]    
//    let arrSize = nums.length   

//    for (let i = 0; i < arrSize; i++) {
//     for (let j = i + 1; j < arrSize; j++) {
//         if(nums[i] == nums[j]) {
//             nums[j] = nums[arrSize - 1]
//             arrSize--
//         }   
//     }
//     console.log(nums,arrSize)
//     break
//    }



               // O'sish bo'yicha tartiblash

//    let nums = [2,90,4,22,1,5,11] 


//  1-usul:  console.log(nums.sort((a,b) => a - b))

//  2-usul:  for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if(nums[i] > nums[j]){
//             let temp = nums[i]
//             nums[i] = nums[j]
//             nums[j] = temp
//         }
//     }
// }

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i])
    
// }
  

             // Eng katta 2chi element

//    let nums = [1,2,6,4,7,5] 

//     nums.sort((a,b) => b - a)
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[1])
//         break
//     }


             // Array elementlar yig'indisi a ga tengmi?

    //    let a =[1,2,3,7,4] 
    //    let b =[1,2,3,7,4] 
    //    let temp = true

    //    for (let i = 0; i < a.length; i++) {
    //     if (a[i] != b[i]) {
    //         temp = false;
    //     }
    //     console.log(temp)
    //     break
    // }

