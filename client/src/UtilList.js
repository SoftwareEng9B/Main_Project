import React from 'react';

function UtilList(props) {
		
	//console.log('This is my directory file', this.props.data);
	const {data } = props;
	//set building list = to only select files that you want to look at
	const utilList = data.map(directory => {
		return (
			<tr>
				<td>{directory} </td>
			</tr>
		);
	});

	return <table>{utilList}</table>;
	
}
export default UtilList;
