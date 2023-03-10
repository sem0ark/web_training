
Links:
[MA120 L02 Binary relations and real functions](../../00%20Uni/Semester%201/MA120%20Linear%20Algebra/MA120%20L02%20Binary%20relations%20and%20real%20functions.md)

Tags: #notes/web #sci/mat/general_algebra

Date: 2022-11-05
Time: 19:44:56
____

## Definition of a Function. Determining Whether a Relationship is a Function

A **relation** is a set of ordered pairs.

The **domain** of a relation is the set of the first components of each ordered pair. 

The **range** of a relation is the set of the second components of each ordered pair.

![Pasted image 20221105194909](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105194909.png)

A **function** is a relation that assigns each input value to exactly one output value. We say "the output is a function of the input."

All functions are relations, but not all relations are functions.

The **input** values make up the domain, and the **output** values make up the range.

#### Is the relation a function
- This *relation is a function* because each input corresponds to exactly one output.
- This *relation is not a function*, if one of the two inputs, corresponds to two outputs. This is prohibited for functions.

A **graph** of a function $f$ is a set of ordered pairs $(x, y)$ in the coordinate plane that satisfy the equation $y = f(x)$.

*Vertical line test*
A curve in the coordinate plane is a graph of a function if and only if no vertical line intersects the curve more than once.

*Horizontal line test*
A function is one-to-one if and only if no horizontal line intersects its graph more than once.

#### Evaluating and Solving Functions

**Function evaluation** is the process of determining the output value corresponding to the given input value.

**Function solving** is the process of determining the input values that produce the given output value.

#### Functions in Equation Form
Some functional relations of variables are represented as an equation:
Ex: $12f + 3g = 4$ or $x^2 + y^2 = 16$.

#### Functions in Tabular Form
Functions can be represented as tables. In this case, the table rows or columns display the corresponding input and output values. When a function is given in such a way, we can also evaluate and solve the function using a table.

#### Functions in Graphical Form
Evaluating a function using a graph also requires finding the corresponding output value for a given input value; however, in this case, we find the output value by looking at the graph.

#### Piecewise function

*Piecewise function* is a function in which more than one formula is used to define the output.

_Each formula has its own domain, and the domain of the function is the union of all these smaller domains._

## Composite Function
When the output of one function is used as the input of another one, the entire operation is called the composition of functions. For any input $x$ and functions $f$ and $g$ a composite function is:
$$(f \circ g)(x) = f(g(x))$$

#### Domain of a composite function
The domain of a composite function $f(g(x))$ is the set of those inputs $x$ in the domain of $g$ for which $g(x)$ is in the domain of $f$.

#### Decomposition of a Composite Function
Sometimes there are cases when it is necessary to decompose a complicated function, that is, to write it as a composition of two simpler functions.