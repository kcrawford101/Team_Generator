function generateEngineer(engineer) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <h6 class="card-subtitle mb-2"><i class="fas fa-user-astronaut"></i>  ${engineer.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/harviator" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>`
}

function generateIntern(intern) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-subtitle mb-2"><i class="fas fa-user"></i> ${intern.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div> `
}

function generatemanager(manager) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <h6 class="card-subtitle mb-2"><i class="fas fa-user-tie"></i>  ${manager.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>`
}


