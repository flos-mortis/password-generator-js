let allChars = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H','h','I','i','J','j','K','k','L','l','M','m',
'N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z','1','2','3','4','5','6','7','8',
'9','0',',','!','?']
let firstOpt = ''
let secondOpt = ''
let thirdOpt = ''
let fourthOpt = ''
let passLength = 10

function passGen(){
    for (let i = 0; i < passLength; i++)
    {
        firstOpt += allChars[Math.floor(Math.random() * allChars.length) + 1]
        secondOpt += allChars[Math.floor(Math.random() * allChars.length) + 1]
        thirdOpt += allChars[Math.floor(Math.random() * allChars.length) + 1]
        fourthOpt += allChars[Math.floor(Math.random() * allChars.length) + 1]
    }
}
passGen()
console.log(firstOpt, secondOpt, thirdOpt, fourthOpt)