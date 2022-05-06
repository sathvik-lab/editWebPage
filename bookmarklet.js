(function(){
	document.body.contentEditable = true;
	let all_links = document.getElementsByTagName("a");
	for(let i=0; i< all_links.length;i++){
		all_links[i].removeAttribute("href");
	}
	void 0;
})();