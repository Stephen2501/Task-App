export default function dateFormat(date_string) {
	const date_portion = date_string.split("T")[0];
	const [year, month, day] = date_portion.split("-");
    const date = new Date(date_string);
	const dayOfWeek = date.getDay();

	const dayOfWeekString = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	][dayOfWeek];

	return `${dayOfWeekString} ${day}/${month}`;
}
