export function typesong(data) {
    return  dispatch =>{
         return fetch("https://itunes.apple.com/search?term="+data)
    .then(result=> result.json())
    .then((data)=>{
       console.log(data,"data in action")
        dispatch(datafetchSuccess(data));
    })
   
    }
   
}


export const datafetchSuccess=(data)=>({
    type:"DATA_FETCH",
    payload:data
})

