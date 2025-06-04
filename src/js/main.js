
//Funktion för att lägga till ett inlägg i CV från formulär
async function addExperience() {

    //Hämta information från HTML-formulär
    let companyName = document.getElementById("companyname");
    let jobTitle = document.getElementById("jobtitle");
    let location = document.getElementById("location");
    let startDate = document.getElementById("startdate");
    let endDate = document.getElementById("enddate");
    let description = document.getElementById("description");

    //Hämtar värden inmatade i formuläret
    let experience = {
        companyname: companyName.value,
        jobtitle: jobTitle.value,
        location: location.value,
        startdate: startDate.value,
        enddate: endDate.value,
        description: description.value
    }

    //Kopplar till API och lägger till ny data i databas
    let response = await fetch('https://backend-m2.onrender.com/api/experience', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(experience)
    });

    let data = await response.json();
    console.log(data);
}

//Hämtar formulär-knapp för att lägga till information
let submitButton = document.getElementById("submit-button");

//Funktion för att lägga till i databasen körs när man klickar på knappen
submitButton.onclick = addExperience;





