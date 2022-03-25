export default function add(a: number, b: number) {
    const c = a + b;
    const d = c + c;
    const per = new Person('ycl')
    per.say()
    console.log(per);
}

class Person {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    say() {
        console.log(this.name)
    }
}
