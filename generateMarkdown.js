// function to generate markdown for README
function generateMarkdown(data) {
  return `# Title
  ${data.Title} 

  ## Descripttion 
  ${data.Description}

  ## Installation
  ${data.Instillation}

  ## Usage
  ${data.Usage}

  ## Contribution
  ${data.Contribution}

  ## Test
  ${data.Test}

  ## License
  ${data.License}

  ## GitHub
  ${data.GitHub}

  ## Questions
  ${data.Questions}

`;
}

module.exports = generateMarkdown;
