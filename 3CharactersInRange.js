function rangeCharecter(char1,char2){
    const first=char1.charCodeAt(0);
    const second=char2.charCodeAt(0);

    let result=[];
    for (let i = first+1; i < second; i++) {
        result.push(String.fromCharCode(i))
        
        
    }
    console.log(result.join(' '))
}
rangeCharecter('#',':')