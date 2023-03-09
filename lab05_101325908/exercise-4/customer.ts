export class Customer 
{
    private firstname: string;
    private lastname: string;
    private age: number;

    constructor(firstname: string, lastname: string, age: number)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    public greeter() 
    {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }

    public GetAge() : number
    {
        return this.age;
    }
}