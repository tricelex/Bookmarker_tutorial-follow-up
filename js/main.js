// Listen for form submission
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// save bookmark
function saveBookmark(e) {
    console.log('hello world');
    
    //prevents form rom submitting 
    e.preventDefault();
}