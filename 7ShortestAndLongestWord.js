function shortestAndLongestWord(input) {


    let cleanSentence = input.replace(/[^a-zA-Z\s]/g, '');
    let words = cleanSentence.split(' ').filter(word => word.length > 0);

    let longest = '';
    let shortword = words[0];

    for (let word of words) {
        
        if (word.length > longest.length) {
            longest = word;
        }
        
        if (word.length < shortword.length) {
            shortword = word;
        } 
    }
       console.log(`Longest -> ${longest}`);
       console.log(`Sortest -> ${shortword}`)
}
shortestAndLongestWord('Hello how are you today? I hope you are fine')