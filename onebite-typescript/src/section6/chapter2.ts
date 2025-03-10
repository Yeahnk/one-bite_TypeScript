/**
 * 접근제어자
 * access modifier
 * => public, protected, private
 */

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일을 합니다.");
    }

}

const employee = new Employee("이정환", 27, "developer");
employee.name = "권예은";
employee.age = 29;
employee.position = "designer";