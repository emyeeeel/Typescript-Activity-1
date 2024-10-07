enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

enum CivilStatus {
    Single = "Single",
    Married = "Married",
    Divorced = "Divorced",
    Widowed = "Widowed",
    Separated = "Separated"
}

class UserInfo {
    private firstname: string;
    private middlename: string;
    private lastname: string;
    private phoneno: string;
    private gender: Gender;
    private birthdate: Date;
    private address: string;
    private civilStatus: CivilStatus;

    constructor(
        firstname: string,
        middlename: string,
        lastname: string,
        phoneno: string,
        gender: Gender,
        birthdate: Date,
        address: string,
        civilStatus: CivilStatus
    ) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.phoneno = phoneno;
        this.gender = gender;
        this.birthdate = birthdate;
        this.address = address;
        this.civilStatus = civilStatus;
    }


    public getFirstname(): string {
        return this.firstname;
    }

    public getMiddlename(): string {
        return this.middlename;
    }

    public getLastname(): string {
        return this.lastname;
    }

    public getPhoneno(): string {
        return this.phoneno;
    }

    public getGender(): Gender {
        return this.gender;
    }

    public getBirthdate(): Date {
        return this.birthdate;
    }

    public getAddress(): string {
        return this.address;
    }

    public getCivilStatus(): CivilStatus {
        return this.civilStatus;
    }

    public setFirstname(firstname: string): void {
        this.firstname = firstname;
    }

    public setMiddlename(middlename: string): void {
        this.middlename = middlename;
    }

    public setLastname(lastname: string): void {
        this.lastname = lastname;
    }

    public setPhoneno(phoneno: string): void {
        this.phoneno = phoneno;
    }

    public setGender(gender: Gender): void {
        this.gender = gender;
    }

    public setBirthdate(birthdate: Date): void {
        this.birthdate = birthdate;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public setCivilStatus(civilStatus: CivilStatus): void {
        this.civilStatus = civilStatus;
    }
}
export{};