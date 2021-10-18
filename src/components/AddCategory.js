import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCat,cat}) => {

	const [val, setVal] = useState('')

	const handleSubmit =(e) => {
		e.preventDefault()
		if(!(!val || cat.find(e  => e===val)))
			setCat([ val, ...cat ])
		setVal('')
	}

	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="search something example: 'Rick and morty'"  onChange={event => setVal(event.target.value)} value={val?? ''}></input>
				{/* <button  type="submit">ADD category</button> */}
			</form>
		</Fragment>
	)
}

AddCategory.prototypes = {
	setCat: PropTypes.func.isRequired,
	cat: PropTypes.func.isRequired
}

