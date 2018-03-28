import React from 'react';
import FaqList from './dev/containers/faq-list';
import FaqDetail from './dev/containers/faq-detail';



const App = () => (
	<div>
		<h2>FAQ List : </h2>
		<FaqList/>
		<hr/>
		<h2>Question Details : </h2>
		<FaqDetail/>
	</div>
);

export default App;
