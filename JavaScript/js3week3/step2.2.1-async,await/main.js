function main() {
    const HyfRepositoriesHttps = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    var HyfContributorHttps = null;

    getRepositories(HyfRepositoriesHttps);

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

function showContributorsInList(contributors) {

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

function showRepoInfo(selectedRepository) {

    const repoName = document.getElementById('repoName');

    repoName.innerHTML = ` <strong>Repository :</strong><a href = "${selectedRepository.html_url}" > ${selectedRepository.name}</a><br>
                                <strong>Description :</strong><p>${selectedRepository.description}</p> <br>
                                <strong>Forks :</strong><p>${selectedRepository.forks}</p> <br>
                                <strong>Updated :</strong><p>${selectedRepository.updated_at}</p>`;

}
function getSelectedRepository(repositoriesSelectElement) {

    const selectedRepository = repositories.filter(repository => {

        return repository.id == Number.parseInt(repositoriesSelectElement.value);

    })[0];

    console.log('Selected repository', selectedRepository);

    showRepoInfo(selectedRepository);

    getSelectedRepositoryContributors(selectedRepository);

    showContributorsInList(contributors);

}

function getSelectedRepositoryContributors(selectedRepository) {
    HyfContributorHttps = selectedRepository.contributors_url;
    console.log(HyfContributorHttps);
    getContributors(HyfContributorHttps);

}




async function getRepositories(theUrl) {
    openModal()
    try {
        let response = await fetch(theUrl)
        let data = await response.json()
        repositories = data
        console.log("Success!", repositories);
        showRepositoriesInSelect(repositories);
        closeModal()


    }

    catch (error) {
        function renderError(error) {
            console.log("Repositories Request failed", error);
        }

    }


}


async function getContributors(theUrl) {
    openModal()
    try {
        let response = await fetch(theUrl)
        let data = await response.json()
        contributors = data
        console.log("Success!", contributors);
        closeModal();
        showContributorsInList(contributors);
    }

    catch (err) {
        function renderError(err) {
            console.log(err);
        }
    }

}




function openModal() {

    document.getElementById('modal').style.display = 'block';

}

function closeModal() {

    document.getElementById('modal').style.display = 'none';

}

