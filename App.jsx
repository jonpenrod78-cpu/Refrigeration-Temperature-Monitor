
import React, { useState } from 'react'

export default function App() {
  const [systems, setSystems] = useState([{ id: 1, name: "System 1", temps: Array(12).fill("") }])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Refrigeration Temperature Monitor</h1>

      <button
        onClick={() =>
          setSystems([...systems, { id: systems.length + 1, name: "System " + (systems.length + 1), temps: Array(12).fill("") }])
        }
      >
        Add System
      </button>

      <table border="1" cellPadding="6" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>System</th>
            {Array.from({ length: 12 }, (_, i) => <th key={i}>H{i+1}</th>)}
          </tr>
        </thead>
        <tbody>
          {systems.map(sys => (
            <tr key={sys.id}>
              <td>{sys.name}</td>
              {sys.temps.map((t,i) => (
                <td key={i}>
                  <input
                    value={t}
                    onChange={(e) => {
                      const updated = [...systems]
                      updated.find(s => s.id === sys.id).temps[i] = e.target.value
                      setSystems(updated)
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
