function count() { 
 let text = document.getElementById("rawText").value;

    //let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a g'alley of type and scrambled it to make a type specimen book."

    // replace ' and "
    // let text = rawText.replace('"', ' ')
    // console.log(text)

    // create array from the text
    arrayOfSentences = text.split(".");

    // count the words in each sentence
    function longSentenceCounter() {
        let numberOfLongSentences = 0;
        let longSentencesSpec = "";
        //for every sentence, create an array of words (separated by " ")
        for (let sentence = 0; sentence < arrayOfSentences.length; sentence++) {
            arrayOfWords = arrayOfSentences[sentence].split(" ");
            // JavaScript adds an empty index at the end of the array. Removing.
            arrayOfWordsLen = arrayOfWords.length -1
            // count the words in each sentence and log the contents of any sentence that is longer than 26 words
            if (arrayOfWordsLen > 26) {
                //console.log('This sentence is ' + arrayOfWordsLen + ' words long: ' + arrayOfSentences[sentence])
                //document.getElementById("longSentences").innerHTML = 'This sentence is ' + arrayOfWordsLen + ' words long: ' + arrayOfSentences[sentence];
                // add to total of long sentences
                numberOfLongSentences += 1;
                longSentencesSpec += 'This sentence is ' + arrayOfWordsLen + ' words long: ' + arrayOfSentences[sentence] + '. \n';
            }
        }
        //console.log('The text contains ' + longSentences + ' sentence(s) with more than 26 words.')
        document.getElementById("numberOfLongSentences").value = 'The text contains ' + numberOfLongSentences + ' sentence(s) with more than 26 words.';
        document.getElementById("longSentencesSpec").value = longSentencesSpec;
    }
    longSentenceCounter();
}
