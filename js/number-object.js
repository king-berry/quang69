var originalNumber = 10.23456;
var msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>3 decimal places</h2><p>' originalNumber.toFixed(fractionDigits: 3) + '</p>';
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(precision: 3) + '</p>';
var el = document.getElementById(elementld: 'info');
el.innerHTML