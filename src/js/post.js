onload = postExperience;

async function postExperience() {
    let cvList = document.getElementById("cv-list");

    let response = await fetch('http://localhost:3000/api/experience', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    let data = await response.json();
    console.log(data);

    data.rows.forEach(input => {
        let li = document.createElement("li");
        li.innerHTML = `<h3 id="post-h3"> ${input.companyname} -  ${input.jobtitle}</h3> <br>  ${input.location}, (${input.startdate.split("T")[0]} - ${input.enddate.split("T")[0]}) <br> ${input.description}`

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Radera";
        deleteButton.id = "delete-button";

        cvList.appendChild(li);
        cvList.appendChild(deleteButton);
    });
}