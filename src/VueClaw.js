import Claw from '@seregpie/claw';

let clawInstances = new Map();

export default {
	name: 'Claw',

	bind(el, {
		arg,
		value,
	}) {
		let claw = clawInstances.get(el);
		if (!claw) {
			clawInstances.set(el, claw = new Claw(el));
		}
		claw.on(arg, value);
	},

	update(el, {
		arg,
		value,
	}) {
		let claw = clawInstances.get(el);
		claw.off(arg);
		claw.on(arg, value);
	},

	unbind(el, {arg}) {
		let claw = clawInstances.get(el);
		claw.off(arg);
		if (claw.isIdle) {
			clawInstances.delete(el);
		}
	},
};
