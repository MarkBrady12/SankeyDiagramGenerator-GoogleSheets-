function onOpen() {
    SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
        .createMenu('Chart')
        .addItem('SankeyDiagram', 'openDialog')
        .addToUi();
}

function getSpreadsheetData() {
    var sheet = SpreadsheetApp.getActive().getSheets()[0];
    var data = sheet.getDataRange().getValues();
    return data;
}



function openDialog() {
    var html = HtmlService.createHtmlOutputFromFile('index')
        .setHeight(300)
        .setWidth(1000);
    SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
        .showModalDialog(html, 'Sankey Diagram');
}

