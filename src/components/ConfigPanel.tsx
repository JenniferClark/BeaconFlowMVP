'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

export function ConfigPanel() {
    const [open, setOpen] = useState(false);
    const [useHook, setUseHook] = useState(false);

    return (
        <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium">
                <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                ADVANCED CONFIG
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 mt-4">
                <div className="flex items-center space-x-2">
                    <Checkbox id="use-hook" checked={useHook} onCheckedChange={(checked) => setUseHook(checked === true)} />
                    <Label htmlFor="use-hook">Use useSendBeacon()</Label>
                </div>

                <div className="space-y-2">
                    <Label>CONTEXT → STREAM</Label>
                    <Input placeholder="health_appointments" />
                </div>

                <div className="space-y-2">
                    <Label>SESSION_ID</Label>
                    <Input placeholder="payload.sessionId" />
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}