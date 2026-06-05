import { c as createComponent } from './astro-component_CXx34Q1K.mjs';
import 'piccolore';
import { o as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_DVbPku37.mjs';
import { r as renderScript } from './global_DaSEfYEZ.mjs';
import { $ as $$UserLayout } from './UserLayout_PUuhdJOm.mjs';

const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "UserLayout", $$UserLayout, { "title": "Vista Previa Certificado" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-4xl font-bold text-slate-800">
Vista Previa del Certificado
</h1> <p class="text-gray-500 mt-2">
Ejemplo visual del documento.
</p> </div> <div id="previewContainer"> <div class="text-gray-500">
Cargando...
</div> </div> ${renderScript($$result2, "C:/PROYECTO5TO/certificados80/certificados/src/pages/certificados/preview/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/PROYECTO5TO/certificados80/certificados/src/pages/certificados/preview/[id].astro", void 0);

const $$file = "C:/PROYECTO5TO/certificados80/certificados/src/pages/certificados/preview/[id].astro";
const $$url = "/certificados/preview/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
