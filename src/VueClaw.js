import Claw from '@seregpie/claw';

let claws = new Map();

let VueClaw = {
	name: 'Claw',

	bind(el, {
		arg,
		value,
	}) {
		let claw = claws.get(el);
		if (!claw) {
			claws.set(el, claw = new Claw(el));
		}
		claw.on(arg, value);
	},

	unbind(el, {arg}) {
		let claw = claws.get(el);
		if (claw) {
			claw.off(arg);
			if (claw.isIdle) {
				claws.delete(el);
			}
		}
	},
};

export default VueClaw;
