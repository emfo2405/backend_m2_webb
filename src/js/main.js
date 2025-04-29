async function addExperience() {

    let companyName = document.getElementById("companyname");
    let jobTitle = document.getElementById("jobtitle");
    let location = document.getElementById("location");
    let startDate = document.getElementById("startdate");
    let endDate = document.getElementById("enddate");
    let description = document.getElementById("description");

    let experience = {
        companyname: companyName.value,
        jobtitle: jobTitle.value,
        location: location.value,
        startdate: startDate.value,
        enddate: endDate.value,
        description: description.value
    }

    let response = await fetch('http://localhost:3000/api/experience', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(experience)
    });

    let data = await response.json();
    console.log(data);
}

let submitButton = document.getElementById("submit-button");

submitButton.onclick = addExperience();