
let deleteBtn = document.querySelector(".delete-btn");


deleteBtn.addEventListener("click", async (event) => {
    // event.preventDefault();
  
    console.log("Clicked");
    try {
      let response = await fetch(`http://127.0.0.1:8080/notes/3`, {
        method: "DELETE",
        headers: {"Content-Type":"application/json"},
      });
  
      if(response.status === 200) {
        console.log(" Request has been deleted successfully!");
      }
  
      return response.json();
  
    } catch (err) {
      console.log("There is an error while sending the request : ", err);
    }
  })