function sendRequest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('displayResponse').innerHTML = this.responseText;
    }
  } 
  xhttp.open('GET', 'http://localhost:3000/ajax', true);
  xhttp.send();
}