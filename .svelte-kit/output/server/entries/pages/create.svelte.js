import { c as create_ssr_component, a as add_attribute, e as escape } from "../../chunks/index-63796eb4.js";
import "../endpoints/supabase.js";
/* empty css                                                      */import "@fortawesome/free-solid-svg-icons";
import "axios";
import "@supabase/supabase-js";
var create_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-3qlfog{display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center}.innerCon.svelte-3qlfog{display:flex;flex-direction:column;align-items:center;position:absolute;top:40%;width:100%}input.svelte-3qlfog{background:pink;border:none;border-radius:7px;font-family:monospace;font-weight:1000;font-size:20px;padding:10px;width:50%;outline:none}.codeModal.svelte-3qlfog{background:pink;padding:30px;width:40%;text-align:center;border-radius:19px;position:absolute;top:50%}a.svelte-3qlfog{text-decoration:none;color:black}h1.svelte-3qlfog{font-family:monospace;background:#fff;padding:10px;border-radius:6px}code.svelte-3qlfog{font-family:monospace;top:40%;background:#fff;padding:10px;border-radius:6px;font-weight:1000;font-size:35px}h2.svelte-3qlfog{font-family:monospace;padding:10px;width:25%;background-color:rgb(231, 52, 52);border-radius:10px;text-align:center}button.svelte-3qlfog{width:190px;height:40px;background:#fff;border:1px solid pink;border-radius:7px;font-family:monospace;font-weight:1000;margin:10px;font-size:20px}button.svelte-3qlfog:hover{background:pink;cursor:pointer}label.svelte-3qlfog{background:#fff;border:1px solid pink;border-radius:7px;font-family:monospace;font-weight:1000;font-size:20px;padding:10px;width:165px;text-align:center;outline:none}label.svelte-3qlfog:hover{background:pink;cursor:pointer}",
  map: null
};
const Create = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let GenCode = "";
  let msg = "";
  let error = "";
  let fileData = "";
  $$result.css.add(css);
  return `<div class="${"container svelte-3qlfog"}">${`${fileData.length != 0 ? `<img style="${"width:350px;border-radius:20px;"}"${add_attribute("src", fileData, 0)} alt="${"ShowInImage"}">` : ``}
		<div class="${"innerCon svelte-3qlfog"}"><h1 style="${"margin: 0px;"}" class="${"svelte-3qlfog"}">${escape(GenCode)}</h1>

			<button class="${"svelte-3qlfog"}">Generate Code!</button>
			<label for="${"files"}" class="${"btn svelte-3qlfog"}">Select Image</label>
			<input style="${"margin:10px;"}" placeholder="${"Enter Message"}" type="${"text"}" class="${"svelte-3qlfog"}"${add_attribute("value", msg, 0)}>

			<input id="${"files"}" style="${"display:none;"}" type="${"file"}" class="${"svelte-3qlfog"}">
			<button style="${"top: 70%;"}" class="${"svelte-3qlfog"}">Submit</button>
			${error.length != 0 ? `<h2 class="${"svelte-3qlfog"}">${escape(error)}</h2>` : ``}</div>`}
	${``}

	
</div>`;
});
export { Create as default };
