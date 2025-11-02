'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

const defaultCode = `<HealthAndWellnessAnalytics
  context="appointment"
  name="selectSlot"
  action="onClick"
  payload={{ patientType: "new" }}
/>`;

export function CodeEditor() {
    const [code, setCode] = useState(defaultCode);

    return (
        <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your beacon component here..."
            className="font-mono text-sm h-48 resize-none"
        />
    );
}