document.addEventListener("DOMContentLoaded", function () {
	chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
		var active_tab = tabs[0];

		chrome.tabs.sendMessage(active_tab.id, {}, function (reply) {
			//document.body.appendChild(document.createElement("div")).innerHTML = JSON.stringify(reply, null, 2);

			for (var i in reply.sources) {
				var url = reply.sources[i].name;

				var entry = document.createElement("div");
				entry.classList.add("entry");
				entry.innerHTML = url.split("?")[0].split("/").slice(-1)[0];
				entry.onclick = function () {
					chrome.tabs.create({active: true, url: reply.sources[i].name});
				}
				document.body.appendChild(entry);
			}
		});
	});
});