var Wiris = function(quill, options) {
	this.quill = quill;
	this.options = options;
	var container = document.querySelector(options.container);
	var _this = this;
	quill.on('text-change', function() {
		var length = _this.calculate();
		container.innerHTML = length + ' ' + options.unit + 's';
	});
};

wiris.prototype.calculate = function() {
	var text = this.quill.getText();
	if (this.options.unit === 'word') {
		return text.split(/\s+/).length;
	} else {
		return text.length;
	}
};

Quill.registerModule('wiris', Wiris);

var quill = new Quill('#editor');
var counter = quill.addModule('wiris', {
	container: '#counter',
	unit: 'word'
});

// We can now access calculate() directly
console.log(counter.calculate(), 'words');
