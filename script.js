function addPost() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title === "" || content === "") {
        alert("Please enter both title and content!");
        return;
    }

    const postSection = document.getElementById('blog-posts');

    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const postTitle = document.createElement('h3');
    postTitle.innerText = title;

    const postContent = document.createElement('p');
    postContent.innerText = content;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);

    postSection.appendChild(postDiv);

    // Clear inputs
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
}
