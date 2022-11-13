// const bodyElement = document.querySelector('body');
// function renderUser() {
//   const userWrapperEl = document.createElement('div');
//   userWrapperEl.classList.add('user-wrapper');
//   bodyElement.append(userWrapperEl);
//   fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(res => res.json())
//     .then(user => {
//       let userFullNameEl = document.createElement('h2');
//       let userNickNameEl = document.createElement('h3');
//       let userEmailEl = document.createElement('p');
//       let userAddressEl = document.createElement('a');
//       let userPhoneNrEl = document.createElement('p');
//       let userWebsiteEl = document.createElement('a');
//       let userCompanyEl = document.createElement('p');
//       userFullNameEl.textContent = user.name;
//       userNickNameEl.textContent = user.username;
//       userEmailEl.textContent = user.email;
//       userAddressEl.href = `https://maps.google.com/?q=<${user.address.geo.lat}>,<${user.address.geo.lng}>`
//       userAddressEl.textContent = `${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
//       userPhoneNrEl.textContent = user.phone;
//       userWebsiteEl.href = user.website;
//       userWebsiteEl.textContent = user.website;
//       userCompanyEl.textContent = user.company.name;
//       userWrapperEl.append(userFullNameEl, userNickNameEl, userEmailEl, userAddressEl, userPhoneNrEl, userWebsiteEl, userCompanyEl);
//     });
// };
// function renderUserPosts() {
//   let userPostsEl = document.createElement('div');
//   userPostsEl.classList.add('user-posts-wrapper');
//   bodyElement.append(userPostsEl);
//   fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//     .then(res => res.json())
//     .then(posts => {
//       posts.map(post => {
//         let userPostEl = document.createElement('div');
//         userPostEl.classList.add('user-post');
//         userPostsEl.append(userPostEl);
//         let userPostTitleEl = document.createElement('h3');
//         let userPostTextEl = document.createElement('p');
//         let userPostLinkEl = document.createElement('a');
//         userPostTitleEl.textContent = post.title;
//         userPostTextEl.textContent = post.body;
//         userPostLinkEl.textContent = 'read more...';
//         userPostLinkEl.href = '#';
//         userPostEl.append(userPostTitleEl, userPostTextEl, userPostLinkEl);
//       });
//     });
// };
// function renderUserAlbums() {
//   let userAlbumsEl = document.createElement('div');
//   userAlbumsEl.classList.add('user-albums-wrapper');
//   bodyElement.append(userAlbumsEl);
//   fetch('https://jsonplaceholder.typicode.com/albums?userId=1')
//     .then(res => res.json())
//     .then(albums => {
//       albums.map(album => {
//         let userAlbumTitleLinkEl = document.createElement('h4');
//         userAlbumTitleLinkEl.innerHTML = `<a href="#">${album.title}</a>`;
//         userAlbumsEl.append(userAlbumTitleLinkEl);
//       });
//     });
// };
// function init() {
//   renderUser();
//   renderUserPosts();
//   renderUserAlbums();
// };
// init();
const arr = ['Vienas','Du', 'Trys' ];
arr[0] = 1;
console.log ()