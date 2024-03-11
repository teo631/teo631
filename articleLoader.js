let params = new URLSearchParams(window.location.search);
let buttonClicked = params.get('project');
console.log(buttonClicked);

function doesFileExist(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
 }

var result = doesFileExist("articles/"+buttonClicked+".html");

if(result==true){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'articles/'+buttonClicked+'.html');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Get the content from the source file
            var content = xhr.responseText;
            
            // Insert the content into the target element
            document.getElementById('article-container').innerHTML = content;
        }
    };
    xhr.send();
}else{

}