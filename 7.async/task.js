class AlarmClock {

	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(timeStart, action) {
		if (!timeStart || !action) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.length !== 0) {
			this.alarmCollection.forEach(element => {
				if (element.time === timeStart) {
					console.warn('Уже присутствует звонок на это же время');
				}
			});
		}

		return this.alarmCollection.push({
			'callback': action,
			'time': timeStart,
			'canCall': true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((elem) => elem.time !== time);
		return this.alarmCollection;
	}

	getCurrentFormattedTime() {
		let currentDate = new Date();
		return currentDate.getHours() + ':' + currentDate.getMinutes();
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(element => {
				let timeNow = this.getCurrentFormattedTime;
				if (element.time === timeNow && element.canCall === true) {
					element.canCall = false;
					element.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(element => {
			element.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}