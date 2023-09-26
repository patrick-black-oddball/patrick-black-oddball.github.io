import { Octokit } from "https://esm.sh/@octokit/core";

export async function tryit() {

    let token =document.getElementById("token").value;

    const octokit = new Octokit({
        auth: token,
    });

    const response = await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
        owner: 'patrick-black-oddball',
        repo: 'testWorkflow',
        workflow_id: '70576953',
        data: "{\"ref\":\"main\"}",
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    const output = response.status;
    document.body.innerHTML += output;
    document.body.innerHTML += "<BR>";
    document.body.innerHTML += "hello";


}