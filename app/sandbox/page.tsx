'use client';

import { useMemo, useState } from 'react';

type Task = { id: number; titulo: string; tipo: 'Proyecto' | 'Día a día'; done: boolean };

const initialTasks: Task[] = [
  { id: 1, titulo: 'Definir objetivo semanal', tipo: 'Proyecto', done: false },
  { id: 2, titulo: 'Revisión diaria con equipo', tipo: 'Día a día', done: false },
  { id: 3, titulo: 'Actualizar tablero', tipo: 'Proyecto', done: true }
];

export default function SandboxPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState<Task['tipo']>('Día a día');

  const stats = useMemo(() => {
    const total = tasks.length;
    const completadas = tasks.filter((t) => t.done).length;
    const pendientes = total - completadas;
    return { total, completadas, pendientes };
  }, [tasks]);

  const addTask = () => {
    if (!titulo.trim()) return;
    setTasks((prev) => [...prev, { id: Date.now(), titulo: titulo.trim(), tipo, done: false }]);
    setTitulo('');
  };

  const toggleTask = (id: number) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <section className="mx-auto max-w-4xl space-y-6">
        <header className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm text-cyan-300">Sandbox VidaOS</p>
          <h1 className="mt-2 text-2xl font-bold">Entorno de pruebas rápido</h1>
          <p className="mt-2 text-slate-300">Aquí puedes probar cambios de flujo antes de pasarlos al dashboard principal.</p>
        </header>

        <section className="grid gap-3 sm:grid-cols-3">
          <Card label="Total" value={stats.total} />
          <Card label="Pendientes" value={stats.pendientes} />
          <Card label="Completadas" value={stats.completadas} />
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
          <h2 className="text-lg font-semibold">Crear tarea de prueba</h2>
          <div className="grid gap-3 md:grid-cols-[1fr_180px_120px]">
            <input
              className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2"
              placeholder="Ej. Preparar reunión de lunes"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <select
              className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2"
              value={tipo}
              onChange={(e) => setTipo(e.target.value as Task['tipo'])}
            >
              <option>Día a día</option>
              <option>Proyecto</option>
            </select>
            <button className="rounded-lg bg-cyan-500 text-slate-900 font-semibold" onClick={addTask}>
              Agregar
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-lg font-semibold">Lista de pruebas</h2>
          <ul className="mt-4 space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between gap-3 rounded-lg bg-slate-800/70 p-3">
                <button className="text-left flex-1" onClick={() => toggleTask(task.id)}>
                  <p className={task.done ? 'line-through text-slate-400' : ''}>{task.titulo}</p>
                  <p className="text-xs text-cyan-300">{task.tipo}</p>
                </button>
                <button className="text-xs text-rose-300" onClick={() => removeTask(task.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

function Card({ label, value }: { label: string; value: number }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
      <p className="text-sm text-slate-300">{label}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </article>
  );
}
