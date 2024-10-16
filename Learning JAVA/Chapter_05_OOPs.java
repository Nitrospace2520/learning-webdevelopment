/* interface Inter {
    void doSomething();
} */

public class Chapter_05_OOPs /* implements Inter */ {
    /*
     * static Chapter_05_OOPs objChapter_05_OOPs = null;
     * 
     * private Chapter_05_OOPs() {
     * }
     * 
     * public static Chapter_05_OOPs getChapter05OOPs() {
     * if (objChapter_05_OOPs == null)
     * objChapter_05_OOPs = new Chapter_05_OOPs();
     * return objChapter_05_OOPs;
     * }
     */

    /*
     * static {
     * methodOne();
     * }
     * 
     * static void methodOne() {
     * System.out.println(val);
     * }
     * 
     * static int val = 10;
     */

    // ? Without writing main method print something on console:=
    /*
     * // $ Approach: 01
     * static {
     * System.out.println("Chapter_05_OOPs.enclosing_method()");
     * System.exit(0);
     * }
     */
    /*
     * // $ Approach: 02
     * static Chapter_05_OOPs obj = new Chapter_05_OOPs();
     * {
     * System.out.println("Chapter_05_OOPs.enclosing_method()");
     * System.exit(0);
     * }
     */
    /*
     * // $ Approach: 03
     * static Chapter_05_OOPs obj = new Chapter_05_OOPs();
     * Chapter_05_OOPs() {
     * System.out.println("Chapter_05_OOPs.enclosing_method()");
     * System.exit(0);
     * }
     */

    /*
     * // $ Approach: 04
     * static int val = methodSomething();
     * 
     * static int methodSomething() {
     * System.out.println("Chapter_05_OOPs.methodSomething()");
     * System.exit(0);
     * return 9;
     * }
     */

    public static void main(String[] args) {
        // Inter inter = new Chapter_05_OOPs();
        // inter.doSomething();

        // * Singleton Class
        // Runtime runtime1 = Runtime.getRuntime();
        // Runtime runtime2 = Runtime.getRuntime();
        // System.out.println(runtime1 == runtime2);

        // Chapter_05_OOPs object1 = Chapter_05_OOPs.getChapter05OOPs();
        // Chapter_05_OOPs object2 = Chapter_05_OOPs.getChapter05OOPs();
        // System.out.println(object1 == object2);
        // System.out.println(Chapter_05_OOPs.getChapter05OOPs().hashCode());
        // System.out.println(Chapter_05_OOPs.getChapter05OOPs().hashCode()); // same

        // * Static Methods:=

        // * Type Casting:=
        // ? A b = (C) d
        /*
         * $ Rule - 1: C and d must be of same type or either child-parent or
         * parent-child otherwise 'Inconvertible Type'
         */
        /*
         * $ Rule - 2: C and A must be of same type or C must be derived type of A
         * otherwise 'Incompatible Type'
         */
        /*
         * $ Rule - 3: The object Type of d and type of C must be same or d's object
         * type must be derived type of class/Interface C otherwise
         * RE:ClassCastException
         */
    }

    /*
     * public void doSomething() {
     * System.out.println("Chapter_05_OOPs.doSomething()");
     * }
     */
}

/*
 * class ChildClass extends Chapter_05_OOPs {
 * public ChildClass() {
 * 
 * }
 * }
 */