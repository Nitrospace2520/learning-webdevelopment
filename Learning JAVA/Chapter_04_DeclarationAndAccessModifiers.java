
/**
 * Chapter_04_DeclarationAndAccessModifiers
 */

// package learningjava.chapter4;
// import java.sql.*;

class Test {
    protected void test() {
        System.out.println("Test");
    }
}

public class Chapter_04_DeclarationAndAccessModifiers extends Test {
    // final int i;
    // // final int i = 10; // final variable can be initialized at declaration
    // // {i = 10;} // final variable can be initialized at static block
    // Chapter_04_DeclarationAndAccessModifiers(int i) {
    // this.i = i; // final variable can be initialized before constructor completes
    // }
    // public void method() {
    // i = 10; // final variable can be initialized in method
    // }

    // final static int staticFinalInt;
    // final static int staticFinalInt = 10; // final static variable can be
    // initialized at declaration
    // static {
    // staticFinalInt = 10; // final static variable can be initialized at static
    // block
    // }

    // public int x = 10;
    // private int y = 20;

    public static void main(String[] args) {
        // System.out.println("Chapter 04 - Declaration and Access Modifiers");
        // System.out.println("===============================================");
        // System.out.println("1. Declaration and Access Modifiers");

        // Date date = new Date(); // error: reference to Date is ambiguous
        // both class java.sql.Date in java.sql and class java.util.Date in java.util
        // match

        // ? Modifiers:=
        // * Top Level Modifiers: (5) public, default, abstract, final, strictfp
        // * Inner Class Modifiers: (8) public, default, abstract, final, strictfp +
        // * private, protected, static

        // Test test = new Test();
        // test.test();
        // Chapter_04_DeclarationAndAccessModifiers chapter = new
        // Chapter_04_DeclarationAndAccessModifiers();
        // chapter.test();
        // Test test2 = new Chapter_04_DeclarationAndAccessModifiers();
        // test2.test();

        // Chapter_04_DeclarationAndAccessModifiers chapter = new
        // Chapter_04_DeclarationAndAccessModifiers(100);
        // System.out.println(chapter.i);
        // staticFinalInt = 10; // cannot assign a value to final variable
        // staticFinalInt

    }

    public void test(final int x, int y) {
        // x = 10; // error: final parameter x may not be assigned
        y = 20;
        System.out.println(x + " " + y);
    }
}
