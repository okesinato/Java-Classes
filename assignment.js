class Name {
	constructor(firstName, lastName, nickName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.nickName = nickName;
	}

	getFullName() {
		return '${this.firstName} ${this.lastName} ${this.nickName}';
}
}
const Name1 = new Name('Okesinachi', 'Chiebidolu', 'Nato');
console.log(Name1)


class Age {
	constructor(YoB, ThisYear){
		this.YoB = YoB
		this.ThisYear = ThisYear;
	}
	Agefind (){console.log(Age)}
}
let Agefind = (YoB, ThisYear) => {
	return(ThisYear - YoB);
}
console.log(Agefind(1995, 2019));



class Gender {
	constructor(Male, Female){
		this.Male = Male;
		this.Female = Female

	}
	getGender(){
		return '${this.Male}';

	}
}
const Gender1 = new Gender('Male');
var Gender2 = new Gender('Female');
console.log(Gender1);