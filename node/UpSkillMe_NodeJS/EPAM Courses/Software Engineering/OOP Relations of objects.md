
Links:
Tags: #sci/pro/dev #sci/pro/paradigm/OOP #notes/web 

Date: 2022-11-05
Time: 19:12:45
____

Often, when we talk about OOP, and, in particular, about the relationship between classes, we talk about inheritance.
We would talk about:
- Association: {Composition, Aggregation},
- Inheritance.

## Inheritance
Inheritance is described by an "**Is - a**" relationship.
A cottage is a house, a garage can be a hangar, but a house will not be a hangar, and you cannot use inheritance here.
![Pasted image 20221105192155](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105192155.png)

## Association
**Association** is when one class includes another class as one of the fields. In other words, association means that objects of two classes can refer to one another and have some connection with each other.

It can be described as a “**Has-a**” relationship between classes.

![Pasted image 20221105192303](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221105192303.png)

In other words, an association is a relationship between classes whose objects have an *independent life cycle*, and there is no ownership between the objects.

#### Composition
**Composition** (has-a + whole-part + ownership):
the *life cycle of the child object coincides* with the life cycle of the parent object.

In other words, the whole explicitly controls the lifetime of its component part (the object (s) that make up or are contained by one object are also destroyed when that object is destroyed).

#### Aggregation
**Aggregation** (has-a + whole-part): the life cycle of the child object does not depend on the life cycle of the parent and can be used by other objects.

In other words, although the whole contains its component part, their lifetime is not connected (for example, the component part is passed through the parameters of a constructor).

#### Example
```java
import java.util.*;
 
class Wall
{
    public String material;
    public int high;
 
    public Wall(String material, int high) {
        this.material = material;
        this.high = high;
    }
 
    @Override
    public String toString() {
        return "material is '" + material + '\'' +
                ", high = " + high + " ft.";
    }
}
 
class Furniture
{
    public String name;
    public int cost;
 
    public Furniture(String name, int cost) {
        this.name = name;
        this.cost = cost;
    }
 
    @Override
    public String toString() {
        return "\nname = '" + name + '\'' +
                ", cost = $" + cost;
    }
}
 
class Apartment {
    public String street;
    public int apartmentNo;
    private Wall walls;
    private Furniture[] furniture;
 
    public Apartment(String street, int apartmentNo, String material, int high, Furniture[] furniture) {
        this.street = street;
        this.apartmentNo = apartmentNo;
        walls = new Wall (material,high);
        this.furniture = furniture;
    }
 
    @Override
    public String toString() {
        return "The address is" +
                " '" + street + " St' " +
                apartmentNo + ", walls " + walls +
                ", furniture=" + Arrays.toString(furniture);
    }
 
    public int getTotalFurnitureCost(Furniture[] furniture) {
        int totalAmount=0;
        for (Furniture furnit: furniture) {
            totalAmount+=furnit.cost;
        }
        return totalAmount;
    }
}
 
public class Housewarming {
    public static void main(String []args) {
        Furniture[] furniture = new Furniture[] {
                new Furniture("bed", 150),
                new Furniture("cupboard",250),
                new Furniture("table", 35),
                new Furniture("armchair", 80),
        };
        Apartment flat1 = new Apartment("Bronco", 3050,"brick", 23, furniture);
 
        System.out.println("Information about the first apartment:\n" + flat1);
        System.out.println("Total furniture cost is: $" + flat1.getTotalFurnitureCost(furniture));
    }
}
```

