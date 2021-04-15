// TODO: Create a function that returns a license badge based on which `license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'None':
            return "";
            break;
        case 'MIT':
            return 'https://img.shields.io/badge/License-MIT-yellow.svg';
            break;
        case 'ISC':
            return 'https://img.shields.io/badge/License-ISC-blue.svg';
            break;
        case 'Apache 2.0':
            return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
            break;
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
        case 'None':
            return "";
            break;
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
            break;
        case 'ISC':
            return 'https://opensource.org/licenses/ISC';
            break;
        case 'Apache 2.0':
            return 'https://opensource.org/licenses/Apache-2.0';
            break;
    }

  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
      if (license === none) {
          return "";
      }
  }

function generateMD (data) {
    var license = data.license;
    var licenseToLowercase = data.license.toLowerCase();
    return `
# ${data.projectTitle}

## Project Description
${data.projectDesc}

[![License: ${data.license}](${renderLicenseBadge(license)})](${renderLicenseLink(licenseToLowercase)})


### **Table of Contents**
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)


### Contributing
${data.contributing}

### Testing
${data.testing}

### Questions
Github Username: *${data.githubUserName}*

For additional information, please reach out to me at ${data.email}
`
}

module.exports = generateMD;
