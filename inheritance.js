//একটা ক্লাস কে এর একটা ক্লাস এর সাথে connect করতে হলে extends করে টার পরে constructor এর নিচে
// super(); এইটা দিলেই হবে। আমরা চাইলে classer মধ্যে function  ও লিখতে পারি । তবে এর জন্য 
//function name(params) { এই রকম ভাবে লেখার দরকার নেই শুধু getfullName(){
                                                     
}
    


class Parent {
    constructor(){
        this.fatherName = "Nurul Islam";
    }
}

class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + this.fatherName;
    }
}

const baby1 = new Child ("sumon");
const baby2 = new Child ("saidul");

console.log(baby1);