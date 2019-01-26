// Write code here to communicate with Github
const reposList = document.querySelector("#repos-list");
  const repoCount = document.querySelector("#repos-count");
let searchedUser = "ElaheNasir";
const showRepos = () => {
  fetch('https://api.github.com/users/'+searchedUser+'/repos')
    .then(res =>{
      res.json().then(json=>{
        let myRepos = "";
        for (let i = 0; i < json.length; i++) {
          myRepos += '<li><a href="'+json[i].html_url+'">' + json[i].name + '</a></li>';
        }
        reposList.innerHTML = '<p>My reposetaries on GitHub:</P>'+ myRepos;
        repoCount.innerHTML = '<a href = "'+ json[0].owner.html_url +'"> ' + json.length + '</a>';
        var element = document.getElementById('imgProfile');
        element.setAttribute('src',json[0].owner.avatar_url)
      });
    })
    .catch(error => alert("Searched user is not a valid user"));
};
showRepos();