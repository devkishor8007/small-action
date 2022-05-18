const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  console.log("hello world");
  const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
  const octokit = github.getOctokit(GITHUB_TOKEN);

  const { context = {} } = github;
  const { pull_request } = context.payload;

  await octokit.rest.issues.create({
    ...context.repo,
    issue_number: pull_request.number,
    body: "thank you for submitting a pull request!",
  });
}

run();
