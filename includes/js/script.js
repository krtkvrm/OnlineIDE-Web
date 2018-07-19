var editor = null

const loadEditor = (lang) => {
	require.config({ paths: { 'vs': 'includes/monaco-editor/min/vs' }})
	require(['vs/editor/editor.main'], () => {
		editor = monaco.editor.create(document.getElementById('container'), {
			value: [
				'#include<stdio.h>',
				'int main {',
				'\treturn 0;',
				'}'
			].join('\n'),
			language: lang
		})
	})
}

loadEditor(document.getElementById('lang').value)	

$(window).on('load', () => {

		// Change Lanuage
		$('select').on('change', () => {
			$('#container').empty()
			loadEditor(document.getElementById('lang').value)
		})

})