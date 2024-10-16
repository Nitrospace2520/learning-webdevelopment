// import java.io.IOException;
// import java.io.PrintWriter;

public class Chapter_06_ExceptionHandling extends RuntimeException {
    // static ArithmeticException arithmeticException = new ArithmeticException();
    Chapter_06_ExceptionHandling(String message) {
        super(message);
    }

    public static void main(String[] args) /* throws IOException, InterruptedException */ {
        // throw arithmeticException;
        // System.out.println("Chapter_06_ExceptionHandling.main()");
        // throw new Chapter_06_ExceptionHandling();

        // PrintWriter printWriter = new PrintWriter("abc.txt");
        // printWriter.println("Let's get IT jobs.");
        // printWriter.close();
        // doSomething();

        // throw new Exception(); //? compile time error:=
        // throw new Chapter_06_ExceptionHandling("Jani na ki exception");
    }

    /*
     * public static void doSomething() throws InterruptedException {
     * doSomethingMore();
     * System.out.println("Chapter_06_ExceptionHandling.doSomething()");
     * }
     * 
     * public static void doSomethingMore() throws InterruptedException {
     * Thread.sleep(5000);
     * System.out.println("Chapter_06_ExceptionHandling.doSomethingMore()");
     * }
     */
}
