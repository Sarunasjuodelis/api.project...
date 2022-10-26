function renderPosts() {
    const bodyElement = document.querySelector('body');
    const postsWrapperEl = document.createElement('div');
    bodyElement.append(postsWrapperEl);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15`)
      .then(res => res.json())
      .then(data => {
        data.map(post => {
          let postWrapperEl = document.createElement('div');
          let postTitleEl = document.createElement('h2');
          let postTextEl = document.createElement('p');
          let postAuthorLinkEl = document.createElement('a');
          let postTitleTxt = post.title;
          let postParagraphTxt = post.body;
          let postAuthorId = post.userId;
          fetch(`https://jsonplaceholder.typicode.com/users/${postAuthorId}`)
            .then(res => res.json())
            .then(data => {
              postAuthorLinkEl.textContent = data.name;
            });
          postAuthorLinkEl.href = `https://jsonplaceholder.typicode.com/users?id=${postAuthorId}`;
          postTitleEl.textContent = postTitleTxt;
          postTextEl.textContent = postParagraphTxt;
          postWrapperEl.append(postTitleEl, postTextEl, postAuthorLinkEl);
          postsWrapperEl.append(postWrapperEl)
        });
      });
  };
  renderPosts();