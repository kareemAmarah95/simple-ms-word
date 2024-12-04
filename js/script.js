 // Function to save content as TXT
 function saveAsTxt() {
    const content = document.getElementById('input').value;
    saveFile(content, 'document.txt', 'text/plain');
}

// Function to save content as HTML
function saveAsHtml() {
    const content = document.getElementById('input').value;
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
${content}
</body>
</html>`;
    saveFile(htmlContent, 'document.html', 'text/html');
}

// Function to save content as JSON
function saveAsJson() {
    const content = document.getElementById('input').value;
    const jsonContent = JSON.stringify({ content });
    saveFile(jsonContent, 'document.json', 'application/json');
}

// Utility function to save a file
function saveFile(content, fileName, fileType) {
    const blob = new Blob([content], { type: fileType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
}