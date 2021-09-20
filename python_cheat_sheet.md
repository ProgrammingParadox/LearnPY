# **Python Cheat Sheet**

### This is a cheat sheet for common Python functions

> NOTE:
> In: refers to commands written in the Python Console.
> Out: refers to what is returned when the function is run in the console.
> For example,
>
> ```python
> In: print("Hello World")
> Out: Hello World
> ```

> Input typed by the user is written in ALL CAPS

## **1. Functions**

1. **The `print()` function**

   `print(str) -> None`

   The `print()` function takes in one argument, `str`. This value (which can be a number or string) will be converted into a string and printed to the console. This function has no return value.

2) **The `input()` function**

   `input(prompt) -> str`

   The `input()` function accepts an optional argument, `prompt`. This argument shows a message to the user before they start typing their input.

   For example,

   ```python
   In: feeling = input('How are you feeling? > ')
   Out: How are you feeling? > GOOD

   # 'GOOD' is stored in the 'feeling' variable
   ```

3) **The `int()` function**

   `int(x) -> int`

   The `int()` function returns the integer form of `x`

   From a string:

   ```python
   In: int('4')
   Out: 4
   ```

   This will raise an error

   ```python
   In: int('forty')
   Out: ValueError: invalid literal for int() with base 10: 'forty'
   ```

   From a float:

   ```python
   In: int(2.0)
   Out: 2
   ```

   ```python
   In: int(3.6)
   Out: 3 # int() rounds down a float
   ```

4. **The `str()` function**

   `str(x) -> str`

   The `str` function converts an `int` or `float` to a string.

   Examples:

   ```python
   In: str(2)
   Out: '2'
   ```

   ```python
   In: str(3.5)
   Out: '3.5'
   ```






5. **The `range()` function**

    Note: The `range` function should only be used by itself in `for` loops. If you want to get a range of numbers, convert the output of `range` to a list first.

## **2. Calculations**

1. **Addition**

   Addition in Python is done as follows:

   ```python
   In: 2 + 3
   Out: 5
   ```

2. **Subtraction**

   Subtraction in Python is done as follows:

   ```python
   In: 7 - 2
   Out: 5
   ```

3. **Multiplication**

   Multiplication in Python is done as follows:

   ```python
   In: 7 * 3
   Out: 21
   ```

   ```python
   In: 2.5 * 3
   Out: 7.5
   ```

4. **Division**

   There are two types of division in Python:

   1. **Floating-point division**

      `a / b -> float`

      Floating-point division in Python is done as follows:

      ```python
      In: 34 / 2
      Out: 17.0
      ```

      ```python
      In: 34 / 4
      Out: 8.5
      ```

      Floating-point division always returns a float (a decimal number)

   2. **Integer division**

      `a // b -> int`

      Integer division in Python is done as follows:

      ```python
      In: 18 // 3
      Out: 6
      ```

      ```python
      In: 17 // 3 # 5 is the closest integer less than 17 / 3 (equal to 5.6667)
      Out: 5
      ```

      Integer division returns the closest integer less than or equal to the result of the division.

## **3. Data Types**

1. **The `int` data type**

   - The `int` data type stores an integer, such as `3`, `17`, or `42`.

2. **The `str` data type**

   - The `str` data type stores a string (or a piece of text).

   - Ways to write a string:
     - Single quotes: `'your text here'`
     - Double quotes: `"your text here"`
     - Multiline string:
       ```python
       '''
       Hello
       This is some text
       And some more text
       '''
       ```

3. The `float` data type

   - The `float` data type stores a number with a decimal point. For example, `3.0`, `42.567`, and `1.2323`.

4. The `bool` data type

   - The `bool` data type stores a Boolean value, which can be either `True` or `False`. Comparisons and some functions return Boolean values.

## **4. String Operations**

- String Concatenation

  Concatenate two strings with the `+` operator.

  ```python
  In: 'Hello ' + 'World'
  Out: 'Hello World'
  ```

  This will raise an error:

  ```python
  In: 'I have ' + 5 + ' apples'
  Out: TypeError: can only concatenate str (not "int") to str
  ```

  Use the `str()` function to convert numbers to strings before concatenating.

- f-strings

    F-strings in Pytohn can be used to insert variables into strings. 

    For example,

    ```python
    numApples = 3
    numBananas = 6

    print(f'I have {numApples} apples and {numBananas} bananas.')
    ```
    f-strings are mostly used for readability and to make writing code a little easier.

## **5. `if` Statements**

If statements in Python can be used to make decisions. They are written as follows:

```python
if condition1:
    expression1
elif condition2:
    expression2
else:
    expression3
```

`condition` is the condition to check for (such as `2 < 5`). If it's true, then `expression1` is executed (such as `print('Hello')`). However, if it is false and there is an `elif` statement, the program checks `condition2` and runs `expression2` if it is true. If none of the conditions are true, the program moves to the `else` block and runs `expression3`. Note that `elif` and `else` statements are optional, and you can have as many `elif` statements as you need.

> NOTE: If statements are checked in order, and only one of the expressions can run at a time. So in the above example, if `condition1` is true, the program will execute `expression1` and will immediately exit the `if` block **without** checking `condition2`.

## **6. Boolean operations**

1. `and`

   `a and b -> bool`

   The `and` operator is used to check if both a AND b are true. Here is the truth table.

   > A truth table lists the values for `a` and `b` and the expression, in this case `a and b`.

   |   `a`   |   `b`   | `a and b` |
   | :-----: | :-----: | :-------: |
   | `False` | `False` |  `False`  |
   | `True`  | `False` |  `False`  |
   | `False` | `True`  |  `False`  |
   | `True`  | `True`  |  `True`   |

2. `or`

   `a or b -> bool`

   The `or` operator returns `True` if either `a` OR `b` is true (or both)

   |   `a`   |   `b`   | `a or b` |
   | :-----: | :-----: | :------: |
   | `False` | `False` | `False`  |
   | `True`  | `False` |  `True`  |
   | `False` | `True`  |  `True`  |
   | `True`  | `True`  |  `True`  |

3. `not`

   `not a -> bool`

   The `not` operation simply returns the opposite of `a`.

   > Here there is only one parameter, which is why `b` isn't listed.

   |   `a`   | `not a` |
   | :-----: | :-----: |
   | `False` | `True`  |
   | `True`  | `False` |

4. Order of Operations

   In Python, chaining Boolean operators is allowed:

   ```python
   not a or b and not a and b
   ```

   However, to avoid confusing results, there is a specific order in which each of the operators are evaluated.

   The `not` operator is evaluated first, followed by the `and` operator, and finally the `or` operator.

   Let's walk through the execution of the expression above. Assume `a` is `True` and `b` is `False`.

   ```python
   not a or b and not a and b

   not True or False and not True and False

   False or False and False and False

   False and False

   False # result
   ```

## **7. Comparison Operators**

There are five types of comparison operators in Python. Each one is very similar to the ones you learn in math class, so I'll show the operator, such as `==` and an example of that operator being used.

1. Greater Than

   `a > b`

   ```python

   In: 234 > 444
   Out: False

   In: 234 > 123
   Out: True
   ```

2. Less Than

   `a < b`

   ```python
   In: 234 < 444
   Out: True

   In: 234 < 123
   Out: False
   ```

3. Greater Than Or Equal To

   `a >= b`

   ```python
   In: 234 >= 444
   Out: False

   In: 234 >= 234
   Out: True

   In: 356 >= 235
   Out: True
   ```

4. Less Than or Equal To

   `a <= b`

   ```python
   In: 234 <= 444
   Out: True

   In: 576 <= 576
   Out: True

   In: 234 <= 123
   Out: False
   ```

5. Equal

   `a == b`

   ```python
   In: 234 == 444
   Out: False

   In: 234 == 234
   Out: True
   ```

6. Not Equal

   `a != b`

   ```python
   In: 234 != 444
   Out: True

   In: 565 != 565
   Out: False
   ```


> Note: for `==` and `!=`, you don't have to use numbers. They can compare strings, lists, Boolean values, and dictionaries.

## **8. Loops**

1.  `while` Loops
    
    `while` loops in Python continuously execute their instruction while their condition is `True`.

    For example:
    ```python
    password = 'secretkey'
    userPassword = input('Enter the password: ')
    while password != userPassword:
        print('Access denied.')
        userPassword = input('Enter password: ')
    
    print('Access granted')
    ```
    This code will repeatedly ask the user for the password while it is incorrect. If the user enters the correct password, the `while` loop will exit and the program will print `Access granted`

    > **Warning**: If by mistake you type this into your code:
    > ```python
    > while True:
    >     print('Hello')
    > ```
    > This code will run **forever**. To stop it, press `ctrl+c` or `cmd+c`


2.  `for` Loops

    A `for` loop iterates a variable through a list. On each iteration of the loop, the variable stores an item of the list.

    For example:

    ```python
    for i in range(10):
        print(i)
    ```

    This code will print the numbers from 0 up to **but not including** 10. 

    `for` loops can also be used to iterate over lists:

    ```python
    animals = ['cat', 'dog', 'snake', 'bat', 'rat', 'turtle']

    for animal in animals:
        print('I have a ' + animal + '.')
    ```

## **9. Lists**

- Lists in Python can store multiple values in one variable.

- They are written as follows:

    `[value1, value2, value3, value4, ...]`

- Each `value` can be a string, integer, Boolean value, or even another list or dictionary.

- Lists can also be empty, and have no values.

- To access elements in a list, use list indexes:

    ```python  
    fruits = ['apple', 'banana', 'orange', 'cherry', 'grape', 'watermelon']

    print(fruits[0])
    print(fruits[2])
    print(fruits[4])
    print(fruits[-1])
    ```

    This code will print the following:

    ```
    apple
    orange
    grape
    watermelon
    ```

    List indexes start at 0 instead of 1, and they go up to (but not including) the length of the list.

    If you use negative numbers, the indexes start at `-1` and go from the end of the list. sSo `fruits[-1]` gets the last item, `fruits[-2]` gets the second-last item, and so on.

- You can also slice lists as follows:

    `list[start:stop]`

    ```python
    fruits = ['apple', 'banana', 'orange', 'cherry', 'grape', 'watermelon']
    print(fruits[2:5])
    print(fruits[:3])
    print(fruits[2:])

    ```

Slicing a list returns a range of values, from the index `start` up to **but not including** `stop`.

The first `print` call will print 
```
orange
cherry 
grape
```

If `start` is omitted, the slicing starts at 0. The second `print` call will print

```
apple
banana
orange
```

If `stop` is omitted, the slice goes to the end of the list. The final `print` call will print

```
orange
cherry
grape
watermelon
```



## **10. Custom Functions**

Along with the built-in functions that Python provides, you can also make your own. 

Syntax for defining a function:

```python
def func_name(param1, param2=default):
    # Write code here

```

`func_name` is the name of your function.

`param1` is a required argument to the function.

`param2` is an optional argument, and has a default value of `default` if it isn't set when the function is called.

You can use `param`s just like variables in the function.

After the function declaration, insert the code that the function will run, indented by 4 spaces.

Functions can be called, which takes the arguments that you have passed and runs the code inside.

An example function:

```python
def makeMeAPizza(crust, cheese, toppings=''):

    if toppings == '': # No toppings were selected
        toppings = 'no'

    print(f'You have picked a {crust} crust, with {cheese} cheese and {toppings} toppings.')

```
This function takes 2 required arguments, `crust` and `cheese`, and an optional argument, `toppings`. It checks whether `toppings` isn't blank, and prints all the values the function received. If there are no toppings, the function prints the crust and cheese, but no toppings.

Functions are useful because other people will have an easier time working on your code, since they can simply call a function without having to understand the code inside. 

Also, functions help shorten code because you don't have to write the same code over and over. This is best illustrated with the `print` function. The code for printing output to the screen is thousands of lines long. If the developers didn't create a function for that, you'd have to write ALL of those lines every time you wanted to print a message to the screen!


## **11. Modules**

Modules in Python allow you to do two things:
- Use code that other people have developed o accomplish things (such as making art or building a game)
- Makes large projects cleaner by separating each subset of functions into different files.

Modules are just files with many functions written inside them. For example:

```python

#doMath.py - a list of common mathematical functions.

def sumSquares(a, b):
    # Return a^2 + b^2
    return a*a + b*b

def reciprocal(a):
    # Return the reciprocal of a (1/a)
    return 1/a

def arraySum(arr):
    # Return the sum of the numbers in a list
    total = 0
    for i in arr:
        total += i
    
    return total
```

If you were to copy this code and run it, nothing  would happen. It's just a bunch of function declarations.

However, we can now use these functions in other programs. Here is an example:

```python
# useMath.py - use some of the functions in doMath.py

import doMath as dm # import the doMath module but import it as dm so we don't have to type 'doMath." every time, we can just use 'dm.'

a = int(input('Enter a number. '))

b = int(input('Enter another number.'))
print(f'The sum of the squares of your numbers ({a}^2 + {b}^2) is {dm.sumSquares(a, b)}')
```

This code imports `doMath` as `dm`, then uses a function in `doMath`, `sumSquare()`. It uses **dot notation** to access the function.

Dot notation looks like this:
`module.function()`
or
`module.variable`

where `module` is the module containing the function or variable, and `function()` or `variable` is the item you're trying to access.



## **12. Files**

Files are simply packets of 1s and 0s that store data on your computer. They can hold text, images, audio, games, programs, anything... as long as the data can be **encoded** into 1s and 0s.

The most common use of files in Python is to store data about something. Let's walk through an example.

Let's say I'm running a factory that makes cars. I have a file (`cars.txt`) that stores the ID of each car, the color, the name of the person who ordered the car, and its price. 

I have thousands of these orders in my file, and I want to know how much money I'll be making (the sum of all the prices on the order form).

I can't manually go through that huge file and find all the prices and add them up. That'd be too much work. Let's write a program that does it for me.

Here's a sample of my `cars.txt` file:

```
Car1 red uahgfecb 17000
Car2 red bphihedt 32000
Car3 yellow fsharwfd 1000
...

```

What should our program do?

1. Open the file
2. Get the contents of the file
3. Get the price of each car
4. Add it to a running total, going through each row in the file
5. Show the results.

Here is the complete code. (NOTE: Make sure you also understand what the code is doing.)

```python
f = open('cars.txt')
content = str(f.read()).split('\n')
totalProfit = 0
for c in content:
    c = c.split(' ')
    totalProfit += int(c[3])

print(f'At the end, you will be making ${totalProfit}')
```

Let's walk through the program line by line:
1. Open the `cars.txt` file in read mode (read-only, no writing allowed). You can also open it in write mode by specifying `'w'` as the second parameter. 
2. Get the content. This is a list of all the file's contents, line by line.
3. Start the `totalProfit` variable to `0`
4. Initialize a `for` loop to go through all the lines in the file.
5. Each line of the file has data separated by spaces, so we need to make it into a list. This list is stored in `c` and looks like this:
`[id, color, name, price]`.
6. Get the last item in `c` (the price) and add it to `totalProfit`. (REMEMBER: All the elements in `c` are strings, so you need to convert the price to an `int` before adding it to `totalProfit`.)
7. Blank line (skip)
8. Print `totalProfit`

This kind of code is widely used to automate boring tasks like these. Look at it! It's only 7 lines! Writing short programs like these are really useful when you have data files that are huge and you need to do a repetitive, boring task.


## **13. Error Handling with `try/except`**
