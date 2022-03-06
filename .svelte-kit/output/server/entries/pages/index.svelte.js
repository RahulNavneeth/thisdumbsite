import { c as create_ssr_component, e as escape, a as add_attribute } from "../../chunks/index-63796eb4.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-dym54q{display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center}button.svelte-dym54q{width:130px;height:40px;background:#fff;border:1px solid pink;border-radius:7px;font-family:monospace;font-weight:1000;margin:10px;font-size:20px}.flexButton.svelte-dym54q{display:flex;flex-direction:column}.btnContainer.svelte-dym54q{position:absolute;top:57%}button.svelte-dym54q:hover{background:pink;cursor:pointer}h1.svelte-dym54q{font-family:monospace;position:absolute;top:43%}h2.svelte-dym54q{font-family:monospace;position:absolute;top:20%;padding:10px;width:25%;background-color:rgb(231, 52, 52);border-radius:10px;text-align:center}input.svelte-dym54q{background:pink;border:none;border-radius:7px;font-family:monospace;font-weight:1000;position:absolute;font-size:20px;position:absolute;top:50%;padding:10px;width:40%;outline:none}",
  map: null
};
let CodeError = "";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let code = "";
  let error = "";
  $$result.css.add(css);
  return `<div class="${"container svelte-dym54q"}">${error.length != 0 ? `<h2 class="${"svelte-dym54q"}">${escape(error)}</h2>` : ``}
	${CodeError.length != 0 ? `<h2 class="${"svelte-dym54q"}">${escape(CodeError)}</h2>` : ``}
	<h1 class="${"svelte-dym54q"}">Enter Code!!</h1>
	<input type="${"text"}" placeholder="${"code"}" class="${"svelte-dym54q"}"${add_attribute("value", code, 0)}>
	<div class="${"btnContainer svelte-dym54q"}"><div class="${"flexButton svelte-dym54q"}"><a${add_attribute("href", code.length === 0 ? " " : `dumb/${code}`, 0)}><button class="${"svelte-dym54q"}">Done?</button></a>
			<a href="${"/create"}"><button class="${"svelte-dym54q"}">Create?</button></a></div></div>
</div>`;
});
export { Routes as default };
