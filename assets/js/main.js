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

			newSectionButtonLeftText = document.createTextNode("View Previous Image (requires CSS)");
			newSectionButtonLeft = document.createElement("button");
			newSectionButtonLeft.appendChild(newSectionButtonLeftText);
			newSectionButtonLeft.classList.add("gallery-controls-button");
			newSectionButtonLeft.classList.add("left");
			newSectionButtonLeft.type="button";
			newSectionUlLiFirst = document.createElement("li");
			newSectionUlLiFirst.appendChild(newSectionButtonLeft);

			newSectionButtonRightText = document.createTextNode("View Next Image (requires CSS)");
			newSectionButtonRight = document.createElement("button");
			newSectionButtonRight.appendChild(newSectionButtonRightText);
			newSectionButtonRight.classList.add("gallery-controls-button");
			newSectionButtonRight.classList.add("right");
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

			newFooter = document.createElement("footer");
			newFooter.appendChild(newSection);

			portfolioPieceGalleries[index].appendChild(newFooter);
		}
}());

// Adds event listeners to the Image Galleries
(function () {
	var portfolioSection = document.querySelector(".portfolio-pieces"),
		index = 0;

	function moveActiveClassThroughGalleryFigures (gallery, typeOfMovement) {
		var figures = gallery.querySelectorAll(".portfolio-piece-figure"),
			genericIndex = 0;

		switch (typeOfMovement) {
			case "backwardLoop":
				if (index > 0) {
					index--;
				} else {
					index = figures.length - 1;
				}
				break;
			case "forwardLoop":
				if (index < figures.length - 1) {
					index++;
				} else {
					index = 0;
				}
		}

		for (genericIndex; genericIndex < figures.length; genericIndex++) {
			figures[genericIndex].classList.add("visually-hidden");
		}

		figures[index].classList.remove("visually-hidden");
	}
		
	portfolioSection.addEventListener("click", function (evt) {
		var gallery = evt.target.parentElement.parentElement.parentElement.parentElement.parentElement;
		if (evt.target.classList.contains("left")) {
			moveActiveClassThroughGalleryFigures(gallery, "backwardLoop");
		} else if (evt.target.classList.contains("right")) {
			moveActiveClassThroughGalleryFigures(gallery, "forwardLoop");
		}
	});
}());