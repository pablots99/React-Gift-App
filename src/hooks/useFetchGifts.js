import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifts";


export const useFetchGifts = (category) => {
	useEffect(() => {
		getGifts(category).then(img => {setstate({data: img,loading: false})});

	}, [category])

	const [state, setstate] = useState({
		data: [],
		loading: true
	});
	return state;
}
