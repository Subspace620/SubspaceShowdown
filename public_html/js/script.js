
async function run2() {
	const url1 = 'https://drive.google.com/file/d/1L-KNV6oSnNlebSbHEtm9QJDiy-KFrhMg/view?usp=sharing'
	const response = await fetch(url1);
	const text = await response.text();
	
	target = document.getElementsByTagName('main')[0],
	converter = new showdown.Converter(),
	html = converter.makeHtml(text);
	
	target.innerHTML = html;
}
async function run2() {
	const url1 = 'https://raw.githubusercontent.com/Subspace620/SubspaceShowdown/main/public_html/executive.md'
	const response = await fetch(url1);
	const text = await response.text();
	
	target = document.getElementsByTagName('main')[0],
	converter = new showdown.Converter(),
	html = converter.makeHtml(text);
	
	target.innerHTML = html;
}