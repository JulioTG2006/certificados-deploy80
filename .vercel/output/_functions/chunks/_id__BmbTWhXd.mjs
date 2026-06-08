import { c as createComponent } from './astro-component_DqYaNhpi.mjs';
import 'piccolore';
import { o as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_BaALmVPI.mjs';
import { r as renderScript } from './global_NuZSvstu.mjs';
import { $ as $$UserLayout } from './UserLayout_DNCJaM4z.mjs';

const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "UserLayout", $$UserLayout, { "title": "Detalle Solicitud" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="detalleContainer" class="bg-white rounded-3xl shadow-md p-8"> <h1 class="text-3xl font-bold">
Cargando...
</h1> </div> ${renderScript($$result2, "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/solicitudes/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/solicitudes/[id].astro", void 0);

const $$file = "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/solicitudes/[id].astro";
const $$url = "/solicitudes/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
