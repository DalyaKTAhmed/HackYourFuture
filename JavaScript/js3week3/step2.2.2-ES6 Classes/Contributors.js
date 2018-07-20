class Contributors {
    constructor(data) {
        this._data = data;
    }

    showContributorsInList(data) {

        const list = document.getElementById("contributorList")

        while (list.hasChildNodes()) {

            list.removeChild(list.firstChild);

        }
        // Renders new list. 
        contributors.forEach(contributor => {

            const contributorContainer = document.createElement('div');
            contributorContainer.setAttribute('class', 'contributorContainer');

            document.body.appendChild(contributorContainer);

            contributorContainer.innerHTML = `<img width="100px" src="${contributor.avatar_url}" alt="contributor image"> 

                                                <p class="name"> <a href="${contributor.contributors_url}" > ${contributor.login}<a/></p> 

                                                <span class="cont"> ${contributor.contributions}</span>`;

            list.appendChild(contributorContainer);


        })
    }
}

