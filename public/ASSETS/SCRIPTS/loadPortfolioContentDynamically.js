
function createSliderObjects(project){
	// Finding slides wrapper
	var wrapper = document.getElementById("cardWrapper");
	// Creating the new content item
	var newDiv = document.createElement("div");
	wrapper.appendChild(newDiv);
	newDiv.classList.add("contentItem");
	
	// Creating all info objects
	makeObject("Project Title:",project.title,newDiv);
	makeObject("Project Role:",project.role,newDiv);
	makeObject("Project Summary:",project.summary,newDiv);
	makeImageObject(project.previewImage,newDiv);

	newDiv.addEventListener("click",function() {
		createModal(project)
	})
}

function makeObject(header,object,newDiv){
	var headerTitle = document.createElement("h1");
	headerTitle.innerHTML = header
	headerTitle.classList.add("cardHeaders");
	var headerText = document.createElement('h2');
	headerText.classList.add("headerText");
	headerText.innerHTML = object;
	newDiv.appendChild(headerTitle);
	//newDiv.appendChild(document.createElement("br"));
	newDiv.appendChild(headerText);
	//newDiv.appendChild(document.createElement("br"));
}

function makeImageObject(image,newDiv){
	newDiv.style.background = "linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 100%), url('"+image+"') no-repeat top center"
	var headers = newDiv.querySelectorAll('.cardHeaders')
	var headerText = newDiv.querySelectorAll('.headerText')
	
	newDiv.addEventListener("mouseover",function() {
		newDiv.style.background = "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('"+image+"') no-repeat top center"
		newDiv.style.backgroundSize = "cover"
		headers.forEach((headers)=>{
			headers.classList.add('active')
		})
		headerText.forEach((headerText)=>{
			headerText.classList.add('active')
		})
	})
	
	newDiv.addEventListener("mouseout",function() {
		newDiv.style.background = "linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 100%), url('"+image+"') no-repeat top center"
		newDiv.style.backgroundSize = "cover"	
		headers.forEach((headers)=>{
			headers.classList.remove('active')
		})
		headerText.forEach((headerText)=>{
			headerText.classList.remove('active')
		})
	})
	
	newDiv.style.backgroundSize = "cover"
}


// Creating Modal
function createModal(project){
	// Creating outter rapper for modal
	var modalWrapper = document.createElement("div");
		document.body.appendChild(modalWrapper);
		modalWrapper.classList.add('modal');
		//Adding active class to modal 
		overlay.classList.add('active');
		overlay.addEventListener('click', ()=>{
			modalWrapper.classList.remove('active');
			overlay.classList.remove('active');
			setTimeout(killModal, 1000)
			function killModal() {document.body.removeChild(modalWrapper);}
		})
		setTimeout(activeModal, 200)
		function activeModal(){modalWrapper.classList.add('active');}
	
		// Adding modal to the dom
		// Creating header rapper
		var modalHeader = document.createElement("div");
			modalHeader.classList.add("modalHeader");
		// Adding header to modal
		modalWrapper.appendChild(modalHeader);
	
			// Creating header content
			var modalTitleText = document.createElement("div");
				modalTitleText.classList.add("modalTitleText")
				modalTitleText.innerHTML = project.title;
			var closeButton = document.createElement("button");
				closeButton.classList.add("modalCloseButton")
				closeButton.innerHTML = "&times;";
				
				// Closing modal
				closeButton.addEventListener("click",function() {
					modalWrapper.classList.remove('active');
					overlay.classList.remove('active');
					setTimeout(killModal, 1000)
					function killModal() {document.body.removeChild(modalWrapper);
											}
					})
			
			// Adding text and button to header
			modalHeader.appendChild(modalTitleText);
			modalHeader.appendChild(closeButton);
		
		// Creating body wrapper
		var modalBody = document.createElement("div");
			modalBody.classList.add("modalBody");
			var projectItems = project.workProduced;
		
		// Adding body to wrapper
		modalWrapper.appendChild(modalBody);
			// Creating all body items
			var openingParagraph = document.createElement("div");
			openingParagraph.classList.add("openingParagraph")
			openingParagraph.innerHTML = project.openingParagraph;
			modalBody.appendChild(openingParagraph);
	
			projectItems.forEach(createModalBody);
			// Creating the individual body items
			function createModalBody(projectItems){
				var itemWrapper = document.createElement("div");
				modalBody.appendChild(itemWrapper);
					// Creating item header
					var itemTitle = document.createElement("div")
					itemTitle.innerHTML = projectItems.itemTitle;
					itemTitle.classList.add("modalItemHeader");
					itemWrapper.appendChild(itemTitle);
					//Decide content kind
					// 0 = Vimeo Video
					// 1 = Standalone Photo
					// 2 = Photo Gallery
					if (projectItems.itemKind == 1){createPhotoElement(projectItems.itemLink,projectItems.itemTitle,itemWrapper,projectItems.wrapperStyle)}
					else if (projectItems.itemKind == 2){createPhotoGalleryElement(projectItems.itemLink, itemWrapper)}
					else {createVimeoElement(projectItems.itemLink,itemWrapper,projectItems.wrapperStyle)}
					//Creating item description
					var itemSummary = document.createElement("div");
					itemSummary.innerHTML = projectItems.itemSummary;
					itemSummary.classList.add("modalDescription");
					itemWrapper.appendChild(itemSummary);
				}
}

function createVimeoElement(link,itemWrapper,wrapperStyle){
	var element = document.createElement("div");
		element.setAttribute("style",wrapperStyle);
		element.classList.add("portfolioVideo");
	var iframe = document.createElement("iframe");
		iframe.setAttribute("src",link);
		iframe.setAttribute("frameborder",0);
		iframe.setAttribute("allow","fullscreen;");
		iframe.setAttribute("style","position:absolute;top:0;left:0;width:100%;height:100%;");
	var script = document.createElement("script");
		script.setAttribute("src","https://player.vimeo.com/api/player.js")
	//element.innerHTML = "im a video";
	element.appendChild(iframe)
	itemWrapper.appendChild(element);
	itemWrapper.appendChild(script);
}

function createPhotoElement(link,alt,itemWrapper,aspect){
	var wrapper = document.createElement("div");
		wrapper.classList.add("portfolioPhotoController");
	var imgWrapper = document.createElement("div");
		imgWrapper.setAttribute("style",aspect)
		imgWrapper.classList.add("portfolioPhoto");
		
		var img = document.createElement('img');
			img.setAttribute("src",link);
			img.setAttribute("style","position:absolute;top:0;left:0;width:100%;");
	
		itemWrapper.appendChild(wrapper);
		wrapper.appendChild(imgWrapper)
		imgWrapper.appendChild(img);
}

function createPhotoGalleryElement(itemLink, itemWrapper){
	var photosWrapper = document.createElement('div');
	photosWrapper.classList.add("portfolioPhotoGalery");
	itemWrapper.appendChild(photosWrapper);
	var cloudGrab = firebase.functions().httpsCallable('cloudinaryGetPhotoJson');
	cloudGrab({item: itemLink}).then(result => {
		console.log(result)
		var loop = result.data
		//photosWrapper.style.gridAutoFlow = "column"
		loop.forEach((loop) => {
			var link = loop.url;
			var charIndex = link.search('upload/') + 7
			var qlink =	link.slice(0,charIndex) + 'q_20/' + link.slice(charIndex)
			var img = document.createElement('img');
			img.setAttribute("src",qlink);
			//img.style.backgroundImage = "url('"+link+"') no-repeat top center"
			photosWrapper.appendChild(img);
		})
	})
}

var overlay = document.getElementById('overlay');
var bodyOfWork = new XMLHttpRequest();
bodyOfWork.open('GET', "https://api.jsonbin.io/b/6266f6b0019db467969193ae/latest", false);
bodyOfWork.onload = function()
  { 
	var allProjects=JSON.parse(bodyOfWork.responseText);
	allProjects.forEach(createSliderObjects);
	}
bodyOfWork.setRequestHeader("secret-key", "$2b$10$C5QHYpg3jspaaKN6jPPo2.Qak8A3N80aPqoiPfNHdM4OhDaRMMn7K");
bodyOfWork.send();