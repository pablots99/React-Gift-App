import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GridItem } from './GridItem';

export const GiftGrid = ({category,setCat,categorys}) => {
	// const [gift, setGift] = useState([''])
	const {data, loading}  = useFetchGifts(category);
	const deleteCat = () => {
	let res = categorys.filter((cat) =>  cat !== category ) ?? ['asa']
	setCat(res)
	}
	return (
		<>
		<div className="animate__animated animate__fadeInDown">
			<h3>{category} <button onClick={deleteCat}>X</button></h3>

				{loading && "loading..."}
			<div className="cardGrid">
			{
			data.map((img)  => (
				<GridItem key={img.id?? ''} {...img} ></GridItem>
			))
			}
			</div>
		</div>
		</>
	)
}
