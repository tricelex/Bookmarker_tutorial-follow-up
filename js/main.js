// Listen for form submission
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// save bookmark
function saveBookmark(e) {
	// Get form values
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;
	
	if (!validateForm(siteName, siteUrl)) {
		return false;
	}
	

	var bookmark = {
		name : siteName,
		url: siteUrl
        
	};
	
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

	// Clear form
	document.getElementById('myForm').reset();
    
	// Re-fetch bookmarks
	fetchBookmarks();

	//prevents form rom submitting 
	e.preventDefault();
}

// Delete Bookmark
function deleteBookmark(url) {
	// Get bookmarks from LocalStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	// loop through bookmarks
	for (var i = 0; i < bookmarks.length; i++) {
		if (bookmarks[i].url == url) {
			// Remove from array
			bookmarks.splice(i, 1);
		}
	}
	// Re-set Back to localStorage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
	// Re-fetch bookmarks
	fetchBookmarks();
}

//Fetch Bookmarks
function fetchBookmarks() {
	// Get bookmarks from LocalStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	// Get output
	var bookmarksResults = document.getElementById('bookmarksResults');

	// Build output
	bookmarksResults.innerHTML = '';
	for (var i = 0; i < bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;
        
		bookmarksResults.innerHTML += '<div class="well">'+
                                      '<h3>'+name+
                                      ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                      ' <a onClick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>'+
                                      '</h3>'+
                                      '</div>';
	}
        
} 

function validateForm(siteName, siteUrl) {
	if (!siteName || !siteUrl) {
		alert('Please fill in the form');
		return false;
	}

	var expression = /[-a-zA-z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);

	if (!siteUrl.match(regex)) {
		alert('Please use a valid url');
		return false;
	}

	return true;
}