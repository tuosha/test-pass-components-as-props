export default class Post {
	constructor (title, text = '', date) {
		this.title = title
		this.text = text
		this.date = new Date()
	}
	toString() {
		return JSON.stringify({
			title: this.title,
			text: this.text,
			date: this.date.toJSON()
		}, null, 2)
	}
}