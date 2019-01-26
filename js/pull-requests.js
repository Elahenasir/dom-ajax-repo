function showRP1(){
   fetch('https://api.github.com/repos/codeyourfuture/js-exercises/pulls')
  .then(rp=>{
    rp.json().then(json=>{
           let PRList="";
            var users=[];
            var input = document.getElementById('userSearch');
            const value = input.value;
      for(i=0;i<json.length;i++){
        users.push(json[i].user.login);
        if(users.includes(value)){
               PRList += '<li><a href="'+json[i].html_url+'">' + json[i].title + '</a></li>';
              }
            }
            const PRL = document.getElementById('pull-requests-list');
            PRL.innerHTML='<p>codeyourfuture PR:</P>'+ PRList;
          
   
  })
  .catch(error =>{});
});
}





