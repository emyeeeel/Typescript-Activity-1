var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender || (Gender = {}));
var CivilStatus;
(function (CivilStatus) {
    CivilStatus["Single"] = "Single";
    CivilStatus["Married"] = "Married";
    CivilStatus["Divorced"] = "Divorced";
    CivilStatus["Widowed"] = "Widowed";
    CivilStatus["Separated"] = "Separated";
})(CivilStatus || (CivilStatus = {}));
var UserInfo = /** @class */ (function () {
    function UserInfo(firstname, middlename, lastname, phoneno, gender, birthdate, address, civilStatus) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.phoneno = phoneno;
        this.gender = gender;
        this.birthdate = birthdate;
        this.address = address;
        this.civilStatus = civilStatus;
    }

    UserInfo.prototype.getFirstname = function () {
        return this.firstname;
    };
    UserInfo.prototype.getMiddlename = function () {
        return this.middlename;
    };
    UserInfo.prototype.getLastname = function () {
        return this.lastname;
    };
    UserInfo.prototype.getPhoneno = function () {
        return this.phoneno;
    };
    UserInfo.prototype.getGender = function () {
        return this.gender;
    };
    UserInfo.prototype.getBirthdate = function () {
        return this.birthdate;
    };
    UserInfo.prototype.getAddress = function () {
        return this.address;
    };
    UserInfo.prototype.getCivilStatus = function () {
        return this.civilStatus;
    };

    UserInfo.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    UserInfo.prototype.setMiddlename = function (middlename) {
        this.middlename = middlename;
    };
    UserInfo.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    UserInfo.prototype.setPhoneno = function (phoneno) {
        this.phoneno = phoneno;
    };
    UserInfo.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    UserInfo.prototype.setBirthdate = function (birthdate) {
        this.birthdate = birthdate;
    };
    UserInfo.prototype.setAddress = function (address) {
        this.address = address;
    };
    UserInfo.prototype.setCivilStatus = function (civilStatus) {
        this.civilStatus = civilStatus;
    };
    return UserInfo;
}());

let userInfoModel = new UserInfo();
userInfoModel.setGender(Gender.Female);
console.log(userInfoModel.gender);