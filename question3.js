// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här

async function fetchPosts() {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const posts = response.json();
        displayPosts(posts)
    } catch (error) {
        console.error("Something went wrong", error)
    }
}

function displayPosts(posts) {
    let filteredPosts = posts.filter(item => item.id === 1)
    
    console.log(filteredPosts)

    const postsDiv = document.getElementById(posts);

    let disPosts = ""
    filteredPosts.map(post =>
        disPosts += `
        <h1>${post.title}</h1>
        <p>${post.body}</p>`
    )

    postsDiv.innerHTML = disPosts
}

fetchPosts()