export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-9a6f3bf6.js","js":["start-9a6f3bf6.js","chunks/vendor-530506a1.js"],"css":["assets/vendor-ec9510ad.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/supabase\/?$/,
				params: null,
				load: () => import('./entries/endpoints/supabase.js')
			},
			{
				type: 'page',
				pattern: /^\/create\/?$/,
				params: null,
				path: "/create",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/dumb\/([^/]+?)\/?$/,
				params: (m) => ({ room: m[1]}),
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			}
		]
	}
};
