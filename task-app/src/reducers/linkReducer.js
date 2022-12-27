import SET_LINKS from "../actions/linkActions";

const links = (
	state = [
		{ id: 1, text: "Tasks", url: "/" },
		{ id: 2, text: "Settings", url: "/settings" },
        { id: 3, text: "Points", url: "/points"},
        { id: 4, text: "Completed", url: "/completed"},
	],
	action
) => {
	switch (action.type) {
		case SET_LINKS:
			return action.payload;
		default:
			return state;
	}
};

export default links;
