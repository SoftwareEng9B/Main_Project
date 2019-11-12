import React from 'react';

function Search(props){
	const refer = React.createRef();
	function filterUpdate() {
		props.filterUpdate(refer.current.value);
	}
		return (
			<form>
				<input ref = {refer} type="text" placeholder="Type to Filter" onChange={filterUpdate.bind(this)}/>
			</form>
		);
}
export default Search;
