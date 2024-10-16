/**
 * @file sum.cpp
 * @brief This file contains the implementation of a recursive sum function.
 */

#include <iostream>

/**
 * @brief Base case for the recursive sum function.
 * @return The sum of the arguments.
 */
int sum()
{
    return 0;
}

/**
 * @brief Recursive sum function that calculates the sum of the arguments.
 * @tparam T The type of the first argument.
 * @tparam Args The types of the rest of the arguments.
 * @param first The first argument.
 * @param rest The rest of the arguments.
 * @return The sum of the arguments.
 */
template <typename T, typename... Args>
T sum(T first, Args... rest)
{
    return first + sum(rest...);
}

/**
 * @brief The main function.
 * @return The exit status of the program.
 */
int main()
{
    int result = sum(1, 2, 3, 4, 5); // Example usage
    std::cout << "Sum: " << result << std::endl;
    return 0;
}