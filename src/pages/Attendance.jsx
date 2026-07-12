import { useState } from 'react'

const STATUSES = ['Present', 'Absent', 'Late']

export default function Attendance() {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [records] = useState([])

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">Attendance</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded-md border px-3 py-1.5 text-sm"
        />
      </div>
      <div className="overflow-hidden rounded-lg bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-500">
            <tr>
              <th className="px-4 py-2">Student</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-slate-400">
                  No attendance records for {date}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-400">Marked as: {STATUSES.join(' / ')}</p>
    </div>
  )
}
