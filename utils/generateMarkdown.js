// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge( license ){
  switch( license ){
     case 'GNU GPL v3':
       return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`; break;
     case 'MIT':
       return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`; break;
     case 'ISC':
       return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'; break;
  }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch( license ){
    case 'GNU GPL v3':
      return `(https://www.gnu.org/licenses/gpl-3.0)`; break;
    case 'MIT':
      return `(https://opensource.org/licenses/MIT)`; break;
    case 'ISC':
      return '(https://opensource.org/licenses/ISC)'; break;
 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license)
  let link = renderLicenseLink(license)

  return `## License
  
The license that has been provided is an ${license} license follow the link below:
  
${badge}${link}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.chooseLicense)

  //return the title, github, email, description, and license
  return `# ${data.title}

## Github: 
${data.Github}

## Email:
${data.Email}

## Description
${data.Description}

${licenseSection}
`;
}

module.exports = generateMarkdown;
