class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  function App() {
     let isLoggedIn: boolean = true;
  const studentName: string = "Maya";
  let score: number = 92; 
  let colors: string[] = ["pink", "orange", "purple"];
  const person: Person = new Person("Alice", 30);
  let people: Person[] = [ 
    new Person("Bob", 25),
    new Person("Charlie", 28),
    new Person("David", 35)
  ];

  
  return (
    <div className="App">
      <p>Student: {studentName}</p>
      <p>Score: {score}</p>
      <p>Colors: {colors.join(", ")}</p>
      <p>Name: {person.name}, Age: {person.age}</p>
      <ul>
        {people.map((p, index) => (
          <li key={index}>
            Name: {p.name}, Age: {p.age}
          </li>
        ))}
      </ul>
    </div>
  );
} 
export default App;