
export const selectFaq = (faq) => {
	console.log("clicked", faq.title);
	return {
		type: "FAQ_SELECTED", // reducer-active-faq
		payload: faq
	}
};