function updateTime() {
	const timeZones = {
		newYork: 'America/New_York',
		kigali: 'Africa/Kigali',
		nairobi: 'Africa/Nairobi',
		kampala: 'Africa/Kampala',
	};

	for (let [city, timeZone] of Object.entries(timeZones)) {
		const now = new Date().toLocaleString('en-US', {
			timeZone: timeZone,
			hour12: false,
		});
		const [date, time] = now.split(', ');

		const clockDiv = document.getElementById(city);
		clockDiv.querySelector('.time').textContent = time;
		clockDiv.querySelector('.date').textContent = date;

		const [hours] = time.split(':').map(Number);
		let statusText = '';
		let statusClass = '';

		if (hours >= 0 && hours < 8) {
			statusText = 'Out of Work';
			statusClass = 'Relax';
		} else if (hours >= 8 && hours < 18) {
			statusText = 'Work Time';
			statusClass = 'at-work';
		} else {
			statusText = 'Out of Work';
			statusClass = 'closed';
		}

		const statusDiv = clockDiv.querySelector('.status');
		statusDiv.textContent = statusText;
		statusDiv.className = `status ${statusClass}`;
	}
}

//function displayMessage() {
	//const messageDiv = document.getElementById('message');
	//messageDiv.innerHTML =
		//'Time to go green... <a href="https://centennialgen.com" target="_blank">Talk to Centennial</a>';
//}

// Update time every second
setInterval(updateTime, 1000);

// Display message every minute
setInterval(displayMessage, 60000);

// Initial call to display time and message immediately
updateTime();
//displayMessage();
