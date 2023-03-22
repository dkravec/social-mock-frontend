var user= {
    userID:1
};

var mockData = {};

async function loadData() {
    const res = await fetch ('./mock.json')
    const data = await res.json()
    mockData=data;
    user=mockData.users[0];
    setupUI();

    return true;
};

function setupUI() {
    document.getElementById('root').innerHTML = `
        <div id="navbar" class="navbar">
            <label for="toggle">&#9776;</label>
            <input type="checkbox" id="toggle"/>
            <div class="menu">
                <a onclick="mainPage()" class="menu-active">Home</a>
                <a onclick="liveChatPage()">Live Chat</a>
                <a onclick="profilePage(${user.userID})">Profile</a>
                <a href="/projects/">Search</a>
                <a href="/podcast/">Create Post</a>
                <a href="/contact/">Sign Out</a>
            </div>
        </div>
        <div class="after-navbar"></div>
        <div id="main"></div>
    `;

    mainPage();
    // navbar
    // search bar
    // posts
};

function mainPage() {
    console.log("Main Page")
    document.getElementById('main').innerHTML = `
        <span class="material-symbols-outlined icon-button";>settings</span>
        <div id="feed">
        </div>
    `;
    buildFeed();
};

function buildFeed() {
    var feed = document.getElementById('feed');
    for (var i = 1; i < mockData.posts.length; i++) {
        feed.innerHTML += postElement(i);
    };
};

function liveChatPage() {
    document.getElementById('main').innerHTML = `
        <div id="live-chat">
            <p>Live Chat</p>
        </div>
    `;
};

function postHTML() {

};
function getPost(postID) {
    return mockData.posts[postID-1];
}
function getUser(userID) {
    return mockData.users[userID-1];
}
function postElement(postID) {
    const postData = getPost(postID);
    const userData = getUser(postData.userID);
    console.log(postData.pfp)
    console.log("postData")
    console.log(postData)
    console.log("userData")
    console.log(userData)
    return `
        <div id="post_${postData.postID}" class="post">
            <div id="user-container">
                <div class="post_user">
                    <img class="post_user_pfp" src="${userData.pfp}" alt="user pfp"></img>
                    <p class="post_user_displayname">${userData.displayName}</p>
                    <p class="post_user_username">@${userData.username}</p>
                </div>
            </div>
            <div id="attachment-container">
                attachments
            </div>
            <div id="content-container">
                content
            </div>
            <div id="info-container">
                info
            </div>
            <div id="replies-container">
                replies
            </div>
        </div>
    `
        /*

    user
     username
     displayname
     pfp
    
     images

    content
    info
     replies
     quotes
     likes
      img
      amount
     timestamp
    replies
    */
};

function profileElement() {
    return `
        <div id="profile">
            <p>Profile Page</p>
            <p>UserID: ${userID}</p>
        </div>
    `;
};

function postPage() {
    console.log("Post Page")
    document.getElementById('main').innerHTML = `
    `;
}

function profilePage(userID) {
    console.log("Profile Page")
    document.getElementById('main').innerHTML = `
        <div id="profile">
            <p>Profile Page</p>
            <p>UserID: ${userID}</p>
        </div>
    `;
}

async function startup() {
    await loadData();
}

startup();

