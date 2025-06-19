// console.log("bhole");

require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
    
  "login": "hiteshchaudhary",
  "id": 17576078,
  "node_id": "MDQ6VXNlcjE3NTc2MDc4",
  "avatar_url": "https://avatars.githubusercontent.com/u/17576078?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchaudhary",
  "html_url": "https://github.com/hiteshchaudhary",
  "followers_url": "https://api.github.com/users/hiteshchaudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchaudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchaudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchaudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchaudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchaudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchaudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchaudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchaudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 6,
  "following": 0,
  "created_at": "2016-03-01T18:11:15Z",
  "updated_at": "2016-03-01T18:11:15Z"

}

app.get("/", (req,res) => {
    res.send("Hello World!");
});

app.get("/twitter",(req,res) => {
    res.send("bholedotcom");
});

app.get("/gmail", (req,res) => {
    res.send("bhole108@gmail.com");
});

app.get("/login", (req,res) => {
    res.send("<h1> please login in my account </h1>");
});

app.get("/youtube", (req,res) => {
    res.send("<h2>singular solution motivation</h2>");
})




//port = process.env.PORT
// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${port}`)
// });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


app.get("/github", (req,res) => {
    res.json(githubData);
})