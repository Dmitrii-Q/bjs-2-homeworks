class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
  
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
  
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }
  
        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true
        });
    }
  
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
  
    getCurrentFormattedTime() {
        const now = new Date();
        return now.toTimeString().slice(0, 5);
    }
  
    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            }), 1000);
        }
    }
  
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
  
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }
  
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
  }
  
  // Пример использования
  const alarmClock = new AlarmClock();
  
  alarmClock.addClock("08:00", () => console.log("Пора вставать!"));
  alarmClock.addClock("08:01", () => console.log("Ещё один звонок"));
  alarmClock.addClock("08:02", () => console.log("Ещё один звонок"));
  alarmClock.start();

  
