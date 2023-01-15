// bulider design pattern 

// it's solver compelexity of object(instnace) 

// example: it can ignore any fields inside the instance

/*
class User {
    constructor(name, age, address, phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
}

*/

class User {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

//console.log(user)


// note: in regular situation you must fill name, age and address so you can fill phone number 

// with buildr design pattern you can fill anyone and ignore the others wiht Bilder Class

class UserBuilder {
    // let's assume the required fields is name and phone / and age, address are optional

    constructor(name, phone) {
        this.user = new User(name, phone);
    }

    age(age) {
        this.user.age = age;
        return this; 
    }

    address(address) {
        this.user.address = address;
        return this;
    }

    // to make the User class the responsible for this process (not the UserBuilder class) ***
    build() {
        return this.user
    }

}
                                // must         // optional
const userBuild = new UserBuilder('ali', 23423).age(22).address('egypt')

console.log(userBuild)





// Another way with JS only ***

class User2 {
    constructor(name, phone, {address, age} = {}) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.age = age;
    }
}

const userBuilder2 = new User2('mohamed', 552, {age: 23});

//console.log(userBuilder2)

// the empty field will be set to undefined || in the first example it will not be exist