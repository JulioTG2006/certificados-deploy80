import { c as createComponent } from './astro-component_Bdae38NP.mjs';
import 'piccolore';
import { o as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CgqhnsYI.mjs';
import { r as renderScript } from './global_BSniN4wy.mjs';
import { $ as $$UserLayout } from './UserLayout_CNZ64iMR.mjs';

const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "UserLayout", $$UserLayout, { "title": "Nueva Solicitud" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white rounded-3xl shadow-md p-8 max-w-3xl"> <h1 class="text-3xl font-bold text-slate-800 mb-2">
Solicitar Certificado
</h1> <p class="text-gray-500 mb-8">
Completa el motivo de tu solicitud.
</p> <div class="space-y-6"> <div> <label class="block font-semibold mb-2">
Certificado
</label> <input id="modelo" disabled class="w-full border rounded-xl px-4 py-3 bg-gray-100"> </div> <div> <label class="block font-semibold mb-2">
Motivo
</label> <textarea id="motivo" rows="5" class="w-full border rounded-xl px-4 py-3" placeholder="Escribe el motivo de tu solicitud..."></textarea> </div> <button id="enviarBtn" class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
Enviar Solicitud
</button> <p id="mensaje" class="font-semibold"></p> </div> </div> ${renderScript($$result2, "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/solicitudes/nueva/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/solicitudes/nueva/[id].astro", void 0);

const $$file = "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/solicitudes/nueva/[id].astro";
const $$url = "/solicitudes/nueva/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
