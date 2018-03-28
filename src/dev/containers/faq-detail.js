import React, {Component} from 'react';
import {connect} from 'react-redux';

class FaqDetail extends Component {
	
	render() {
		if(!this.props.activeFaq){
			return (<h4>Select a faq ...</h4>)
		}
		return (
			<div>
				<img src={this.props.activeFaq.thumbnail}/>
				<h2> {this.props.activeFaq.title} </h2>
				<p> {this.props.activeFaq.answer} </p>
				<h4> Like : {this.props.activeFaq.like} </h4>
				<h4> Dislike : {this.props.activeFaq.dislike} </h4>
			</div>
		);
	}
}

// reducer
function mapStateToProps (state) {
	return {
		activeFaq: state.activeFaq
	};	
}


export default connect(mapStateToProps)(FaqDetail);


