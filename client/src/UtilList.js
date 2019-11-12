import React from 'react';

function UtilList(props) {
	const { data } = props;
	const utilList = data.map(directory => {
		return (
			<button key={directory.link} >
				<td>{directory.name} </td>
			</button>
		
		);
	});

	return <tbody>{utilList}</tbody>;
	
}
export default UtilList;
