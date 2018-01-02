function sendMessage(url, msg){
  console.log(url,msg);
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', url);
    
    xhr.onload= function(){
      if(this.status == 200){
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    }
    
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send(msg);
  });
}

$('#send').on('click', function(e){
  e.preventDefault();
  var message = new FormData($('.myForm')[0]);
  
  sendMessage('../php/contact.php', message);
  
});