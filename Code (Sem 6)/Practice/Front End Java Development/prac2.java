import java.io.*;
import java.util.*;

class Student {

  int rno;
  String name;
  int age;
  Float fees;

  public Student(int rno, String name, int age, Float fees) {
    this.rno = rno;
    this.name = name;
    this.age = age;
    this.fees = fees;
  }

  public String toString() {
    return rno + " " + name + " " + age + " " + fees;
  }
}

public class prac2 {

  public static void main(String[] args) {
    List<Student> s = new ArrayList<Student>();
    s.add(new Student(1, "adi", 1, 18000.00f));
    System.out.println("Printin Shit");
    System.out.println();
    Collections.sort(s,(s1,s2)->{return s1.name.compareTo(s2.name);});
    for(Student i:s){
        System.out.println(i);
    }
  }
}
