// let orderIceCreame = new Promise((resolve,reject) =>{
//     let shopOpen=false;
//     if (shopOpen){
//         resolve('Ice Cream Ready');
//     }
//     else{
//         reject('Ice Cream Over');
//     }
// });

// orderIceCreame
// .then((message) =>{
//     console.log(message);
// })
// .catch((error) =>{
//     console.log(error);
// });

















let orderIceCreame = new Promise((resolve,reject) =>{
    let shopOpen=true;
    if (shopOpen){
        resolve('Ice Cream Ready');
    }
    else{
        reject('Ice Cream Over');
    }
});

async function getorderedIceCreame(){
    try{
    let message = await orderIceCreame;
    console.log(message);
    }
    catch (error){
        console.log(error);
    }
}
getorderedIceCreame();