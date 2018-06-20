Homework Week 1

Topics discussed this week:
• Structure for a basic SPA
• XMLHttpRequests
• API calls

    Here you find the readings you have to complete before the ninth lecture.

Step 1: Feedback

Deadline Monday

Please provide feedback on last week's homework from a fellow student as a GitHub issue.
Step 2: Single Page Application 💦

Deadline Thursday

This homework is more extensive and challenging than previous homework! Please read the instructions below carefully and follow them with great attention to detail. Start this homework as soon as you can and allow time for discussion and questions (slack!).
2.1 Introduction

You are going to write a Single Page Application (SPA) that uses the GitHub API.

This application should display information about the available HYF GitHub repositories. The functionalities we would like to see in your application are as follows:

    The user should be able to select a repository from a list of available repositories.
    The application should display high-level information about the selected repository and show a list of its contributors.
    When clicking on the name of the selected repository the GitHub page for the corresponding repository should be opened in a new browser tab.
    When clicking on a contributor, the GitHub page for the contributor should be opened in a new browser tab.

Figure 1 below shows an example of what your application could look like. Note that this is just an example. If you find it boring or unimaginative, please improve on it! On the other hand, a simpler version is OK too, so long as you implement the expected functionality.

UI Example

Figure 1. Example User Interface using Material Design principles.

A live version of this application can be found here: http://hyf-github.netlify.com/
2.2 The GitHub API
2.2.1 Get a list of HYF repositories

You can fetch a list of HYF repositories through this API endpoint (What is an API Endpoint?):

https://api.github.com/orgs/HackYourFuture/repos?per_page=100

If you open this URL in the browser (try it!) you will receive JSON data about the available HYF repositories. This is the data that you will need to work with in this assignment.

Note the query string ?per_page=100 in the above URL. If you don't specify this query string you will only get the first 30 repositories (the default per_page is 30). HackYourFuture has more than 30 repositories but less than 100.

The returned JSON data contains some basic information about each repository, such as name, full_name, description etc. There are also many properties that contain URLs that can be used to obtain detail information about certain aspects of the repository.
2.2.2 Get contributor information for a repository

The JSON data that is returned from the initial request to get repository information includes a property named contributors_url. Use the value of this property to fetch a list of contributors.
2.2.3 GitHub API documentation

You can find detailed information about the GitHub API by means of the link listed below. However, the documentation is very extensive and not easy to digest. For this homework it is not necessary to study the GitHub API documentation. We provide the link here for completeness.

    GitHub API documentation: https://developer.github.com/v3/

2.3 Preparation

You will be working on this same application during the next three weeks. For each week you will need to create a new Git branch, as listed in the Table 1 below.
Week 	Branch 	Assignment
1 	week1 	Create a basic application using callbacks to handle network requests.
2 	week2 	- Refactor the callbacks to promises.
- Make the UI responsive.
3 	week3 	- Refactor the application to use ES6 Classes and async/await.
- Make the app ARIA-compliant.

Table 1. Homework schedule

Instructions

    Fork the JavaScript3 repository (this repository) to your own GitHub account.

    Clone the fork to your laptop.

    Open the homework folder inside the cloned repository in VSCode.

    Create a new branch for the week 1 homework with the following command:

    git checkout -b week1

2.4 Code Overview

The files that make up the application are located in the src folder. It contains the following files:
Filename 	Description
App.js 	Not used in week 1 and 2.
Contributor.js 	Not used in week 1 and 2.
hyf.png 	Contains the HackYourFuture logo.
index.html 	The application's HTML file.
index.js 	A starter JavaScript file.
Repository.js 	Not used in week 1 and 2.
style.css 	A starter CSS file.
Util.js 	Not used in week 1 and 2.

In week 1, you should only modify index.js and style.css.

Do not modify any other files at this time!
2.4.1 A first examination

    Open index.html and examine its contents (but don't modify anything). Notice that the HTML body looks like this:

    <body>
      <div id="root"></div>
      <script src="./index.js"></script>
    </body>

    The body tag contains a single div to which you will need to dynamically append HTML elements through your JavaScript code in index.js.

    Open index.js. This file contains a starter set of code for you to expand. It contains the following three functions:
    Function 	Description
    fetchJSON 	Uses XMLHttpRequest to fetch JSON data from an API end point. This function uses an asynchronous callback.
    createAndAppend 	A utility function for easily creating and appending HTML elements.
    main 	Contains the start-up code for the application.

    index.js also contains a constant with the URL for the HYF repositories as listed in section 2.2.1:

    const HYF_REPOS_URL = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

    Open the index.html file in your browser. Notice that it produces the same JSON output that you saw previously when you opened the URL directly in the browser.

    Review the main() function in index.js and examine how this code renders the JSON output in the browser by means of a pre HTML element (for demonstration purposes).

2.5 Week 1 Assignment

The assignment is to produce an application similar to the one illustrated in Figure 1 above.

It should include the following components:

    An HTML select element from which the user can select a HYF repository. This select element must be populated with option elements, one for each HYF repository.
    A left-hand column that displays basic information about the selected repository.
    A right-hand column that displays a list of contributors to the repository.

Functional Requirements:

    The list of repositories in the select element should be sorted (case-insensitive) on repository name.
    At start-up your application should display information about the first repository as displayed in the select element.
    When the user changes the selection, the information in the web page should be refreshed for the newly selected repository.
    You should be able to click on the repository name of the selected repository to open a new browser tab with the GitHub page for that repository.
    You should be able to click on a contributor to open a new browser tab with the GitHub page for that contributor.
    You should render network errors to the DOM (see Figure 2 below for an example). Do not use console.log as regular users will not see the console output.
    Your UI should be responsive. Try it with Chrome Developer Tools in the browser, using a mobile phone format and a tablet format, portrait and landscape. If necessary, you can also do this work in week 2.

Error rendering

Figure 2. Rendering of network errors.

Code modifications:

index.js

    Add new functions and modify function main() as you see fit. It is not likely that you will need to modify fetchJSON() and createAndAppend().

style.css

    Add your own styling.

Hints:

    Add one option element per repository to the select element, where each option element has the array index of the repository as its value attribute and the name of the repository as its text content:

    <select>
      <option value="0">alumni</option>
      <option value="1">angular</option>
      <!-- etc -->
    </select>

    To sort the list repositories use .sort() and .localeCompare().

    Use CSS media queries and Flexbox to make the UI responsive.

    To force a 404 network error so that you can test the rendering of errors, change the URL to make an invalid GitHub request, e.g. append an x to orgs: orgsx.

2.5 Handing in your homework

    Have you removed all commented out code (should never be present in a PR)?
    Have you used const and let and avoided var?
    Do the variable, function and argument names you created follow the Naming Conventions?
    Is your code well-formatted (see Code Formatting)?
    Have you resolved all issues flagged by ESLint and the spell checker (no wavy red and green underlines in VSCode)?

If the answer is 'yes' to all preceding questions you are ready to follow these instructions:

    Push your week1 branch to GitHub:

    git push -u origin week1

    Create a pull request for your week1 branch.

BONUS : Code Kata Race

    Codewars
