class student{
    readData(fname,roll,per)
    {
        this.fname=fname
        this.roll=roll
        this.per=per
    }
    display()
    {
        console.log(`Name:${this.fname}`)
        console.log(`Roll Number:${this.roll}`)
        console.log(`Percentage:${this.per}`)
    }
}
let s1=new student()
s1.readData('pavan','001',35)
s1.display()

let s2=new student()
s2.readData('kumar','002',95)
s2.display()