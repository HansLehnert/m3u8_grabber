chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	var response = {};
	response.sources = [];

	var resources = window.performance.getEntriesByType("resource");
	resources.forEach(function (resource) {
		if (resource.name.toLowerCase().indexOf(".m3u8") != -1)
		response.sources.push({name: resource.name});
	});

	sendResponse(response);
});