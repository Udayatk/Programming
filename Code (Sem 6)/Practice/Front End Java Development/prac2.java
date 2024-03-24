import java.util.*;
import java.io.*;

class Student{
    int rno;
    String name;
    int age;
    float fees;

    public Student(int rno,String name,int age,float fees){
        this.rno=rno;
        this.name=name;
        this.age=age;
        this.fees=fees;
    }

    public String toString(){
        return rno+" "+name+" "+age+" "+fees;
    }
}

public class prac2 {
    public static void main(String[] args) {
        List<Student> s=new ArrayList<Student>();
        s.add(new Student(1, "adi", 20, 18000.00f));
        s.add(new Student(2, "vib", 19, 20000.00f));
        s.add(new Student(3, "aadii", 21, 22000.00f));
        System.out.println("Printin Shit below");
        System.out.println("");
        System.out.println("Printin based on name");
        System.out.println("");
        Collections.sort(s,(s1,s2)->{return s1.name.compareTo(s2.name);});
        s.forEach((l)->System.out.println(l));
        System.out.println("");
        System.out.println("Printin based on age");
        System.out.println("");
        Collections.sort(s,(s1,s2)->s1.age-s2.age);
        s.forEach((l)->System.out.println(l));
        System.out.println("");
        System.out.println("Printin based on fees");
        System.out.println("");
        Collections.sort(s,(s1,s2)->(int)s1.fees-(int)s2.fees);
        s.forEach((l)->System.out.println(l));
        System.out.println("");

    }
}
