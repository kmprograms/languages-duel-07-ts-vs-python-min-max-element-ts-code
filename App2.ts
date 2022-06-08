/*
Wyznacz z kolekcji elementów reprezentujących osoby o konkretnym
imieniu oraz wieku osobę najstarszą oraz najmłodszą.
*/

class Person {
    constructor(private name: string, private age: number) {}

    static compare(person1: Person, person2: Person): number {
        return person1.age - person2.age;
    }

    static getYoungestOldest(people: Person[]):
        {youngest: Person, oldest: Person} {
        const {0: youngest, [people.length - 1]: oldest}
            = [... people].sort(Person.compare);
        return {youngest, oldest};
    }
}

const main = (): void => {
    const people: Person[] = [
        new Person('ADAM', 39),
        new Person('EWA', 21),
        new Person('IZA', 27)
    ]

    const {youngest, oldest} = Person.getYoungestOldest(people);
    console.log(youngest)
    console.log(oldest)

}

main();

