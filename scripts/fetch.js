let searchImages = async { API,value} => {

    try{
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`)
    
        let data=await res.json();

        return data
    }
    catch(err) {
        console.log("err",err);
    }
} ;

export { searchImages };