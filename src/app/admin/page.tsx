import { AlertTriangle, Inbox, Mail, Phone, Timer } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import { getClientOrders } from "@/db/orders";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let orders: Awaited<ReturnType<typeof getClientOrders>> = [];
  let errorMessage = "";

  try {
    orders = await getClientOrders();
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : "Unable to load client orders from the database.";
  }

  const newOrders = orders.filter((order) => order.status === "new").length;
  const recentOrders = orders.slice(0, 8);

  return (
    <main className="min-h-screen bg-surface-950 px-4 py-6 text-surface-200 sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-120px] top-20 h-[360px] w-[360px] rounded-full bg-primary-600/12 blur-[110px]" />
        <div className="absolute right-[-140px] top-1/3 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-300">
              BrithtonX Admin
            </p>
            <h1 className="mt-2 text-4xl font-black text-white">Client orders</h1>
          </div>
          <a
            href="/"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Back to portfolio
          </a>
        </div>

        {errorMessage && (
          <GlassCard className="mb-5 rounded-[28px] p-5">
            <div className="flex items-start gap-3 text-red-200">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h2 className="font-black text-white">Database unavailable</h2>
                <p className="mt-1 text-sm leading-6 text-red-100/75">{errorMessage}</p>
              </div>
            </div>
          </GlassCard>
        )}

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          <GlassCard className="rounded-[28px] p-5">
            <div className="flex items-center gap-3">
              <Inbox className="h-5 w-5 text-accent-300" />
              <span className="text-sm font-bold text-surface-200/60">Total</span>
            </div>
            <div className="mt-4 text-4xl font-black text-white">{orders.length}</div>
          </GlassCard>
          <GlassCard className="rounded-[28px] p-5">
            <div className="flex items-center gap-3">
              <Timer className="h-5 w-5 text-accent-300" />
              <span className="text-sm font-bold text-surface-200/60">New</span>
            </div>
            <div className="mt-4 text-4xl font-black text-white">{newOrders}</div>
          </GlassCard>
          <GlassCard className="rounded-[28px] p-5">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent-300" />
              <span className="text-sm font-bold text-surface-200/60">Latest</span>
            </div>
            <div className="mt-4 text-4xl font-black text-white">
              {recentOrders.length}
            </div>
          </GlassCard>
        </div>

        <GlassCard className="rounded-[30px] p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-black text-white">Recent quote requests</h2>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-surface-200/60">
              Neon database
            </span>
          </div>

          {recentOrders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-separate border-spacing-y-3 text-left">
                <thead className="text-xs uppercase tracking-[0.18em] text-surface-200/45">
                  <tr>
                    <th className="px-4 py-2">Client</th>
                    <th className="px-4 py-2">Project</th>
                    <th className="px-4 py-2">Budget</th>
                    <th className="px-4 py-2">Timeline</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="rounded-2xl bg-white/[0.04]">
                      <td className="rounded-l-2xl px-4 py-4">
                        <div className="font-black text-white">{order.name}</div>
                        <div className="mt-1 flex flex-wrap gap-2 text-xs text-surface-200/55">
                          <span>{order.email}</span>
                          {order.phone && (
                            <span className="inline-flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {order.phone}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="font-bold text-white">{order.projectTitle}</div>
                        <div className="mt-1 text-xs text-surface-200/55">
                          {order.category} / {order.subcategory}
                        </div>
                        <p className="mt-2 line-clamp-2 max-w-md text-xs leading-5 text-surface-200/45">
                          {order.details}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm font-bold text-surface-200/70">
                        {order.budget}
                      </td>
                      <td className="px-4 py-4 text-sm font-bold text-surface-200/70">
                        {order.timeline}
                      </td>
                      <td className="rounded-r-2xl px-4 py-4">
                        <span className="rounded-full bg-accent-300/10 px-3 py-1 text-xs font-black uppercase text-accent-200">
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-8 text-center">
              <p className="text-sm font-semibold text-surface-200/60">
                No quote requests have been saved yet.
              </p>
            </div>
          )}
        </GlassCard>
      </div>
    </main>
  );
}
