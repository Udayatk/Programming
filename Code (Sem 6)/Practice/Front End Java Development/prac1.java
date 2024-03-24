import java.util.*;
import java.io.*;

class Student{
  int rollno;
  String name;
  float fees;
  String branch;
  int year;
  int sem;
  int age;
  static String clg;

  public Student(int rollno,String name,float fees,String branch,int year,int sem,int age){
    this.age=age;
    this.name=name;
    this.fees=fees;
    this.branch=branch;
    this.year=year;
    this.sem=sem;
    this.age=age;
    clg="PU";
  }

  public String toString(){
    return rollno+" "+name+" "+fees+" "+branch+" "+year+" "+sem+" "+age+" "+clg;
  }
}

class ageComparator implements Comparator{
  public int compare(Object o1,Object o2){
    Student s1=(Student) o1;
    Student s2=(Student) o2;
    if(s1.age==s2.age){
      return 0;
    }else if(s1.age>s2.age){
      return 1;
    }else{
      return -1;
    }
  }
}

class feesComparator implements Comparator{
  public int compare(Object o1,Object o2){
    Student s1=(Student) o1;
    Student s2=(Student) o2;
    if(s1.fees==s2.fees){
      return 0;
    }else if(s1.fees>s2.fees){
      return 1;
    }else{
      return -1;
    }
  }
}

class nameComparator implements Comparator{
  public int compare(Object o1,Object o2){
    Student s1=(Student) o1;
    Student s2=(Student) o2;
    return s1.name.compareTo(s2.name);
  }
}
public class prac1 {
  public static void main(String[] args) {
    ArrayList s = new ArrayList();
    s.add(new Student(1, "adi", 18000.00f, "cse", 1, 2, 20));
    s.add(new Student(1, "vib", 20000.00f, "ist", 2, 4, 19));
    System.out.println("Printin shit below");
    System.out.println("");
    System.out.println("Sorting by age");
    Collections.sort(s,new ageComparator());
    Iterator itr=s.iterator();
    while(itr.hasNext()){
      Student st=(Student)itr.next();
      System.out.println(st);
    }
    System.out.println("");
    System.out.println("Sorting by name");
    Collections.sort(s,new nameComparator());
    itr=s.iterator();
    while(itr.hasNext()){
      Student st=(Student)itr.next();
      System.out.println(st);
    }
    System.out.println("");
    System.out.println("Sorting by fees");
    Collections.sort(s,new feesComparator());
    itr=s.iterator();
    while(itr.hasNext()){
      Student st=(Student)itr.next();
      System.out.println(st);
    }
  }
}