function progresBar(num){

    let result= num/10;

    if(result==10){
        console.log('[' + '%'.repeat(result)  +']');
        console.log('Complate!')
    }
    else{
        console.log(`${num}% `+ '['+ '%'.repeat(result)+'.'.repeat(10-result)+']');
        console.log('Loading....')
    }

}
progresBar(70)