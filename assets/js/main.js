(function () {
	document.body.classList.add("js-enabled");
}());

(function () {
	var copyrightInfo = document.querySelector(".copyright-info"),
		newTextNode = document.createTextNode(copyrightInfo.childNodes[0].nodeValue.replace("\u00a9 ", "\u00A9 " + new Date().getFullYear() + " "));

		copyrightInfo.replaceChild(newTextNode, copyrightInfo.childNodes[0]);
}());

(function () {
	var portfolioPieceGalleries = document.querySelectorAll(".portfolio-piece-figures"),
		newFooter,
		newSection,
		newSectionHeading,
		newSectionHeadingText,
		newSectionUl,
		newSectionUlLiFirst,
		newSectionUlLiSecond,
		newSectionButtonLeft,
		newSectionButtonRight,
		newSectionButtonLeftText,
		newSectionButtonRightText,
		index;

		for (index = 0; index < portfolioPieceGalleries.length; index++) {
			newSectionHeadingText = document.createTextNode("Gallery Controls");
			newSectionHeading = document.createElement("h3");
			newSectionHeading.appendChild(newSectionHeadingText);
			newSectionHeading.classList.add("visually-hidden");

			newSectionButtonLeftText = document.createTextNode("View Previous Image (requires CSS");
			newSectionButtonLeft = document.createElement("button");
			newSectionButtonLeft.appendChild(newSectionButtonLeftText);
			newSectionButtonLeft.type="button";
			newSectionUlLiFirst = document.createElement("li");
			newSectionUlLiFirst.appendChild(newSectionButtonLeft);

			newSectionButtonRightText = document.createTextNode("View Next Image (requires CSS)");
			newSectionButtonRight = document.createElement("button");
			newSectionButtonRight.appendChild(newSectionButtonRightText);
			newSectionButtonRight.type="button";
			newSectionUlLiSecond = document.createElement("li");
			newSectionUlLiSecond.appendChild(newSectionButtonRight);

			newSectionUl = document.createElement("ul");
			newSectionUl.appendChild(newSectionUlLiFirst);
			newSectionUl.appendChild(newSectionUlLiSecond);

			newSection = document.createElement("section");
			newSection.classList.add("gallery-controls");
			newSection.setAttribute("role", "presentation");
			newSection.setAttribute("aria-hidden", true);
			newSection.appendChild(newSectionHeading);
			newSection.appendChild(newSectionUl);

			newFooter = document.createElement("footer")
			newFooter.appendChild(newSection);

			portfolioPieceGalleries[index].appendChild(newFooter);
		}
}());