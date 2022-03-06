import { c as create_ssr_component, e as escape } from "../../../chunks/index-63796eb4.js";
import { supabase } from "../../endpoints/supabase.js";
import "@supabase/supabase-js";
var _room__svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-ri59mc{display:flex;flex-direction:column;align-items:center;align-content:center;justify-content:center}.con.svelte-ri59mc{background:pink;padding:50px;border-radius:20px;top:10%;display:flex;position:absolute;flex-direction:column;align-items:center;justify-content:center}code.svelte-ri59mc{font-family:monospace;background:#fff;padding:10px;border-radius:10px;font-weight:1000;font-size:35px;width:100%;margin:10px;text-align:center}button.svelte-ri59mc{width:130px;height:40px;background:#fff;border:1px solid pink;border-radius:7px;font-family:monospace;font-weight:1000;font-size:20px}.btnContainer.svelte-ri59mc{position:absolute;top:50%}button.svelte-ri59mc:hover{background:pink;cursor:pointer}h1.svelte-ri59mc{font-family:monospace;position:absolute;top:43%;text-align:center}",
  map: null
};
async function load({ params }) {
  const room = params.room;
  const { data } = await supabase.from("dumbpost").select().match({ code: room });
  if (data.length === 0) {
    return {
      status: 302,
      error: new Error("Enter A Valid code")
    };
  } else {
    return { props: { data } };
  }
}
const U5Broomu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let left = 50;
  let top = 50;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"container svelte-ri59mc"}">${`<h1 class="${"svelte-ri59mc"}">Are You dumb?</h1>
		<div class="${"btnContainer svelte-ri59mc"}"><button style="${"top:50%;"}" class="${"svelte-ri59mc"}">Yes</button>
			<button style="${escape("") + "top:" + escape(top) + "%;left:" + escape(left) + "%"}" class="${"svelte-ri59mc"}">No</button></div>`}
</div>`;
});
export { U5Broomu5D as default, load };
