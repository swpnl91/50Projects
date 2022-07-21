let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
const textarea = document.querySelector('#feed-textarea > ul');

const date = new Date();

document.querySelector('#date').innerHTML = date.toDateString();