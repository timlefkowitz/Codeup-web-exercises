

function getLastPushDate(githubusername){
    let url = `https://api.github.com/users/${githubusername}/events`;
    let githubresponse = fetch(url, {headers: {'Authorization' : `token ${gittoken}`}});
    githubresponse
            .then((response)=>{
                return response.json();
    })
    .then((githubEventData)=>{
        for (let githubevent of githubEventData){
            if(githubevent.type === "PushEvent"){
                console.log(githubevent.created_at);
                return new Date(githubevent.created_at);
            }
        }
    });
}

getLastPushDate("timlefkowitz")
    .then((date)=>console.log(date));






fetch('https://api.github.com/users')
.then(response => response.json())
.then(users => {
    users.forEach( userObj => {
        console.log(userObj.login);
    })
})
.catch(error => console.log(error));


function getusername(username){
}