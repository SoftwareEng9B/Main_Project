import React from 'react';

function UtilList(props) {
const refer = React.createRef();
	const { data, utilUpdate } = props;
	function utilsContam(){
		console.log(refer.current)
		utilUpdate(refer.current.key);	
	}
	const utilList = data.map(directory => {
		return (
			<div type="button" ref = {refer} key={directory.link} onClick={utilsContam}>
				<td>{directory.name} </td>
			</div>
		
		);
	});

	return <tbody>{utilList}</tbody>;
	
}
export default UtilList;
