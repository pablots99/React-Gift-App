
import React, { Fragment, useState } from 'react'
import { AddCategory } from './AddCategory'
import { GiftGrid } from './GiftGrid'

export const GiftApp = () =>{
	const [cat,setCat] = useState(['Onepunch'])

	return (
	<>
		<h2>GIFT APP</h2>
		<hr></hr>
		<AddCategory setCat={setCat} cat={cat}></AddCategory>
		{
		cat && cat.length?
		cat.map( (category,i) =>(<GiftGrid key={category} category={category} setCat={setCat} categorys={cat}></GiftGrid>)):
		<h4 className="nothing animate__animated animate__fadeInLeft">Search something!</h4>
		}
	</>
	)
}
