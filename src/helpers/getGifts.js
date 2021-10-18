


export const getGifts = async(category,setGift) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=VlMFM4v7EXgUngDYMAZs1HAKYN4OZAol&q=${category}&limit=10`
	const res = await fetch(url)
	const {data} = await res.json()
	const gift = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url
		}
	})
	return gift
}
