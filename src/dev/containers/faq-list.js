import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFaq} from '../actions/index';

class FaqList extends Component {
	
	createListFaq() {
		return this.props.faqs.map(faq =>{
			return (
				<li 
					key={faq.id}
					onClick={() => this.props.selectFaq(faq)}
				> 
					{faq.title} 
				</li>
			)
		})
	}

	render() {
		return (
			<ul>
				{this.createListFaq()}
			</ul>
		);
	}
}


// reducer
function mapStateToProps (state) {
	return {
		faqs: state.faqs
	};	
}


// action
function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectFaq: selectFaq}, dispatch)	
}

export default connect(mapStateToProps, matchDispatchToProps)(FaqList);


