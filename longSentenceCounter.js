function count() { 
 let text = document.getElementById("rawText").value;

    //let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est lorem, facilisis eu ipsum vel, semper hendrerit dolor. Quisque malesuada viverra viverra. Sed aliquet erat urna, et eleifend massa elementum at. Proin mollis enim sed elementum malesuada. Curabitur et congue lectus, et ultricies neque. Pellentesque accumsan sapien at imperdiet viverra. Donec faucibus sem massa, vel vehicula libero commodo ac. Proin porta arcu in tellus molestie, at venenatis ante pretium. Aenean congue ligula ac massa mattis, sit amet tincidunt leo imperdiet. Pellentesque consectetur eros id dolor hendrerit, sed scelerisque lectus ullamcorper. Pellentesque dictum scelerisque nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus tempor luctus elementum. Aenean facilisis ullamcorper maximus. Duis pellentesque at dui vel fringilla."
    // create array of sentences, separated by "."
    arrayOfSentences = text.split(".");

    function longSentenceCounter() {
        let numberOfLongSentences = 0;
        let longSentencesSpec = "";
        // for every sentence, create an array of words separated by " "
        for (let sentence = 0; sentence < arrayOfSentences.length; sentence++) {
            arrayOfWords = arrayOfSentences[sentence].split(" ");
            // counting number of words in each sentence. JavaScript adds an empty index at the end of the array, removing.
            arrayOfWordsLen = arrayOfWords.length -1
            // count the words in each sentence and log the contents of any sentence that is longer than 26 words
            if (arrayOfWordsLen > 26) {
                // add to total of long sentences
                numberOfLongSentences += 1;
                longSentencesSpec += 'This sentence is ' + arrayOfWordsLen + ' words long: ' + arrayOfSentences[sentence] + '. \n';
            }
        }
        //console.log('The text contains ' + longSentences + ' sentence(s) with more than 26 words.')
        document.getElementById("numberOfLongSentences").innerHTML = 'The text contains ' + numberOfLongSentences + ' sentence(s) with more than 26 words.';
        document.getElementById("longSentencesSpec").innerHTML = longSentencesSpec;
    }
    longSentenceCounter();
}
