function convertToTags() {
	const bulletList = document.getElementById('bulletList').value;

	// Remove bullet points, new lines, and convert to comma-separated format
	const reformattedTags = bulletList
		.replace(/^- /gm, '') // Remove bullet points
		.replace(/\n/g, ', ') // Replace new lines with commas
		.trim(); // Trim any extra spaces or commas

	// Display the result in the output field
	document.getElementById('tagsOutput').value = reformattedTags;
}

function copyTags() {
	const tagsOutput = document.getElementById('tagsOutput');
	tagsOutput.select(); // Select the text in the input field
	document.execCommand('copy'); // Copy the selected text
	alert('Tags copied to clipboard!'); // Notify the user
}
