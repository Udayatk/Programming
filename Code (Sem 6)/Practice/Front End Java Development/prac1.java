import java.util.*;
import java.io.*;

class Student {
    int rollno;
    String name;
    float fees;
    String branch;
    int year;
    int age;
    int sem;
    static String clg;

    public Student(int rollno,String name,float fees,String branch,int year,int age,int sem){
        this.rollno=rollno;
        this.name=name;
        this.fees=fees;
        this.branch=branch;
        this.year=year;
        this.age=age;
        this.sem=sem;
        clg="PU";
    }

    public String toString(){
        return rollno + " " + name + " " + fees + " " + branch + " " + year + sem + " " + age + " " + clg + "\n";
    }
}

class AgeComparator implements Comparator{
    public int compare(Object o1,Object o2){
        Student s1=(Student) o1;
        Student s2=(Student) o2;
        if (s1.age==s2.age){
            return 0;
        }else if (s1.age> s2.age){
            return 1;
        }else{
            return -1;
        }
    }
}

class FeesCompator implements Comparator{
    public int compare(Object o1,Object o2){
        Student s1=(Student) o1;
        Student s2=(Student) o2;
        if (s1.fees==s2.fees){
            return 0;
        }else if (s1.fees> s2.fees){
            return 1;
        }else{
            return -1;
        }
    }
}

class NameComparator implements Comparator{
    public int compare(Object o1,Object o2){
        Student s1=(Student) o1;
        Student s2=(Student) o2;
        return s1.name.compareTo(s2.name);
    }
}

public class prac1{
    public static void main(String[] args) {
        ArrayList s1=new ArrayList<>();
        s1.add(new Student(1,"adi",18000.00f,"cse",2004,6,18));
        System.out.println("Sorting by name");
        System.out.println();
        Collections.sort(s1,new NameComparator());
        Iterator itr = s1.iterator();
        while(itr.hasNext()){
            Student st = (Student) itr.next();
            System.out.println(st);
        }
    }
}
