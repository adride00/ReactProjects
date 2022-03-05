import React, {useEffect, useState} from 'react';

export default function useFetch (url) {
	const [{data, status, error}, setData] = useState({
		data: null,
		status: false,
		error:null
	})
	useEffect(() => {

		fetch(url)
			.then(res => res.json())
			.then(response => {
				setData({
					data: response,
					status: true,
					error:null
				})
			})
			.catch(e => {
				setData({
					data: null,
					status: false,
					error: e
				})
			})


	}, [url])

	return {data, status, error}
}