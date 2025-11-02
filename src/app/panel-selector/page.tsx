'use client';

import { useState } from 'react';
import { PanelCard } from '@/components/PanelCard';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface Panel {
    id: string;
    name: string;
    type: 'bar' | 'gauge' | 'table' | 'funnel' | 'heatmap';
    description: string;
    checked: boolean;
}

export default function PanelSelector() {
    const [universalOpen, setUniversalOpen] = useState(true);
    const [flowOpen, setFlowOpen] = useState(true);
    const [customOpen, setCustomOpen] = useState(false);

    // Universal Panels (Always Included)
    const universalPanels: Panel[] = [
        { id: 'click_count', name: 'Click Count by Button', type: 'bar', description: 'Analyze click distribution across buttons', checked: true },
        { id: 'error_rate', name: 'Error Rate %', type: 'gauge', description: 'Real-time error percentage tracking', checked: true },
        { id: 'visits_per_view', name: 'Visits per View', type: 'table', description: 'Page-wise visit distribution', checked: true },
        { id: 'conversion_funnel', name: 'Conversion Funnel', type: 'funnel', description: 'Track user journey through conversion steps', checked: true },
    ];

    // Flow Panels (AI-Suggested)
    const flowPanels: Panel[] = [
        { id: 'click_heatmap', name: 'Click Heatmap', type: 'heatmap', description: 'Hourly click distribution pattern', checked: true },
        { id: 'top_elements', name: 'Top Clicked Elements', type: 'bar', description: 'Most popular UI elements', checked: true },
        { id: 'field_abandonment', name: 'Field Abandonment Rate', type: 'gauge', description: 'Form field drop-off metrics', checked: false },
    ];

    // Custom Panels (YAML + AI)
    const customPanels: Panel[] = [
        { id: 'help_by_type', name: 'Help Request by Patient Type', type: 'bar', description: 'Support requests segmented by user type', checked: false },
        { id: 'pharmacy_events', name: 'Pharmacy Module Events', type: 'bar', description: 'Pharmacy-specific interaction tracking', checked: false },
    ];

    const [customInput, setCustomInput] = useState('');
    const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);

    const handleAiGenerate = () => {
        // Mock AI response
        setAiSuggestion(`-- Errors by Browser\nSELECT user_agent, COUNT(*) FILTER (WHERE error = true) AS "ERRORS"\nFROM web_analytics GROUP BY user_agent`);
    };

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-5xl mx-auto space-y-6">
                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">Detected: onClick in appointment context</h1>
                    <p className="text-muted-foreground">Select panels to include in your dashboard</p>
                </div>

                {/* TIER 1: UNIVERSAL */}
                <div className="rounded-lg border bg-card">
                    <button
                        onClick={() => setUniversalOpen(!universalOpen)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-accent/50 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold text-purple-600">1</span>
                            <span className="font-medium">TIER 1: UNIVERSAL (Always Included)</span>
                        </div>
                        {universalOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {universalOpen && (
                        <div className="p-4 space-y-3 border-t">
                            {universalPanels.map((panel) => (
                                <PanelCard key={panel.id} panel={panel} disabled />
                            ))}
                        </div>
                    )}
                </div>

                {/* TIER 2: FLOW */}
                <div className="rounded-lg border bg-card">
                    <button
                        onClick={() => setFlowOpen(!flowOpen)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-accent/50 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold text-purple-600">2</span>
                            <span className="font-medium">TIER 2: FLOW (AI-Suggested)</span>
                        </div>
                        {flowOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {flowOpen && (
                        <div className="p-4 space-y-3 border-t">
                            {flowPanels.map((panel) => (
                                <PanelCard key={panel.id} panel={panel} />
                            ))}
                        </div>
                    )}
                </div>

                {/* TIER 3: CUSTOM */}
                <div className="rounded-lg border bg-card">
                    <button
                        onClick={() => setCustomOpen(!customOpen)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-accent/50 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold text-purple-600">3</span>
                            <span className="font-medium">TIER 3: CUSTOM (AI + YAML Config)</span>
                        </div>
                        {customOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {customOpen && (
                        <div className="p-4 space-y-3 border-t">
                            {customPanels.map((panel) => (
                                <PanelCard key={panel.id} panel={panel} />
                            ))}

                            {/* AI Generation */}
                            <div className="mt-4 p-4 border rounded-lg bg-accent/10">
                                <p className="text-sm font-medium mb-2">Add Custom Panel (AI Generation)</p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="e.g., Show errors by browser"
                                        value={customInput}
                                        onChange={(e) => setCustomInput(e.target.value)}
                                        className="flex-1 px-3 py-2 border rounded-md text-sm"
                                    />
                                    <Button onClick={handleAiGenerate} size="sm">
                                        AI Generate SQL
                                    </Button>
                                </div>
                                {aiSuggestion && (
                                    <pre className="mt-2 p-2 bg-muted text-xs rounded overflow-x-auto">
                    {aiSuggestion}
                  </pre>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                    <Link href="/">
                        <Button variant="outline">Back</Button>
                    </Link>
                    <Link href="/preview">
                        <Button className="bg-purple-600 hover:bg-purple-700">
                            Continue to Preview →
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}