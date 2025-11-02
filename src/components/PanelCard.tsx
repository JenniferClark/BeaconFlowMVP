'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { BarChart3, Gauge, Table, Funnel, Grid } from 'lucide-react';

interface Panel {
    id: string;
    name: string;
    type: 'bar' | 'gauge' | 'table' | 'funnel' | 'heatmap';
    description: string;
    checked: boolean;
}

interface PanelCardProps {
    panel: Panel;
    disabled?: boolean;
}

const iconMap = {
    bar: BarChart3,
    gauge: Gauge,
    table: Table,
    funnel: Funnel,
    heatmap: Grid, // ← Grid = Heatmap
};

export function PanelCard({ panel, disabled }: PanelCardProps) {
    const Icon = iconMap[panel.type];

    return (
        <div className={`flex items-start gap-3 p-3 rounded-lg border ${disabled ? 'bg-muted/50' : 'hover:bg-accent/50'} transition-colors`}>
            <Checkbox checked={panel.checked} disabled={disabled} />
            <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{panel.name}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{panel.type}</span>
                </div>
                <p className="text-xs text-muted-foreground">{panel.description}</p>
            </div>
            {/* Mock Preview */}
            <div className="w-20 h-12 bg-muted/30 rounded flex items-center justify-center text-xs text-muted-foreground">
                {panel.type === 'bar' && <div className="flex gap-1 h-full items-end">
                    <div className="w-2 bg-purple-600 h-8 rounded-t"></div>
                    <div className="w-2 bg-purple-600 h-6 rounded-t"></div>
                    <div className="w-2 bg-purple-600 h-4 rounded-t"></div>
                </div>}
                {panel.type === 'gauge' && <span>2%</span>}
                {panel.type === 'table' && <span>P v</span>}
                {panel.type === 'funnel' && <span>750</span>}
                {panel.type === 'heatmap' && <Grid className="w-5 h-5" />} {/* ← Grid icon */}
            </div>
        </div>
    );
}