(function() {

	new Vue({
		el: '#app',

		data: {
			colorValues: ['cyan', 'light-green', 'yellow'],
			dirtyColorIndex: 0,
			moving: false,
			offsetX: 0,
			offsetY: 0,
			shaking: false,
		},

		computed: {
			color: function() {
				return this.colorValues[this.colorIndex];
			},

			colorIndex: {
				get: function() {
					return this.dirtyColorIndex % this.colorValues.length;
				},
				set: function(value) {
					this.dirtyColorIndex = value;
				},
			},
		},

		methods: {
			onHoldEnd: function() {
				this.shaking = false;
			},

			onHoldStart: function() {
				this.shaking = true;
			},

			onPan: function(event) {
				this.offsetX += event.x - event.previousX;
				this.offsetY += event.y - event.previousY;
			},

			onPanEnd: function() {
				this.moving = false;
			},

			onPanStart: function() {
				this.moving = true;
			},

			onTap: function() {
				this.colorIndex++;
			},
		},
	});

})();
