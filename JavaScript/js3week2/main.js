function main() {

    openModal()

    fetch('https://api.github.com/orgs/HackYourFuture/repos?per_page=100')

        .then((response) => response.json())

        .then(function (data) {

            repositories = data;

            showRepositoriesInSelect(repositories);

            closeModal()

        })

        .catch((error) => console.log("Repositories Request failed", error));

}



var repositories = [];

var contributors = [];



function showRepositoriesInSelect(repositories) {

    const repositoriesSelectElement = document.querySelector('#repositories');

    repositoriesSelectElement.setAttribute('onchange', "getSelectedRepository(this)", true);    //{passive: true} violation in console.log



    repositories.forEach(repository => {

        const optionElement = document.createElement('option');

        optionElement.setAttribute('value', repository.id);

        optionElement.innerText = repository.name;



        repositoriesSelectElement.appendChild(optionElement);

    });

}

function getSelectedRepository(repositoriesSelectElement) {

    const selectedRepository = repositories.filter(repository => {

        return repository.id == Number.parseInt(repositoriesSelectElement.value);

    })[0];

    console.log('Selected repository', selectedRepository);

    showAdditionalInfo(selectedRepository);

    getSelectedRepositoryContributors(selectedRepository);

    createListItemForEachContributor(contributors);

}

function showAdditionalInfo(selectedRepository) {

    const repoName = document.getElementById('repoName');

    repoName.innerHTML = `<strong>Repository :</strong><p>${selectedRepository.name}</p> <br>
                                <strong>Description :</strong><p>${selectedRepository.description}</p> <br>
                                <strong>Forks :</strong><p>${selectedRepository.forks}</p> <br>
                                <strong>Updated :</strong><p>${selectedRepository.updated_at}</p>`;

}



function getSelectedRepositoryContributors(selectedRepository) {

    openModal();

    var hyfContributorHttps = selectedRepository.contributors_url;



    fetch(hyfContributorHttps)

        .then((response) => response.json())

        .then(function (data) {

            contributors = data;

            createListItemForEachContributor(contributors)

            closeModal()

        })

        .catch((error) => console.log("Contributor Request Failed", error))

}



function createListItemForEachContributor(contributors) {

    const list = document.getElementById("contributorList")



    while (list.hasChildNodes()) {

        list.removeChild(list.firstChild);

    }



    contributors.forEach(contributor => {



        const createListItem = document.createElement("li");

        const contributorListItems = list.appendChild(createListItem);

        contributorListItems.innerHTML = `<img width="100px" src="${contributor.avatar_url}" alt="contributor image"> 

                                            <p class="name"> ${contributor.login}</p> 

                                            <span class="cont"> ${contributor.contributions}</span>`;

    })

}



function openModal() {

    document.getElementById('modal').style.display = 'block';

}



function closeModal() {

    document.getElementById('modal').style.display = 'none';

}

