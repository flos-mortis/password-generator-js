$(function(){
    let allChars = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H','h','I','i','J','j','K','k','L','l','M','m',
    'N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z','1','2','3','4','5','6','7','8',
    '9','0',',','!','?', '-']
    let firstOpt = ''
    let secondOpt = ''
    let thirdOpt = ''
    let fourthOpt = ''
    
    function passShow(){
        passGen()

        $("#first-option").text(firstOpt)
        $("#second-option").text(secondOpt)
        $("#third-option").text(thirdOpt)
        $("#fourth-option").text(fourthOpt)

        firstOpt = ''
        secondOpt = ''
        thirdOpt = ''
        fourthOpt = ''
    }
    function passGen(){
        for (let i = 0; i < $("#length-input").val(); i++)
        {
            firstOpt += allChars[Math.floor(Math.random() * allChars.length)]
            secondOpt += allChars[Math.floor(Math.random() * allChars.length)]
            thirdOpt += allChars[Math.floor(Math.random() * allChars.length)]
            fourthOpt += allChars[Math.floor(Math.random() * allChars.length)]
        }
    }
    $("#gen-button").click(function(){
        passShow()
    })
});