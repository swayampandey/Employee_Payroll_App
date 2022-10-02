const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.addEventListener('input', function () {
    salaryOutput.textContent = salary.value;
});


class EmployeePayrollData {

    constructor(...params) {
        this._name = params[0];
        this._profileImage = params[1];
        this._gender = params[2];
        this._department = params[3];
        this._salary = params[4];
        this._startDate = params[5];
        this._notes = params[6];
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        console.log("Name : " + name);
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw "Invalid name";
        }

    }

    get profileImage() {
        return this._profileImage;
    }
    set profileImage(profileImage) {
        this._profileImage = profileImage;
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    get notes() {
        return this._notes;
    }
    set notes(notes) {
        this._notes = notes;
    }

    toString() {
        return "Name : " + this.name + ", profile image : " + this.profileImage + ", gender : " + this.gender
            + ", Department : " + this.department + ", Salary : " + this.salary + " , start date : " + this.startDate
            + ", notes : " + this.notes;
    }

}

function save() {

    let empName = document.getElementById("name").value;

    let empProfileImage = document.querySelector('input[name="profile"]:checked').value;

    let empGender = document.querySelector('input[name="gender"]:checked').value;

    let empDepartment = document.querySelectorAll(".checkbox");
    let empDepartmentArr = [];
    for (let emp of empDepartment) {
        if (emp.checked) {
            empDepartmentArr.push(emp.value);
        }
    }
    //salary
    let empSalary = document.querySelector("#salary").value;

    //Start Date
    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let empStartDate = new Date(year, month, day);

    let empNotes = document.querySelector('#notes').value;

    try {

        let employeePayroll = new EmployeePayrollData(empName, empProfileImage, empGender, empDepartmentArr, empSalary, empStartDate, empNotes);

        console.log(employeePayroll.toString());
    } catch (e) {
        console.error(e);
    }

}