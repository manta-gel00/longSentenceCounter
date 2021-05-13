function count() { 
    let text = document.getElementById("rawText").value;
    //number of words that defines a long sentence
    let breakPoint = document.getElementById("breakPoint").value;

    //let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est lorem, facilisis eu ipsum vel, semper hendrerit dolor. Quisque malesuada viverra viverra. Sed aliquet erat urna, et eleifend massa elementum at. Proin mollis enim sed elementum malesuada. Curabitur et congue lectus, et ultricies neque. Pellentesque accumsan sapien at imperdiet viverra. Donec faucibus sem massa, vel vehicula libero commodo ac. Proin porta arcu in tellus molestie, at venenatis ante pretium. Aenean congue ligula ac massa mattis, sit amet tincidunt leo imperdiet. Pellentesque consectetur eros id dolor hendrerit, sed scelerisque lectus ullamcorper. Pellentesque dictum scelerisque nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus tempor luctus elementum. Aenean facilisis ullamcorper maximus. Duis pellentesque at dui vel fringilla."
    
    // create array of sentences, separated by "."
    arrayOfSentences = text.split(".");

    // count the number of long sentences in the input text
    function longSentenceCounter() {
        let numberOfLongSentences = 0;
        let longSentencesSpec = "";
        // for every sentence, create an array of words separated by " "
        for (let sentence = 0; sentence < arrayOfSentences.length; sentence++) {
            arrayOfWords = arrayOfSentences[sentence].split(" ");
            // count number of words in each sentence. JavaScript adds an empty index at the end of the array, removing.
            arrayOfWordsLen = arrayOfWords.length -1
            // count words in each sentence and add to total number of long sentences
            if (arrayOfWordsLen > breakPoint) {
                numberOfLongSentences += 1;
                longSentencesSpec += `<strong>This sentence is ${arrayOfWordsLen} words long:</strong> ${arrayOfSentences[sentence]} <br><br>`;
            }
        }
        
        // output messages to HTML and console with results
        if (numberOfLongSentences === 0) {
            console.log(`The counter found 0 long sentences.`)
            document.getElementById("numberOfLongSentences").innerHTML = `0 sentences are longer than ${breakPoint} words.`;
        } else if (numberOfLongSentences === 1) {
            console.log(`The counter found 1 long sentence.`)
            document.getElementById("numberOfLongSentences").innerHTML = `1 sentence is longer than ${breakPoint} words.`;
            document.getElementById("longSentencesSpec").innerHTML = longSentencesSpec;
        } else if (numberOfLongSentences > 1) {
            console.log(`The counter found ${numberOfLongSentences} long sentences.`)
            document.getElementById("numberOfLongSentences").innerHTML = `${numberOfLongSentences} sentences are longer than ${breakPoint} words.`;
            document.getElementById("longSentencesSpec").innerHTML = longSentencesSpec;
        }
    }
    //clear list of found sentences if the user runs the counter multiple times
    document.getElementById("longSentencesSpec").innerHTML = ""

    longSentenceCounter();
}
