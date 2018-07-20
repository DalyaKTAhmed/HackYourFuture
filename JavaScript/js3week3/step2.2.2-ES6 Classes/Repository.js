class Repository {
    constructor(data) {
        this._data = data;
    }
    showRepositoryInformation(selectedRepository) {
        const repositoriesInformationElement = document.querySelector('.repoinfo');

        while (repositoriesInformationElement.hasChildNodes()) {
            repositoriesInformationElement.removeChild(repositoriesInformationElement.firstChild);
        }

        const repoContainer = document.createElement('div');
        repoContainer.setAttribute('class', 'repoContainer');

        repoContainer.innerHTML = ` <strong>Repository :</strong><a href = "${selectedRepository.html_url}" > ${selectedRepository.name}</a><br>
                                <strong>Description :</strong><p>${selectedRepository.description}</p> <br>
                                <strong>Forks :</strong><p>${selectedRepository.forks}</p> <br>
                                <strong>Updated :</strong><p>${selectedRepository.updated_at}</p>`;
        repositoriesInformationElement.appendChild(repoContainer);

    }
}

