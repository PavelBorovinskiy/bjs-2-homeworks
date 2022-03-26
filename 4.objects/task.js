function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
	this.marks = mark;
	if (this.marks === undefined) {
		mark = []
	} else {

	}
}
