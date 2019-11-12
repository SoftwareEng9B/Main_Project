import React from 'react';

function UtilList(props) {

	const { data, utilUpdate, contams } = props;
	const refer = React.createRef();

	function utilsContam(){
		console.log(refer.current)
		utilUpdate(refer.current.value);	
	}

	const utilList = data.map(directory => {
		return (
			<input type="button" ref={refer} key={directory.link} value={directory.link} onClick={utilsContam}/>		
		);
	});

	const contamsList = contams.map(contam => {
		return (
			<div>{contam}</div>
		);
	});

	return(
		<div>
			<div>{utilList}</div>
			{contamsList}
		</div>

	);
	
}
export default UtilList;
