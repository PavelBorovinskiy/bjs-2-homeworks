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
		this.alarmCollection.filter(alarm => alarm.id === id);
		return delete this.alarmCollection.id;
	}
}	
