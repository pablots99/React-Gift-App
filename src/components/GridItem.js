import React, { useState } from 'react'

export const GridItem = ({id,title,url}) => {
	const [iscopy, setCopy] = useState(false)

	const copy = () => {
		navigator.clipboard.writeText(url)
		setCopy(true)
		setTimeout(function(){
			setCopy(false)
		}, 2000);
	}
	return (
		<div className="card animate__animated animate__fadeIn" onClick={ copy }>
			<div className="">
			<img  src={url} alt={title}></img>
			<p>{title}</p>
			{iscopy?<div className="copy animate__animated animate__fadeIn animate__fadeOut">Copied to clipboard</div>:<div><br></br></div>}
			</div>
		</div>
	)
}
