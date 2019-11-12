import React from 'react';

function UtilList(props) {

	const { data, utilUpdate, contams } = props;
	const refer = React.createRef();

	function utilsContam(){
		console.log(refer.current)
		// utilUpdate(refer.current.value);	
	}

	const utilList = data.map(directory => {
		return (
			// <input type="button" ref={refer} key={directory.link} value={directory.name} onClick={utilsContam}/>
			<tr key={directory.link}>
					{/* <td>{directory.name} </td> */}
					<td onClick={()=> utilUpdate(directory.link)}> 
						{directory.name}
					</td>
			</tr>
		);
	});

	const contamsList = contams.map(contam => {
		return (
			<div>{contam}</div>
		);
	});

	return(
		<div>
			<h3>Utilies</h3>
			<table>
				<tbody>{utilList}</tbody>
			</table>
			<h3>Contaminents at selected Utility</h3>
			{contamsList}
		</div>

	);
	
}
export default UtilList;
