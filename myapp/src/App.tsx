import { useState } from "react";
 import csvText from "./data.csv?raw";
  import Papa from "papaparse";
  
  function App() {
     const [selectedName, setSelectedName] = useState("Rob");
     
     let csvData: any[] = Papa.parse(csvText, {
       header: true,
        skipEmptyLines: true,
       }).data;
       
       let people: Person[] = [];
       
       for (let loop = 0; loop < csvData.length; loop++) {
         let row = csvData[loop];
          let person = new Person();
           person.name = row.name;
            person.age = Number(row.age);
            person.isTeacher = Boolean(Number(row.isTeacher));
             people.push(person);
             }
             
             function handleNameChange(event: React.ChangeEvent<HTMLSelectElement>) {
               setSelectedName(event.target.value);
               }
               
               return (
                 <div>
                   <div> 
                    <table border={1}>
                       <thead> 
                        <tr>
                           <th>Name</th>
                            <th>Age</th>
                             <th>Is Teacher</th>
                              </tr>
                               </thead>
                                <tbody>
                                   {people.map((person, loop) => (
                                     <tr key={loop}>
                                       <td>{person.name}</td>
                                       <td>{person.age}</td>
                                       <td>{person.isTeacher ? "Yes" : "No"}</td>
                                     </tr>
                                   ))}
                                </tbody>
                              </table>
                              </div> 
                              
                              <br /> 
                              <div>
                                 <label>People: </label>
                                  <select id="name" value={selectedName} onChange={handleNameChange}>
                                     {people.map((p) => (
                                       <option key={p.name} value={p.name}>
                                         {p.name}
                                          </option>
                                           ))}
                                            </select>
                                             </div>
                                             
                                              <br />
                                              
                                               <div>
                                                 <label>Selected Age: </label>
                                                  {people.find((p) => p.name === selectedName)?.age}
                                                   </div>
                                                    <div>
                                                       <label>Selected Is Teacher: </label> 
                                                       {people.find((p) => p.name === selectedName)?.isTeacher ? "Yes" : "No"} 
                                                       </div>
                                                        </div>
                                                         );
                                                         }
                                                         
                                                         class Person {
                                                           name!: string;
                                                            age!: number;
                                                             isTeacher!: boolean;
                                                             }
                                                             
                                                             export default App;