import { useState } from 'react'

export default function Notices() {
  const [notices] = useState([])

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">Notices</h2>
        <button className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-slate-800">
          New Notice
        </button>
      </div>
      {notices.length === 0 ? (
        <div className="rounded-lg bg-white p-6 text-center text-sm text-slate-400 shadow-sm">
          No notices published yet
        </div>
      ) : (
        <ul className="space-y-3">
          {notices.map((notice) => (
            <li key={notice.id} className="rounded-lg bg-white p-4 shadow-sm">
              <p className="font-medium text-slate-800">{notice.title}</p>
              <p className="text-sm text-slate-500">{notice.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
