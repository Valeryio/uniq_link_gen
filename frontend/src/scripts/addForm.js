
const addForm = document.querySelector(".addForm");
let noteTitle = document.querySelector(".note-title");
let noteDesc = document.querySelector(".text-desc");


addForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // verification frontend

  let data = {
    title: noteTitle.value,
    desc: noteDesc.value
  };
  console.log(data);

  try {
    let response = await fetch("http://127.0.0.1:8080/notes", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    });

    if(response.status === 200) {
      console.log(" Request sent successfully!");
    }

    return response.json();

  } catch (err) {
    console.log("There is an error while sending the request : ", err);
  }
})