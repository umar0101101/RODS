function App() { 
  return (
     <form onSubmit={Display}>
       <div>
         <label>Name:</label>
          <input id="name" />
           </div>
            <div>
               <label>Age:</label>
                <input id="age" type="number" min="0" max="100" required />
                 </div>
                  <div>
                     <button type="submit">Submit</button>
                      </div>
                       </form>
                        );
                       }
                        function Display() {
                           let name = document.querySelector<HTMLInputElement>("#name");
                            let age = document.querySelector<HTMLInputElement>("#age");
                            
                            if (name && age) {
                               alert("Name: " + name.value + " - Age: " + age.value);
                               } 
                              }
                              
                              export default App;