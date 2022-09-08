//create request variable
var request = new XMLHttpRequest()

//Open a new connection, using GET request on the url endpoint.
request.open('GET', 'https://api.github.com/users/NickvanLoo/repos', true)

request.onload = function () {
    var data = JSON.parse(this.response);

    var statusHTML = '';

    $.each(data, function (i, status) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td><a target="_blank" href="' + status.html_url + '">' + status.html_url + '</a></td>';
        statusHTML += '<td>' + status.language + '</td>';
        statusHTML += '</tr>';
    });
    $('tbody').html(statusHTML);
}

request.send();