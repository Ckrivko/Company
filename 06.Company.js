class Company {

    constructor() {

        this.departments = {};

    }

    addEmployee(username, salary, position, department) {

        if (!username || !salary || !position || !department) {

            throw new Error('Invalid input!');
        }


        if (salary < 0) {

            throw new Error('Invalid input!');

        }

        let currEmplo = {
            name: username,
            salary: salary,
            position: position,
        };

        if (this.departments[department] === undefined) {

            this.departments[department] = [];
        }



        this.departments[department].push(currEmplo);
        return `New employee is hired. Name: ${username}. Position: ${position}`;

    }

    bestDepartment() {


        let bestDepartment = '';
        let bestAverageSalary = 0;

        let allDeparts = Object.entries(this.departments);

        for (const el of allDeparts) {

            let currSalary = 0;

            for (let index = 0; index < el[1].length; index++) {

                currSalary += el[1][index].salary;

            }

            currSalary /= el[1].length;


            if (currSalary > bestAverageSalary) {

                bestAverageSalary = currSalary;
                bestDepartment = el[0];
            }
        }

        this.departments[bestDepartment].sort((a, b) => {

           return b.salary - a.salary || a.name.localeCompare(b.name);

        });

        let result = '';

        result += `Best Department is: ${bestDepartment}`;
        result += `\nAverage salary: ${bestAverageSalary.toFixed(2)}`;

        this.departments[bestDepartment].forEach(user => {
            result += `\n${user.name} ${user.salary} ${user.position}`;
        });
        return result;
    }




}

// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());






