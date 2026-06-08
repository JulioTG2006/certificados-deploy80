import { c as createComponent } from './astro-component_Bdae38NP.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, n as renderHead, o as renderComponent, p as renderSlot } from './entrypoint_CgqhnsYI.mjs';
import { r as renderScript } from './global_BSniN4wy.mjs';
import 'clsx';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white shadow-md"> <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center"> <div class="text-2xl font-bold text-blue-600">
CERTIFICADOS
</div> <div class="flex gap-6 items-center"> <a href="/dashboard" class="text-gray-700 hover:text-blue-600 font-medium">
Dashboard
</a> <a href="/certificados" class="text-gray-700 hover:text-blue-600 font-medium">
Certificados
</a> <a href="/solicitudes" class="text-gray-700 hover:text-blue-600 font-medium">
Solicitudes
</a> <a href="/perfil" class="text-gray-700 hover:text-blue-600 font-medium">
Perfil
</a> <button id="logoutBtn" class="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600">
Salir
</button> </div> </div> </nav> ${renderScript($$result, "C:/PROYECTO5TO/certificados80-roto/certificados/src/components/navigation/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/PROYECTO5TO/certificados80-roto/certificados/src/components/navigation/Navbar.astro", void 0);

const $$UserLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserLayout;
  const { title = "Dashboard" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body class="bg-slate-100 min-h-screen"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="max-w-7xl mx-auto p-8"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/PROYECTO5TO/certificados80-roto/certificados/src/layouts/UserLayout.astro", void 0);

export { $$UserLayout as $ };
