(function () {
	var copyrightInfo = document.querySelector(".copyright-info"),
		newTextNode = document.createTextNode(copyrightInfo.childNodes[0].nodeValue.replace("\u00a9 ", "\u00A9 " + new Date().getFullYear() + " "));

		copyrightInfo.replaceChild(newTextNode, copyrightInfo.childNodes[0]);
}());