var msg = '<p><b>page title: </b>' + document.title + '<br />';
msg += '<b>page address: ' + document.URL + '<br />';
msg += '<b>last modified: </b>' + document.lastModified + '</p>';
var el = document.getElementById(elementld: 'footer');
el.innerHTML = msg;