import { useState } from 'react'

export default function Teachers() {
  const [teachers] = useState([])

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">Teachers</h2>
        <button className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-slate-800">
          Add Teacher
        </button>
      </div>
      <div className="overflow-hidden rounded-lg bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-500">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Salary</th>
              <th className="px-4 py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                  No teachers yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
