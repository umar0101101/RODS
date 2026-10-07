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
      <h1>Hello, Everyone!</h1>
    </div>
  );
} 
export default App;