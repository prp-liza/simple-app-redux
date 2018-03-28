// take all reducers and combine them to 1 object

import {combineReducers} from 'redux';
import FaqReducer from './reducer-faqs';
import ActiveFaqReducer from './reducer-active-faq';

const allReducers = combineReducers({
	faqs: FaqReducer,
	activeFaq: ActiveFaqReducer
});

export default allReducers;