document.getElementById("countButton").onclick = function () {
   
   
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    document.getElementById("lettersDiv").innerHTML=""
    document.getElementById("wordsDiv").innerHTML=""
    
    const letterCounts = {};
    if (typedText === "" ){
        alert("Por favor digite algum texto.")
        document.getElementById("wordsDiv").innerHTML.style.dysplay=none
    }

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
             if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }


    var div1 = document.getElementById('lettersDiv')

    for (letters in letterCounts) {
        var lettersSpan = document.createElement('span')
        lettersSpan = document.createTextNode(letters + " : " + letterCounts[letters] + ' , ')
        div1.appendChild(lettersSpan)
    }

    words = typedText.split(/\s/);

    const countWords = {

    };


    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];




        if (countWords[currentWord] === undefined) {
            countWords[currentWord] = 1;
        } else {
            countWords[currentWord]++;
        }

    }
    var div2 = document.getElementById('wordsDiv')

    for (words in countWords) {
        var wordsSpan = document.createElement('span')
        wordsSpan= document.createTextNode(words + ": " + countWords[words] + ', ')
        div2.appendChild(wordsSpan)
            
    }


}



