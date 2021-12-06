// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}
  https://github.com/${data.github}/${data.title}

  # Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contribution)
  - [Test](#tests)
  - [Questions](#questions)


  ## Installation
  ##### To utilize this application, you will need to install the following dependicies: ${data.installation}

  ## Usage 
  To use this application: ${data.usage}

  ## License
  This application has a license of ${data.license}

  ## Contributing
  Contributions: ${data.contibuting}

  ## Tests
  Instructions for testing is as follows: ${data.tests}

  ##Questions
  For questions concerning the application, open an issue or contact ${data.username} at ${data.email}
`;
};

module.exports = generateMarkdown;