/**
 * Chapter_03_Flow_Control
 */
public class Chapter_03_Flow_Control {

    public static void main(String[] args) {
        // System.out.println("Chapter 03 - Flow Control");

        // ! Section Statements:=
        // ? If-Else Statement:=
        // if (10) { // ERROR: incompatible types: int cannot be converted to boolean
        // System.out.println("Hello");
        // }

        // if(true)
        // int x = 10; // error: variable declaration not allowed here

        // ? Switch Statement:=
        // * Example 1 - Syntax
        // switch (10) {
        // System.out.println("Hello"); // ERROR: case, default, or '}' expected
        // }
        // * Example 2 - Constant Expression
        // int x = 10;
        // switch (10) {
        // case 10:
        // System.out.println("Hello");
        // break;
        // case x: // error: constant expression required
        // System.out.println("Hi");
        // break;
        // default:
        // System.out.println("Default");
        // }
        // * Example 3 - run-time constant
        // switch (10 + 10) {
        // case 10:
        // System.out.println("10");
        // break;
        // case 10 + 10:
        // System.out.println("20"); // OUTPUT: 20
        // break;
        // case 10 + 10 + 10:
        // System.out.println("30");
        // break;
        // default:
        // break;
        // }
        // * Example 4 - Duplicate case values
        // switch (97) {
        // case 97:
        // System.out.println("97");
        // break;
        // case 'a': // error: duplicate case label
        // System.out.println("a");
        // break;
        // default:
        // break;
        // }
        // * Example 5 - range of values
        // byte b = 10;
        // switch (b) {
        // case 10:
        // System.out.println("10");
        // break;
        // case 128: // error: incompatible types: possible lossy conversion from int to
        // byte
        // System.out.println("128");
        // break;
        // default:
        // System.out.println("Default");
        // }

        // ! Iterative Statements:=
        // ? while loop:=
        // while (true)
        // int x = 10; // error: variable declaration not allowed here

        // ? do-while loop:=
        // do
        // while (true); // error: while expected

    }
}