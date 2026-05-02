const projects = [
  { nombre: 'Lanzamiento comunidad', progreso: 72, responsables: 'Ana + Carlos' },
  { nombre: 'Eventos de mayo', progreso: 45, responsables: 'Sofía + Marco' },
  { nombre: 'Base de conocimiento', progreso: 30, responsables: 'Tú + Elena' }
];

const agenda = [
  { hora: '08:30', tarea: 'Revisión rápida del panel' },
  { hora: '10:00', tarea: 'Bloque enfoque: Proyecto principal' },
  { hora: '12:30', tarea: 'Check-in con equipo (15 min)' },
  { hora: '16:00', tarea: 'Cerrar pendientes y plan de mañana' }
];

const equipo = [
  { nombre: 'Ana', estado: 'En foco', prioridad: 'Diseño de proceso' },
  { nombre: 'Carlos', estado: 'Disponible', prioridad: 'Automatización' },
  { nombre: 'Sofía', estado: 'Reunión', prioridad: 'Comunicaciones' },
  { nombre: 'Marco', estado: 'En foco', prioridad: 'Operación diaria' },
  { nombre: 'Elena', estado: 'Disponible', prioridad: 'Documentación' },
  { nombre: 'Luis', estado: 'Pausa', prioridad: 'Soporte' },
  { nombre: 'Tú', estado: 'Liderando', prioridad: 'Prioridades semanales' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <section className="mx-auto max-w-7xl space-y-6">
        <header className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm text-cyan-300">VidaOS • Dashboard del equipo</p>
          <h1 className="mt-2 text-2xl md:text-4xl font-bold">Centro de Proyectos y Organización Diaria</h1>
          <p className="mt-3 text-slate-300 max-w-3xl">
            Vista pensada para PC y móvil, en español, para coordinar a 7 personas cercanas con enfoque en resultados y claridad.
          </p>
          <a href="/sandbox" className="mt-4 inline-block rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900">
            Ir al sandbox de pruebas
          </a>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-lg font-semibold">Proyectos activos</h2>
            <div className="mt-4 space-y-4">
              {projects.map((project) => (
                <article key={project.nombre} className="rounded-xl bg-slate-800/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-medium">{project.nombre}</h3>
                    <span className="text-sm text-cyan-300">{project.progreso}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded bg-slate-700">
                    <div className="h-2 rounded bg-cyan-400" style={{ width: `${project.progreso}%` }} />
                  </div>
                  <p className="mt-2 text-sm text-slate-300">Responsables: {project.responsables}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-lg font-semibold">Hoy</h2>
            <ul className="mt-4 space-y-3">
              {agenda.map((item) => (
                <li key={item.hora} className="rounded-lg bg-slate-800/70 p-3">
                  <p className="text-sm text-cyan-300">{item.hora}</p>
                  <p className="text-sm">{item.tarea}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-lg font-semibold">Estado del equipo (7 personas)</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {equipo.map((persona) => (
              <article key={persona.nombre} className="rounded-xl bg-slate-800/70 p-4">
                <p className="font-medium">{persona.nombre}</p>
                <p className="text-sm text-cyan-300">{persona.estado}</p>
                <p className="mt-1 text-sm text-slate-300">Prioridad: {persona.prioridad}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
