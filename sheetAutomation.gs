function triggerMe() {
  var ui = SpreadsheetApp.getUi();

  
  function Ask(){
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var taxPercentage = 0.17

      function insertValueIntoFirstEmptyCell(A, B) {
      var newValue = A;
    var columnIndex = B; // A
    var sheet = SpreadsheetApp.getActiveSheet();
      var values = sheet.getRange(1, columnIndex, sheet.getMaxRows()).getValues();
      for (var i = 0; i < values.length; i++) {
        if (values[i] == "") {
          var emptyCellIndex = i + 1;
          break;
      };
    };
    sheet.getRange(emptyCellIndex, columnIndex).setValue(newValue);


  }
    
    function displayPrompt() {
    var ui = SpreadsheetApp.getUi();
    var result = ui.prompt("Enter income value you would like to add or 'cancel:");
    if (`${result.getResponseText()}` != "cancel" && "Cancel" && "CANCEL"){
      insertValueIntoFirstEmptyCell(`${result.getResponseText()}`, 2)
      insertValueIntoFirstEmptyCell(`${result.getResponseText()*taxPercentage}`, 3)
      insertValueIntoFirstEmptyCell(`${result.getResponseText()-(result.getResponseText()*taxPercentage)}`, 4)
      insertValueIntoFirstEmptyCell(`${Date()}`, 5)
      // var result2 = ui.prompt("Employer:");
      // insertValueIntoFirstEmptyCell(`${result2.getResponseText()}`, 6)

    };
    
    }
    displayPrompt()

    
  };
  
Ask()
};
