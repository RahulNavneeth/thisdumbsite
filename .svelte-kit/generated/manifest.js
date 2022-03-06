const c = [
	() => import("..\\runtime\\components\\layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\create.svelte"),
	() => import("..\\..\\src\\routes\\dumb\\[room].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/create.svelte
	[/^\/create\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/dumb/[room].svelte
	[/^\/dumb\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ room: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];