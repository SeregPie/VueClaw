import VueClaw from './VueClaw';

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.directive(VueClaw.name, VueClaw);
}

export default VueClaw;
