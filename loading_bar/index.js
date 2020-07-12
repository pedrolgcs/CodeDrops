/* size of page */
const postWrap = document.querySelector('.post-wrap');

/* create bar */
let bar = document.createElement('div');

/* bar styles */
bar.style.height = '4px';
bar.style.width = '0';
bar.style.backgroundColor = '#6633cc';
bar.style.transition = '0.2s';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.zIndex = '9999';

/* add bar to page */
document.body.append(bar);

function updatedBar() {
  const textHeight = postWrap.offsetHeight;
  const pagePositionY = window.pageYOffset;

  const updatedBar = (pagePositionY * 100) / textHeight;

  bar.style.width = updatedBar + '%';
}

/* when load page */
window.addEventListener('load', () => {
  document.addEventListener('scroll', updatedBar);
});
