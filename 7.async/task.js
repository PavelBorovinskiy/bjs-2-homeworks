class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;

	}

	addClock(time, callback, id) {
		if (!id) {
			throw new Error('Парметр id не передан')
		}

		if (this.alarmCollection.some(alarm => alarm.id === id)) {
			console.error('Будильник с таким id уже существует');
			return;
		}

		this.alarmCollection.push({ time: time, callback: callback, id: id })
	}

	removeClock(id) {
		let arrBefore = this.alarmCollection.length;
		let arrAfter = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
		return arrBefore > arrAfter

	}

	getCurrentFormattedTime() {

		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		})
	}

	start() {

		const checkClock = (alarm) => {
			if (alarm.time === this.getCurrentFormattedTime()) {
				alarm.callback();
			}
		};

		if (!this.timerId) {
			this.timerId = setInterval(() => {
				this.alarmCollection.forEach(alarm => checkClock(alarm));
			}, 1000);
		}
	}

	stop() {
		if (!this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		this.alarmCollection.forEach(alarm => {
			console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`);
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}	
