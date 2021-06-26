// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != 'None') {
    return `![license](https://img.shields.io/badge/license-${license}-blue.png)`;
  } else {
    return '';
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license != 'None') {
    return `* [License](#license)`;
  } else {
    return '';
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'None') {
    return `## License
    This project is licensed under the ${license} license.
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ## Tests

  ## Questions
  ${data.questions}
  [GitHub Profile](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
