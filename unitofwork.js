class Results {
    constructor() {
        this.results = [];
    }

    recordPoor(subject) {
        if (subject) {
            this.results.push({
                subject: subject,
                state: 'poor'
            });
        } else {
            throw new Error('no subject');
        }
        
    }

    recordAverage(subject) {
        if (subject) {
            this.results.push({
                subject: subject,
                state: "average"
            });
        } else {
            throw new Error('no subject passed');
        }
    }

    recordExcellent(subject) {
        if (subject) {
            this.results.push({
                subject: subject,
                state: "excellent"
            });
        } else {
            throw new Error('no subject');
        }
    }

    addToFile() {
        try {
            this.results.forEach(result => {
                switch (result.state) {
                    case "excellent":
                        console.log(this.results);
                        break;
                    case "average":
                        console.log(this.results);
                        break;
                    case "poor":
                        let index = this.results.indexOf(result);
                        this.results.splice(index, 1);
                        console.log(this.results);
                        break;
                    default:
                        break;
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
}


const marks = new Results();
marks.recordPoor('math');
marks.recordAverage();
marks.recordExcellent('geography');
marks.addToFile()

//74789262-0
