const stats = [
  { label: 'Students', value: 10 },
  { label: 'Teachers', value: 5 },
  { label: 'Classes', value: 10 },
  { label: 'Fees Collected', value: '₹0' },
]

export default function Dashboard() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-white p-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-800">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
