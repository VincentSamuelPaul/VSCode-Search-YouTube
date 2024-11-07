const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */


function activate(context) {
    const disposable = vscode.commands.registerCommand('search.searchYoutube', async function() {
        const searchQuery = await vscode.window.showInputBox({
            placeHolder: "Enter title",
            prompt: "Search YouTube Videos...",
        });
        vscode.window.showInformationMessage(searchQuery);
        if (searchQuery == null || searchQuery == '') {
            vscode.window.showErrorMessage("Enter a valid search title");
        } else {
            let link = `https://www.youtube.com/results?search_query=${searchQuery}`;
            vscode.env.openExternal(link);
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}