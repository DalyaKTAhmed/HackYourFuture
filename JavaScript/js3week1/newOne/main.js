function main() {
    const HyfRepositoriesHttps = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

    getInfo(HyfRepositoriesHttps, xhrCallback);
}

var repositories = [];
var contributors = [];

// Callback that handles response from server (when i get the data, parse it)
function xhrCallback(data) {
    repositories = JSON.parse(data);
    console.log('parsed repository data:', repositories);

    showRepositoriesInSelect(repositories);
}

function xhrCallbackContributors(data) {
    contributors = JSON.parse(data);
    console.log('parsed contributor data:', contributors);

    createListItemForEachContributor(contributors);
}

function showRepositoriesInSelect(repositories) {
    const repositoriesSelectElement = document.querySelector('#repositories');
    repositoriesSelectElement.setAttribute('onchange', "getSelectedRepository(this)");

    repositories.forEach(repository => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', repository.id);
        optionElement.innerText = repository.name;

        repositoriesSelectElement.appendChild(optionElement);
    });
}

function createListItemForEachContributor(contributors) {
    const list = document.getElementById("contributorList")

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    contributors.forEach(contributor => {

        const createListItem = document.createElement("li");
        const contributorListItems = list.appendChild(createListItem);
        contributorListItems.innerHTML = `<img src="${contributor.avatar_url}"> 
                                            <p> ${contributor.login}</p> 
                                            <span> ${contributor.contributions}</span>`;


    })
}

function getSelectedRepository(repositoriesSelectElement) {
    const selectedRepository = repositories.filter(repository => {
        return repository.id == Number.parseInt(repositoriesSelectElement.value);
    })[0];
    console.log('Selected repository', selectedRepository);

    showAdditionalInfo(selectedRepository);

    getSelectedRepositoryContributors(selectedRepository); //nested it here instead of onchange 

    createListItemForEachContributor(contributors);
}

function showAdditionalInfo(selectedRepository) {

    const repositoryInfoElement = document.querySelector('.repo');
    repositoryInfoElement.innerHTML = `<strong>Repository :</strong>${selectedRepository.name} <br>
                                <strong>Description :</strong>${selectedRepository.description} <br>
                                <strong>Forks :</strong>${selectedRepository.forks}<br>
                                <strong>Updated :</strong>${selectedRepository.updated_at}`;
}

function getSelectedRepositoryContributors(selectedRepository) {
    var hyfContributorHttps = selectedRepository.contributors_url;          //WHERE THE MAGIC HAPPENS!
    console.log(hyfContributorHttps);
    getInfo(hyfContributorHttps, xhrCallbackContributors)
}

// Function that makes an server request (API call)
function getInfo(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}