(function() {

	new Vue({
		el: '#app',

		data: {
			colorIndex: 0,
			colorValues: [
				'orange',
				'green',
				'purple',
			],
			offsetX: 0,
			offsetY: 0,
		},

		computed: {
			color: function() {
				return this.colorValues[this.colorIndex];
			},
		},

		methods: {
			onPan: function(event) {
				this.offsetX += event.x - event.previousX;
				this.offsetY += event.y - event.previousY;
			},

			onTap: function() {
				this.colorIndex++;
				this.colorIndex %= this.colorValues.length;
			},
		},
	});

})();
