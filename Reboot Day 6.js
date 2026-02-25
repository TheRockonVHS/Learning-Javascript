// What do you remember about expand/collapse patterns in JavaScript?

// Think back to any previous exposure — whether from the JavaScript Simplified course, tutorials, or earlier attempts. Try to recall:

// What DOM methods would you use to show/hide an element?
// addEventListener, querySelector
// How would you track whether something is currently visible or hidden?
// hidden or show id that has some CSS that shows or hides it
// What event would trigger the toggle?
// on click
// Give it your best shot from memory — even partial recall helps strengthen the learning. I'll guide you from there.

// ``` javascript
const content = document.querySelector('#content');
const btn = document.querySelector('#toggle-btn');
content.hidden = false;

// how do you change what text the button displays?
btn.addEventListener('click', () => {
  if (btn.textContent === 'Hide') {
    content.hidden = false;
    btn.textContent = "Show";
  } else {
    content.hidden = true;
    btn.textContent = "Hide";
  }
  
})