// Listen for form submission
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// save bookmark
function saveBookmark(e) {
	// Get form values
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;
    
	var bookmark = {
		name : siteName,
		url: siteUrl
	};
	// console.log(bookmark);

	/*
        // Local Storage Test
        localStorage.setItem('test', 'Hello world');
        console.log(localStorage.getItem('test'));
        localStorage.removeItem('test');
    */

	// Test if bookmarks is null
	if (localStorage.getItem('bookmarks') === null) {
		// Init array
		var bookmarks = [];
		// Add to array
		bookmarks.push(bookmark);
		// Set to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {

		// Get bookmarks from LocalStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		// Add bookmark to array.
		bookmarks.push(bookmark);
		// Re-set Back to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
	}
    
	//prevents form rom submitting 
	e.preventDefault();
}

//Fetch Bookmarks
function fetchBookmarks() {
    // Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        
 } 