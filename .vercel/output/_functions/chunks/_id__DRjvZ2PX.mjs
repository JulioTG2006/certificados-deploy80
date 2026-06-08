import { c as createComponent } from './astro-component_Bdae38NP.mjs';
import 'piccolore';
import { o as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CgqhnsYI.mjs';
import { $ as $$UserLayout } from './UserLayout_CNZ64iMR.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "UserLayout", $$UserLayout, { "title": "Detalle Solicitud" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div id="detalleContainer" class="bg-white rounded-3xl shadow-md p-8"> <h1 class="text-3xl font-bold">\nCargando...\n</h1> </div> <script>\n\n  const token = localStorage.getItem("token");\n\n  async function cargarDetalle() {\n\n    try {\n\n      const id = window.location.pathname.split("/").pop();\n\n      const response = await fetch(\n        `${import.meta.env.PUBLIC_API_URL}/api/solicitudes/${id}`,\n        {\n          headers: {\n            Authorization: `Bearer ${token}`\n          }\n        }\n      );\n\n      const solicitud = await response.json();\n\n      const container = document.getElementById("detalleContainer");\n\n      container.innerHTML = `\n        <h1 class="text-4xl font-bold text-slate-800 mb-6">\n          ${solicitud.modelo}\n        </h1>\n\n        <div class="space-y-4">\n          <div>\n            <strong>Estado:</strong>\n            ${solicitud.estado}\n          </div>\n\n          <div>\n            <strong>Motivo:</strong>\n            ${solicitud.motivo}\n          </div>\n\n          <div>\n            <strong>Fecha:</strong>\n            ${new Date(solicitud.fecha_solicitud).toLocaleDateString()}\n          </div>\n\n          ${\n            solicitud.observacion\n              ? `<div>\n                   <strong>Observación:</strong>\n                   ${solicitud.observacion}\n                 </div>`\n              : ""\n          }\n\n          <a\n            href="/solicitudes"\n            class="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"\n          >\n            Volver\n          </a>\n        </div>\n      `;\n\n    } catch (error) {\n      console.error(error);\n    }\n\n  }\n\n  cargarDetalle();\n\n</script> '], [" ", '<div id="detalleContainer" class="bg-white rounded-3xl shadow-md p-8"> <h1 class="text-3xl font-bold">\nCargando...\n</h1> </div> <script>\n\n  const token = localStorage.getItem("token");\n\n  async function cargarDetalle() {\n\n    try {\n\n      const id = window.location.pathname.split("/").pop();\n\n      const response = await fetch(\n        \\`\\${import.meta.env.PUBLIC_API_URL}/api/solicitudes/\\${id}\\`,\n        {\n          headers: {\n            Authorization: \\`Bearer \\${token}\\`\n          }\n        }\n      );\n\n      const solicitud = await response.json();\n\n      const container = document.getElementById("detalleContainer");\n\n      container.innerHTML = \\`\n        <h1 class="text-4xl font-bold text-slate-800 mb-6">\n          \\${solicitud.modelo}\n        </h1>\n\n        <div class="space-y-4">\n          <div>\n            <strong>Estado:</strong>\n            \\${solicitud.estado}\n          </div>\n\n          <div>\n            <strong>Motivo:</strong>\n            \\${solicitud.motivo}\n          </div>\n\n          <div>\n            <strong>Fecha:</strong>\n            \\${new Date(solicitud.fecha_solicitud).toLocaleDateString()}\n          </div>\n\n          \\${\n            solicitud.observacion\n              ? \\`<div>\n                   <strong>Observación:</strong>\n                   \\${solicitud.observacion}\n                 </div>\\`\n              : ""\n          }\n\n          <a\n            href="/solicitudes"\n            class="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"\n          >\n            Volver\n          </a>\n        </div>\n      \\`;\n\n    } catch (error) {\n      console.error(error);\n    }\n\n  }\n\n  cargarDetalle();\n\n</script> '])), maybeRenderHead()) })}`;
}, "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/certificados/preview/[id].astro", void 0);
const $$file = "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/certificados/preview/[id].astro";
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
