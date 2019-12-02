import React from 'react';

function UtilList(props) {

	const { utils, contams, zipcode, selectedUtil, selectedUtilUpdate } = props;

	const utilList = utils.map(util => {
		return (
			<tr key={util.link}>
				<td onClick={()=> selectedUtilUpdate(util)}> 
					{util.name}
				</td>
			</tr>
		);
	});

	const contamList = contams.map(contam => {
		return (
			<div>{contam}</div>
		);
	});

	return(
		<div>
			<h3>Utilities - {zipcode} :</h3>
			<table>
				<tbody>{utilList}</tbody>
			</table>
			<div class='row'>
			<div class="col-md-9">
			<h3>Contaminents - {selectedUtil.name} :</h3>
			</div>
			{/* </div>
			<div class="row"> */}
			<div class="col-md-9">
			<table>
				<tbody>{contamList}</tbody>
			</table>
			</div>
			</div>
		</div>

	);	
}

export default UtilList;
