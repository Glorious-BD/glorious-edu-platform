"use client";

import { useState } from "react";
import { ShieldAlert, Terminal, Calendar, Eye, Activity } from "lucide-react";

interface AuditLog {
  id: string;
  userId: string;
  action: string;
  entity: string;
  entityId: string;
  metadata: string;
  createdAt: string;
}

const SYSTEM_AUDIT_LOGS: AuditLog[] = [
  {
    id: "log-102",
    userId: "USR-0041-ADM",
    action: "BATCH_ENROLLMENT_CREATE",
    entity: "enrollments",
    entityId: "enr_uuid_9018",
    metadata: '{"student_code":"STU-2025-0849","batch_id":"CH-Beta-02"}',
    createdAt: "2025-05-11 14:32:10",
  },
  {
    id: "log-101",
    userId: "USR-0023-TCH",
    action: "DIAGNOSTIC_EXAM_RESULT_ENTRY",
    entity: "results",
    entityId: "res_uuid_4412",
    metadata: '{"exam_id":"ex_uuid_009","obtained_marks":94}',
    createdAt: "2025-05-11 11:20:45",
  },
];

export default function AdminAuditLogsPage() {
  const [logs] = useState<AuditLog[]>(SYSTEM_AUDIT_LOGS);

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-8">
        
        {/* Module Header */}
        <div className="pb-6 border-b border-border">
          <span className="text-xs font-bold text-danger uppercase tracking-widest flex items-center gap-1">
            <ShieldAlert size={14} /> Security Compliance Hub
          </span>
          <h1 className="text-h2 font-extrabold text-primary mt-1">Audit Logs Console</h1>
        </div>

        {/* Audit Logs Table Layout */}
        <div className="bg-white border border-border rounded-large overflow-hidden shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-surface border-b border-border text-[10px] font-bold uppercase tracking-wider text-primary/40">
                <tr>
                  <th className="p-4 lg:p-5">Time</th>
                  <th className="p-4 lg:p-5">Operator ID</th>
                  <th className="p-4 lg:p-5">Trigger Action</th>
                  <th className="p-4 lg:p-5">Entity</th>
                  <th className="p-4 lg:p-5">Change details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-primary/70">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-surface/35 transition-colors">
                    <td className="p-4 lg:p-5 text-xs font-semibold whitespace-nowrap">
                      <span className="flex items-center gap-1.5 text-primary/60">
                        <Calendar size={13} /> {log.createdAt}
                      </span>
                    </td>
                    <td className="p-4 lg:p-5 font-mono text-xs text-primary">{log.userId}</td>
                    <td className="p-4 lg:p-5 font-semibold text-xs whitespace-nowrap text-secondary">
                      {log.action}
                    </td>
                    <td className="p-4 lg:p-5 text-xs uppercase font-bold text-primary/50">{log.entity}</td>
                    <td className="p-4 lg:p-5">
                      <code className="bg-surface text-[10px] p-2 rounded block font-mono border border-border text-primary/70 max-w-sm overflow-x-auto scrollbar-none">
                        {log.metadata}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}