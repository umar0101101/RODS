function App() {
   const name: string = "Amna";
   let age: number = 39; 
   let isTeacher: boolean = true;
    
   let teacher = new Person();
    
   teacher.name = name; 
     teacher.age = age; 
     teacher.isTeacher = isTeacher;
     
     let people: Person[] = [ 
        { name: teacher.name, age: teacher.age, isTeacher: teacher.isTeacher },
         { name: "Jane", age: 28, isTeacher: false },
          { name: "Sam", age: 42, isTeacher: false },
         ];
         
         return people[2].name;
         } 
         
         class Person { 
          name!: string; 
          age!: number; 
          isTeacher!: boolean;
        }
        
     export default App;