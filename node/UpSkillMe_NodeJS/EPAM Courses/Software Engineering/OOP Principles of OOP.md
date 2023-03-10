
Links:
- [SE101 L06 UML](../../00%20Uni/Semester%201/SE101%20Intro%20to%20Software%20Engineering/SE101%20L06%20UML.md)
- [OOP Relations of objects](OOP%20Relations%20of%20objects.md)

Tags: #sci/pro/dev #sci/pro/paradigm/OOP #notes/web 

Date: 2022-11-05
Time: 18:55:52
____

## Principles of OOP
Consider the main 4 principles of object-oriented programming – 4 main features that together form an object-oriented programming paradigm.

Understanding them is the key to writing good programming code that can be easily maintained and modified over time.


### Abstraction
**Abstraction** is a way of representing task elements from the real world as objects in a program.

Abstraction is always associated with the generalization of some information about the properties of objects, so the main thing is to separate meaningful information from insignificant in the context of the problem being solved. Moreover, there can be several levels of abstraction.

Example:
```java
public abstract class AbstractBuilding {
    private int year;
    private int floors_number;
    private String wall_material;
 
    public AbstractBuilding (int year, int floors_number, String wall_material) {
        this.year = year;
        this.floors_number = floors_number;
        this.wall_material = wall_material;
    }
    public int getFloors_number() {
        return floors_number;
    }
}
```
Simplification of the model (abstraction from unnecessary details) in relation to a real subject allows you to make it formal, so that during development, you can clearly identify all the dependencies and operations on them in the created software system.

### Encapsulation
**Encapsulation** means restricting access to data and the ability to change it. Encapsulation allows an object to define an interface with which to interact, hiding implementation details, and thus, leaving the freedom to change the internal structure.

The task of a programmer is to determine which attributes and methods will be available for public access, and which are the internal implementation of the object and should be inaccessible for changes.

### Inheritance
**Inheritance** allows you to create new classes based on the original class by adding special data fields and additional methods to the existing classes. At the same time, the properties and functionality of the parent class are borrowed by the new class and can be reused.

The original class is called a _superclass_ or a _parent_, new classes are called its _subclasses_ or _descendants_.

Example:
```java
public abstract class ResidentialBuilding extends AbstractBuilding {
 
   private int parking_floors;
 
   public ResidentialBuilding(int year, int floors_number, String wall_material, int parking_floors) {
      super(year, floors_number, wall_material);
      this. parking_floors = parking_floors;
   }
   
	@Override
	public int getFloors_number(){
      return (super.getFloors_number() + parking_floors);
   }
}
```

When creating a new subclass, you need to add quite a bit of new code, and we get a new class with new functionality.

### Polymorphism
**Polymorphism** is an OOP concept, which means that objects that belong to the same branch of the hierarchy and receive the same method can act in different ways.

Polymorphism is about the fact that it is possible to use descendant classes in the context that was intended for a parent class, that is, there is a guarantee of preserving the interface (the properties and functionality) of the parent class.

Polymorphism allows us to completely abstract in the client code from what kind of implementation class we are using by referring to it through the use of the interface defined in the parent class.

### Conclusion
With the right combination of polymorphism, encapsulation, and inheritance, a programmer can create a programming environment that writes scalable (extensible) programs. A well-designed class hierarchy will be the basis for reusable code.

