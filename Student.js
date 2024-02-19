export class Student {
    constructor(fullname) {
        this.fullname = fullname;
        this.courses = []
    }

    registerCourse() {
        this.courses.push(this.fullname)
    }

    listCourses() {
        console.log(`The students courses include: ${this.courses}`)
    }
}