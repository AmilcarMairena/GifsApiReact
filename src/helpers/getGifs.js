

export const getGif = async(Category) =>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=3jL8tMd2bRZeauD997yq3eFpCFobbB63&q=${Category}&limit=5`
        const res = await fetch(url);
        const {data} = await res.json();
        
        const gift = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        
        return gift;
    }    