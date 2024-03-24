import java.io.*;
import java.util.*;

class Student {

  int rollno;
  String name;
  float fees;
  String branch;
  int year;
  int sem;
  int age;
  static String clg;

  public Student(
    int rollno,
    String name,
    float fees,
    String branch,
    int year,
    int sem,
    int age
  ) {
    this.rollno = rollno;
    this.name = name;
    this.fees = fees;
    this.branch = branch;
    this.year = year;
    this.sem = sem;
    this.age = age;
    clg = "PU";
  }

  public String toString() {
    return (
      rollno +
      " " +
      name +
      " " +
      fees +
      " " +
      branch +
      " " +
      year +
      " " +
      sem +
      " " +
      age +
      " " +
      clg
    );
  }
}

class nameComparator implements Comparator {

  public int compare(Object o1, Object o2) {
    Student s1 = (Student) o1;
    Student s2 = (Student) o2;
    return s1.name.compareTo(s2.name);
  }
}

class ageComparator implements Comparator {

  public int compare(Object o1, Object o2) {
    Student s1 = (Student) o1;
    Student s2 = (Student) o2;
    if (s1.age == s2.age) {
      return 0;
    } else if (s1.age > s2.age) {
      return 1;
    } else {
      return -1;
    }
  }
}

class feesComparator implements Comparator {

  public int compare(Object o1, Object o2) {
    Student s1 = (Student) o1;
    Student s2 = (Student) o2;
    if (s1.fees == s2.fees) {
      return 0;
    } else if (s1.fees > s2.fees) {
      return 1;
    } else {
      return -1;
    }
  }
}

class prac1{
  public static void main(String[] args) {
    ArrayList s = new ArrayList();
    s.add(new Student(1, "adi", 18700.00f, "cse", 3,6, 20));
    s.add(new Student(2, "vib", 18700.00f, "cse", 2,4, 19));
    System.out.println("Printing");
    System.out.println("");
    Collections.sort(s, new feesComparator());
    Iterator itr=s.iterator();
    while(itr.hasNext()){
      Student st=(Student) itr.next();
      System.out.println(st);
    }
  }
}
