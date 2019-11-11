import React from 'react';

function Search(props){
	const refer = React.createRef();
	function filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		props.filterUpdate(refer.current.value);
	}
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		return (
			<form>
				<input ref = {refer} type="text" placeholder="Type to Filter" onChange={filterUpdate.bind(this)}/>
			</form>
		);
}
export default Search;
