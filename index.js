$(function(){
    let allChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
     "]",",","|",":",";","<",">",".","?","/"];
     
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
        let passLength = $("#length-input").val()

        if(passLength > 20 || passLength < 4)
        {
            alert("Please enter a valid length")
        }
        else {
            for (let i = 0; i < passLength; i++)
            {
                firstOpt += allChars[Math.floor(Math.random() * allChars.length)]
                secondOpt += allChars[Math.floor(Math.random() * allChars.length)]
                thirdOpt += allChars[Math.floor(Math.random() * allChars.length)]
                fourthOpt += allChars[Math.floor(Math.random() * allChars.length)]
            }
        }
    }
    $("#gen-button").click(function(){
        passShow()
    })
    
    var password = document.querySelectorAll(".password")

    password.forEach(el => {
        el.addEventListener('click',copyText)
    });

    function selectText(){
        var element = event.target
        var range;
        if (document.selection){
            range = document.body.createTextRange();
            range.moveToElementText(element);
        range.select();
        } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        }
    }
    
    function copyText() {
        selectText();
        alert('copied')
        document.execCommand("copy");
    }
    
});