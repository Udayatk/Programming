import java.util.*;
import java.sql.*;
import java.io.*;

public class prac4 {
    public static void main(String[] args) {
        try{
            Class.forName("com.jdbc.mysql.Driver");
            Connection con=DriverManager.getConnection("tils", "root", "roots");
            Statement stmt=con.createStatement();
            int ans=1
            do{
                System.out.println();
                System.out.println();
                System.out.println();
                System.out.println();
                System.out.println();
                Scanner sc=new Scanner(System.in);
                int ch=sc.nextInt();
                int eno,age;
                String name;
                String query="";
                switch(ch){
                    case 1:
                    System.out.println();
                }
            }
        }
    }
}
