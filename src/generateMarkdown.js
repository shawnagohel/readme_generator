// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## ${data.email}
  ## ${data.gitHubUser}
  ## ${data.description}
  ## ${data.confirm}
  ## ${data.confirmabout}
  ## ${data.input}
  ## ${data.usage}
  ## ${data.confirmcollaborative}
  ## ${data.contribute}
  ## ${data.test}
  ## ${data.license}
  
`;
}

module.exports = generateMarkdown;
