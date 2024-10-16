class Chapter_01_Fundamental {
    static {
        System.out.println("Static Block");
    }

    {
        System.out.println("Instance Block");
    }

    public static void main(String[] args) {
        // *> Identifiers:= name of class, variables, enum, label, method etc.

        // *> reserved words: 53
        // $> where keywords: 50, and reserved string laterals: 3 (true, false, null)
        // $> keywords for datatypes (8):= byte, short, char, int, long, float, double,
        // boolean
        // $> keywords for flow-control (11):= if, else, switch, case, break, continue,
        // default, do, while, for, return,
        // $> keywords for modifiers (11) := public, static, private, protected, final,
        // abstract, strictfp, synchronized, volatile, native, transient
        // $> keywords for exception handling (6):= try, catch, finally, throw, throws,
        // assert
        // $> keywords for class-level (7):= class, enum, package, interface, extends,
        // implements, import
        // $> keywords for object-level (4):= new, instanceof, super, this
        // $> others keywords (3):= void, goto, const

        // *> Integer Data Types: (byte, short, int, long):=
        // $> byte := (range: -128 to +127)
        // byte b = 130; // error: incompatible types: possible lossy conversion from
        // int to byte
        // byte b = "Nir"; // error: incompatible types: String cannot be converted to
        // byte
        // byte b = -128;
        // System.out.println(b);
        // $> short := (range: -32768 to +32767)
        // short s = 32768; // error: incompatible types: possible lossy conversion from
        // int to short
        // $> int := (range: -2147483648 to +2147483647)
        // int i = 10.2; // error: incompatible types: possible lossy conversion from
        // double to int
        // $> long := (range: -2^63 to +2^63-1)

        // *> Floating Point Data Types: (float, double):=
        // $> float := (range: -3.4e38 to 3.4e38)
        // $> double := (range: -1.7e308 to 1.7e308)

        // *> Boolean Data Types:= (range: Not Applicable)
        // boolean b = false;
        // boolean b = "false"; //error: incompatible types: String cannot be converted
        // to boolean

        // *> Character Data Types := (range: 0 to 65535)
        // char ch = 65535;
        // char ch = 65536; //error: incompatible types: possible lossy conversion from
        // int to char
        // System.out.println(ch);

        // *> Literals:= Any assigned constant value
        // $> Integer Literals:=
        // ?> Binary Literals:= (range: 0 to 1)
        // int bin = 0b10;
        // ?> Octal Literals:= (range: 0 to 7)
        // int oct = 010;
        // ?> Decimal Literals:= (range: 0 to 9)
        // int dec = 10;
        // ?> Hexadecimal Literals:= (range: 0 to 9 and A to F)
        // int hex = 0X10;
        // System.out.println(bin + " -- " + oct + " -- " + dec + " -- " + hex);
        // $> Floating Point Literals:=
        // float f = 100.0; // error: incompatible types: possible lossy conversion from
        // double to float
        // float f = 100.0F;
        // double d = 100.0D;
        // double d = 0xBEER; // error: ';' expected
        // double d = 0xF.A; // error: malformed floating-point literal
        // double d = 0xFA;
        // float f = 10e2f; // o/p: 1000.0
        // System.out.println(f);
        // $> Boolean Literals:= (true, false);
        // boolean b = True; /* error: cannot find symbol // boolean b = True; // ^ //
        /// symbol: variable True // location: class Chapter_01_Fundamental */
        // boolean b = 1; // error: incompatible types: int cannot be converted to
        // boolean
        // boolean b = "true"; // error: incompatible types: String cannot be converted
        // to boolean
        // boolean b = true;
        // $> Character Literals:=
        // char c = 0xBAC;
        // char c = 0xBEEEEEEE; // error: incompatible types: possible lossy conversion
        // from int to char
        // char c = '\u0061'; // o/p: a
        // char c = '\i0061'; // error: illegal escape character, unclosed character
        // literal X
        // char c = \u0061; // error: cannot find symbol symbol: variable a;
        // System.out.println(c);

        // ! Arrays:=
        // NOTE: classname@hexadecimalstringrepresentationofhashcode.
        // int[] []arr1, []arr2;
        /*
         * error: <identifier> expected
         * int[] []arr1, []arr2;
         * ^
         * Chapter_01_Fundamental.java:74: error: ';' expected
         * int[] []arr1, []arr2;
         * ^
         * 2 errors
         */

        // int[] arr = new int[]; // error: array dimension missing

        // int[] arr = new int[0];
        // System.out.println(arr[10]); // Exception in thread "main"
        // java.lang.ArrayIndexOutOfBoundsException: Index 10 out of bounds for length 0

        // int[] arr = new int[-3]; // Exception in thread "main"
        // java.lang.NegativeArraySizeException: -3

        // int[][] arr2D = new int[][3]; // error: ']' expected

        // int[][] arr2D = new int[3][];
        // System.out.println(arr2D);
        // System.out.println(arr2D[0]); // o/p: null
        // System.out.println(arr2D[0][0]); // Exception in thread "main"
        // java.lang.NullPointerException: Cannot load from int array because
        // "<local1>[0]" is null

        // int[] arr;
        // arr = new int[3];
        // arr[0] = arr[1] = arr[2] = 10;
        // arr = {10, 10, 10}; // error: illegal start of expression

        // ? anonymous array:= `new int[]{10, 20, 30}`, `new int[][]{{1, 2, 3}, {4, 5}}`

        // ? Array element assignments:=
        // * Case 1: In the case of primitive array as array element any type is allowed
        // which can be promoted to declared type.
        // * Case 2: In the case of Object type arrays as array elements we can provide
        // either declared type objects or its child class objects.
        // * Case 3: In the case of interface type arrays as array elements we can
        // provide its implemented class objects.
        // * Case 4: In the case of Abstract class type arrays as array elements we can
        // provide its child class objects.

        // ? Array variable assignments:
        // * Case 1: I. Element level promotions are not applicable at array object
        // level. II. Ex : A char value can be promoted to int type but char array
        // cannot be promoted to int array.
        // note: In the case of object type arrays child type array can be assign to
        // parent type array variable.
        // * Case 2: Whenever we are assigning one array to another array internal
        // elements won't be copy just reference variables will be reassigned hence
        // sizes are not important but types must be matched.
        // * Case 3: Whenever we are assigning one array to another array dimensions
        // must be matched that is in the place of one dimensional array we should
        // provide the same type only otherwise we will get compile time error
        // Note: Whenever we are performing array assignments the types and dimensions
        // must be matched but sizes are not important.

        // ? Types of Variables:=
        // * Division 1 : Based on the type of value represented by a variable all
        // variables are divided into 2 types. They are: <1.> Primitive variables <2.>
        // Reference variables
        // * Division 2 : Based on the behaviour and position of declaration all
        // variables are divided into the following 3 types. <1.> Instance variables
        // <2.> Static variables <3.> Local variables

        String[] firstNames = { "Nirmalya", "Nir", "Atinus" };
        String[] lastNames = { "Dhara", "De" };
        varArgMethod(firstNames, lastNames);

    }

    public static void varArgMethod(String[]... args) {
        for (String[] strings : args) {
            for (String strings2 : strings) {
                System.out.println(strings2);
            }
        }
    }
}
