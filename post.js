const postId = 55;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`)
  .then(res => res.json())
  .then(post => {
    let postWrapper = document.querySelector('#post-wrapper');

    let postTitleElement = document.createElement('h2');
    postTitleElement.classList.add('post-title');
    postTitleElement.textContent = post.title;

    let postAuthorElement = document.createElement('span');
    postAuthorElement.classList.add('post-author');
    postAuthorElement.innerHTML = `Author: <a href="./user.html">${post.user.name}</a>`;

    let postContentElement = document.createElement('p');
    postContentElement.classList.add('post-content');
    postContentElement.textContent = post.body;

    let commentsWrapperElement = document.createElement('div');
    commentsWrapperElement.classList.add('comments-wrapper');

    let commentsSectionTitle = document.createElement('h3');
    commentsSectionTitle.classList.add('comments-section-title');
    commentsSectionTitle.textContent = 'Comments:';

    let commentsListElement = document.createElement('div');
    commentsListElement.classList.add('comments-list');
    
    post.comments.map(comment => {
      let commentItem = document.createElement('div');
      commentItem.classList.add('comment-item');

      commentItem.innerHTML = `<h4 class="comment-title">${comment.name}</h4>
                                <span class="comment-author">Commented by: ${comment.email}</span>
                               <p class="comment-content">${comment.body}</p>`;

      commentsListElement.append(commentItem);
    })

    commentsWrapperElement.append(commentsSectionTitle, commentsListElement);

    postWrapper.append(postTitleElement, postAuthorElement, postContentElement, commentsWrapperElement);

    let moreAuthorPostsElement = document.createElement('a');
    moreAuthorPostsElement.classList.add('more-posts');
    moreAuthorPostsElement.href = './posts.html';
    moreAuthorPostsElement.textContent = `Other posts of ${post.user.name}`;

    postWrapper.append(moreAuthorPostsElement);
  })