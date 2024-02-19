export class Course {
    constructor(name, yhp) {
        this.name = name;
        this.yhp = yhp
    }

    getCourseInfo() {
        console.log(`This course is called ${this.name} and contains ${this.yhp}`)
    }
}