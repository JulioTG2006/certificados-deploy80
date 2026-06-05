import { c as createComponent } from './astro-component_4p_HsLBr.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, n as renderHead, o as renderComponent, p as renderSlot } from './entrypoint_WW_rhUau.mjs';
import { r as renderScript } from './global_DnnWGwHs.mjs';
import 'clsx';

const $$SidebarAdmin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="w-72 bg-slate-900 text-white min-h-screen p-6 flex flex-col"> <h2 id="sidebarTitle" class="text-3xl font-bold mb-10">
ADMIN PANEL
</h2> <nav class="flex flex-col gap-4 flex-1"> <a href="/admin" class="hover:bg-slate-800 px-4 py-3 rounded-xl transition">
Dashboard
</a> <a href="/admin/usuarios" class="solo-admin hover:bg-slate-800 px-4 py-3 rounded-xl transition">
Usuarios
</a> <a href="/admin/certificados" class="hover:bg-slate-800 px-4 py-3 rounded-xl transition">
Certificados
</a> <a href="/admin/solicitudes" class="hover:bg-slate-800 px-4 py-3 rounded-xl transition">
Solicitudes
</a> <a href="/admin/perfil" class="hover:bg-slate-800 px-4 py-3 rounded-xl transition">
Mi Perfil
</a> </nav> <button id="logoutBtn" class="bg-red-500 text-white px-4 py-3 rounded-xl hover:bg-red-600 w-full transition">
Cerrar sesión
</button> </aside> ${renderScript($$result, "C:/PROYECTO5TO/certificados80-roto/certificados/src/components/navigation/SidebarAdmin.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/PROYECTO5TO/certificados80-roto/certificados/src/components/navigation/SidebarAdmin.astro", void 0);

const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title = "Admin" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body class="bg-slate-100 min-h-screen"> <div class="flex"> ${renderComponent($$result, "SidebarAdmin", $$SidebarAdmin, {})} <main class="flex-1 p-8"> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "C:/PROYECTO5TO/certificados80-roto/certificados/src/layouts/AdminLayout.astro", void 0);

const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Editar Certificado" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white rounded-3xl shadow-md p-8"> <h1 class="text-3xl font-bold text-slate-800 mb-2">
Editar Modelo
</h1> <p class="text-gray-500 mb-8">
Actualiza la información del certificado.
</p> <div class="space-y-6"> <div> <label class="block mb-2 font-semibold">
Nombre
</label> <input id="nombre" type="text" class="w-full border rounded-xl px-4 py-3"> </div> <div> <label class="block mb-2 font-semibold">
Descripción
</label> <textarea id="descripcion" rows="5" class="w-full border rounded-xl px-4 py-3"></textarea> </div> <button id="guardarBtn" class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
Guardar cambios
</button> <a href="/admin/certificados" class="ml-4 bg-gray-500 text-white px-6 py-3 rounded-xl hover:bg-gray-600 transition">
Volver
</a> <p id="mensaje" class="font-semibold mt-4"></p> </div> </div> ${renderScript($$result2, "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/admin/certificados/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/admin/certificados/[id].astro", void 0);

const $$file = "C:/PROYECTO5TO/certificados80-roto/certificados/src/pages/admin/certificados/[id].astro";
const $$url = "/admin/certificados/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
