public class Chapter_02_OperatorsAndAssignments {
    public static void main(String[] args) throws Exception {
        // System.out.println("Chapter 02 - Operators and Assignments");
        // ! Increment and Decrement Operators:=
        // int y = ++4; // ERROR: unexpected type required: variable found: value
        // int y = ++(++x); // ERROR: unexpected type required: variable found: value
        // byte b = 3;
        // b = b - 1; ERROR: incompatible types: possible lossy conversion from int to
        // byte
        // int x = 3;
        // System.out.println(x / 0); // Exception in thread "main"
        // java.lang.ArithmeticException: / by zero
        // System.out.println(5 / 0.0); // Infinity
        // System.out.println(0.0 / 0.0); // NaN
        // System.out.println(5 % 0); // Exception in thread "main"
        // java.lang.ArithmeticException: / by zero
        // System.out.println(0 % 0); // Exception in thread "main"
        // java.lang.ArithmeticException: / by zero
        // System.out.println(-5 % 0.0); // NaN
        // System.out.println(Float.NaN == Float.NaN); // false

        // ! Relational Operators:=
        // System.out.println(5 == 5.0); // true
        // System.out.println(false > true);
        /*
         * Chapter_02_OperatorsAndAssignments.java:24: error: bad operand types for
         * binary operator '>'
         * first type: boolean
         * second type: boolean
         */
        // System.out.println("Nirmalya" > "Nirmalya"); // ERROR
        // System.out.println(10 < 20 < 30); // ERROR

        // ! Equality Operators:=
        // System.out.println(null instanceof Object); // false
        // System.out.println(~4.4); // ERROR: bad operand type double for unary
        // operator '~'
        // System.out.println(~'a'); // -98
        // 150 = 10010110 -> 01101001 = 105 -> -106
        // double d = 150.456;
        // byte b = (byte) d; // 130 = 10000010 -> 01111101 = 125 -> -126 (2's
        // complement)
        // System.out.println(b); // -106

        // ! Assignment Operators:=
        // int a = 10, b = 20, c = 30;
        // a = b += c;
        // System.out.println(a + " " + b + " " + c); // 50 50 30

        // ! Conditional Operators:=
        // byte x = 10, y = 20;
        // byte b = (10 > 20) ? 30 : 40;
        // byte b = (x > y) ? 30 : 40; // error: incompatible types: possible lossy
        // conversion from int to byte
        // System.out.println(b); // 40

        // ! Precedence of Operators:=
        // System.out.println(method(1) + method(2) * method(3) / method(4) * method(5)
        // + method(6));

        // ! new vs newInstance() Method:=
        // String s2 = String.newInstance("Nirmalya"); // ERROR: newInstance() method is
        // not available in String class (can't not find symbol)
        // Object o = Class.forName(args[0]).newInstance(); //
        // Chapter_02_OperatorsAndAssignments.java uses or
        // // overrides a deprecated API.
        // System.out.println(o.getClass().getName());
        // System.out.println(Class.forName(args[0]).isInstance(args[0])); //true
    }

    /*
     * private static int method(int arg) {
     * System.out.println("method: " + arg);
     * return arg;
     * }
     */
}