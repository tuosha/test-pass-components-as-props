import * as $ from 'jquery'
import Post from '@/Post'
import Person from '@/Person'
import xml from '@data/test-xml'
import csv from '@data/test-csv'
import React from 'react';
import ReactDOM from 'react-dom/client'
import '@styles/main.css'
import '@styles/less.less'
import '@styles/scss.scss'
import '@styles/sass.sass'

const post = new Post('This is post')
const person = new Person('Toha', 'Oh9o', 150000)
$('pre').html(person.toString())
const testBabel = async () => {
	return Promise.resolve('work!!!')
}
testBabel().then(console.log)
console.log('Post',  post.toString())
console.log('XML-test',  xml)
console.log('CSV-test', csv)
console.log('Analyzer', process.env.NODE_ENV)

const App = () => {
	return (
		<div className="main-header">
			<h1 className="main-header__head">Webpack in action</h1>
			<hr/>
			<div className="main-header__logo"/>
			<hr/>
			<pre/>
			<div className="less-box">
				<h2>This is LESS</h2>
			</div>
			<div className="scss-box">
				<h2>This is SCSS</h2>
			</div>
			<div className="sass-box">
				<h2>This is SASS</h2>
			</div>
		</div>
	)
}
const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<App/>)


