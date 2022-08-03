// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(confirmLicenses) {
  if(confirmLicenses === true){
   return `\n* [License](#license)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(confirmLicenses,license) {
 if(confirmLicenses === true){
  return ` 
  This project is licensed under the ${license} license.`
}
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  return `# ${data.projectName} 

  ## Table of Contents 
* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)
 ${renderLicenseLink(data.confirmLicenses)}

* [Contributing](#contributing)

* [Tests](#tests)b

* [Questions](#questions)

## [Installation]
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
${renderLicenseSection(data.confirmLicenses,data.license)}

## Tests
${data.tests}


  
  

`;
}

module.exports = generateMarkdown;
