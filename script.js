// TODO: add code here

window.addEventListener ("load", function () {

    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {

        let person = response.json()

        person.then (function (json) {

            let peopleQueue = []

            for (person of json) {

                peopleQueue.push (person.hoursInSpace)

            }

            peopleQueue.sort().reverse();

            while (peopleQueue.length !== 0) {

                let activeTime = peopleQueue.shift();

                for (person of json) {

                    if (person.hoursInSpace === activeTime) {

                        const profile = document.getElementById ("container")
                        let skills = person.skills.join(", ");
                        if (person.active === true) {

                            profile.innerHTML += 
                            `<div class="astronaut">
                                <div class="bio">
                                    <h3>${person.firstName} ${person.lastName}</h3>
                                    <ul>
                                        <li>Hours in space: ${person.hoursInSpace}</li>
                                        <li style="color:green;">Active: ${person.active}</li>
                                        <li>Skills: ${skills}</li>
                                    </ul>
                                </div>
                                <img class="avatar" src="${person.picture}">
                            </div>`


                        }

                        // profile.innerHTML += "<div class =\"astronaut\">" + "<div class=\"bio\">" + "<h3>" + person.firstName + ' ' + person.lastName + "</h3>" + "<ul>" + "<li>Hours in space: " + person.hoursInSpace + "</li>" + "<li>Active: " + person.active + "</li>" + "<li>Skills: " + skills + "</li>" + "</ul>" + "</div>" + "<img class=\"avatar\" src=\"" + person.picture + "\">" + "</div>"

                        else {
                        profile.innerHTML += 
                        `<div class="astronaut">
                            <div class="bio">
                                <h3>${person.firstName} ${person.lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${person.hoursInSpace}</li>
                                    <li>Active: ${person.active}</li>
                                    <li>Skills: ${skills}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${person.picture}">
                        </div>`
                        }
                    }

               }

            }

        })



    })
    
});