function App() {
   const name: string = "Amna"; 
   let age: number = 39; let isTeacher: boolean = true;
    let score: number = 75;
    
    let colours: string[] = ["red", "blue", "green"]; 
    
    let teacher = new Person();
     teacher.name = name;
      teacher.age = age;
       teacher.isTeacher = isTeacher;
       
       let people: Person[] = [ 
        { name: teacher.name, age: teacher.age, isTeacher: teacher.isTeacher },
         { name: "Jane", age: 28, isTeacher: false },
          { name: "Sam", age: 42, isTeacher: false },
         ];
         
         // 1. Simple if statement 
          if (isTeacher) {
           console.log("Teacher profile active");
           }
         
         // 2. if/else statement
          let statusMessage: string = "";
           if (score >= 60) {
          statusMessage = "Pass";
           } else {
           statusMessage = "Try again"; 
          }
         
         // 3. while loop 
          let count: number = 0;
          while (count < 1) {
           console.log("While loop executed"); count++; }
            // 4. for loop for (let i = 0; i < colours.length; i++) {
            //  console.log("Colour:", colours[i]);
            //  }
             // 5 & 6.5 & 6. Function with a parameter that returns a value 
              function calculateTotal(val1: number, val2: number): number {
               return val1 + val2;
              }
              let totalScore: number = calculateTotal(score, 10);
               // 7. try/catch block
                let resultMessage: string = "";
                try {
                 if (isNaN(score)) { 
                throw new Error("Score is not a number");
                }
                resultMessage = "Score is valid";
                } catch (error) {
                   resultMessage = "Error occurred"; 
                  } 
                  return resultMessage;
                 } 
                 class Person {
                   name!: string;
                    age!: number;
                     isTeacher!: boolean;
                     }
                      export default App