"use client";

// Formulario de pago (solo UI)
// - Sin estados, sin lógica, sin fetch
// - Solo JSX + Tailwind

export default function FormularioPago() {
  return (
    <div className="mt-14 md:mt-15 min-h-screen bg-gray-50">
      <main className="mx-auto max-w-6xl px-3 sm:px-4 py-6 sm:py-10">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Completa tus datos para continuar con la compra
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Tus datos se usarán solo para procesar el pedido y generar el comprobante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card: Formulario */}
          <section className="lg:col-span-2 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Nombre</span>
                  <input
                    name="nombre_comprador"
                    type="text"
                    className="p-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder:text-gray-400 py-2"
                    placeholder="Ej.: María"
                    autoComplete="given-name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Apellidos</span>
                  <input
                    name="apellidosComprador"
                    type="text"
                    className="p-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder:text-gray-400 py-2"
                    placeholder="Ej.: López González"
                    autoComplete="family-name"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="text-sm font-medium text-gray-700">Teléfono</span>
                  <input
                    name="telefono_comprador"
                    type="tel"
                    className="p-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder:text-gray-400 py-2"
                    placeholder="+56 9 1234 5678"
                    autoComplete="tel"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Email</span>
                  <input
                    name="email_Comprador"
                    type="email"
                    className="p-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder:text-gray-400 py-2"
                    placeholder="Ej.: tucorreo@gmail.com"
                    autoComplete="email"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="text-sm font-medium text-gray-700">RUT/DNI</span>
                  <input
                    name="identificacion_comprador"
                    type="text"
                    className="p-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder:text-gray-400 py-2"
                    placeholder="Ej.: 11.111.111-1"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Dirección despacho</span>
                  <input
                    name="direccion_despacho"
                    type="text"
                    className="p-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder:text-gray-400 py-2"
                    placeholder="Ej.: Alameda 123"
                    autoComplete="street-address"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Comuna</span>
                  <input
                    name="comuna"
                    type="text"
                    className="p-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder:text-gray-400 py-2"
                    placeholder="Ej.: San Carlos"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Región / País</span>
                  <input
                    name="regionPais"
                    type="text"
                    className="p-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder:text-gray-400 py-2"
                    placeholder="Ej.: Los Ríos / Chile"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="text-sm font-medium text-gray-700">Comentarios</span>
                  <textarea
                    name="comentarios"
                    rows={4}
                    className="p-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder:text-gray-400 py-2"
                    placeholder="Ej.: Referencia para la entrega (casa interior, color azul)"
                  />
                </label>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  Continuar con Pago
                </button>

                <span className="text-xs text-gray-500 hidden sm:inline">
                  Serás redirigido al portal de pago seguro.
                </span>
              </div>
            </form>
          </section>

          {/* Card: Resumen del pedido (solo UI) */}
          <aside className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 h-fit">
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-lg font-semibold text-gray-900">Resumen del pedido</h2>
              <p className="mt-1 text-sm text-gray-500">Revisa los productos antes de continuar.</p>

              <div className="mt-6 space-y-4">
                <ul className="divide-y divide-gray-100">
                  <li className="py-2.5 flex items-start justify-between gap-3 sm:gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Producto</p>
                      <p className="mt-0.5 text-xs text-gray-500">
                        Cantidad: <span className="font-medium text-gray-700">1</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-700">$—</p>
                      <p className="text-xs text-gray-500">Subtotal: $—</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Total a pagar</span>
                  <span className="text-lg font-semibold text-gray-900">$—</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Total con descuento</span>
                  <span className="text-lg font-semibold text-green-600">$—</span>
                </div>

                <div className="mt-2 text-xs text-gray-400 font-extralight">Descuento aplicado: —%</div>

                <div className="mt-3 text-xs text-gray-500">Los precios están expresados en CLP.</div>
              </div>
            </div>
          </aside>

          {/* Card: Cupón (solo UI) */}
          <div className="rounded-2xl shadow-sm ring-1 ring-gray-200 bg-white lg:col-span-3">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end gap-3">
                <label className="block w-full sm:max-w-sm">
                  <span className="text-sm font-bold text-gray-700">Cupón</span>
                  <input
                    name="codigoVerificadorCupon"
                    type="text"
                    className="p-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-gray-900 placeholder:text-gray-400 py-2"
                    placeholder="(Opcional)"
                  />
                </label>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  Aplicar cupón descuento
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}