import buble from 'rollup-plugin-buble';
import minify from 'rollup-plugin-babel-minify';
import path from 'path';

import {main} from './package.json';

let globals = {
	'@seregpie/claw': 'Claw',
};

export default {
	input: 'src/index.js',
	external: Object.keys(globals),
	output: {
		file: main,
		format: 'umd',
		name: path.basename(main, path.extname(main)),
		globals,
	},
	plugins: [
		buble({objectAssign: 'Object.assign'}),
		minify({comments: false}),
	],
};
