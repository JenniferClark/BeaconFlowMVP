'use client';

import { Button } from '@/components/ui/button';
import { BarChart3, Gauge, Table, Funnel, Grid } from 'lucide-react';
import Link from 'next/link';

export default function Preview() {
    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-6xl mx-auto space-y-6">
                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">Dashboard Preview</h1>
                    <p className="text-muted-foreground">This will be created in OpenObserve</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Click Count */}
                    <div className="rounded-lg border bg-card p-6 space-y-3">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-purple-600" />
                            <h3 className="font-medium">Click Count by Button</h3>
                        </div>
                        <div className="h-48 bg-muted/20 rounded flex items-end justify-around p-4">
                            <div className="w-12 bg-purple-600 h-32 rounded-t"></div>
                            <div className="w-12 bg-purple-600 h-24 rounded-t"></div>
                            <div className="w-12 bg-purple-600 h-16 rounded-t"></div>
                            <div className="w-12 bg-purple-600 h-20 rounded-t"></div>
                        </div>
                    </div>

                    {/* Error Rate */}
                    <div className="rounded-lg border bg-card p-6 space-y-3">
                        <div className="flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-purple-600" />
                            <h3 className="font-medium">Error Rate %</h3>
                        </div>
                        <div className="flex items-center justify-center h-48">
                            <div className="relative w-32 h-32">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                    <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        stroke="#9333ea"
                                        strokeWidth="3"
                                        strokeDasharray="75 100"
                                        className="transition-all duration-1000"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-3xl font-bold">2%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visits per View */}
                    <div className="rounded-lg border bg-card p-6 space-y-3">
                        <div className="flex items-center gap-2">
                            <Table className="w-5 h-5 text-purple-600" />
                            <h3 className="font-medium">Visits per View</h3>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Home</span>
                                <span className="font-medium">1,243</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Dashboard</span>
                                <span className="font-medium">892</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Settings</span>
                                <span className="font-medium">456</span>
                            </div>
                        </div>
                    </div>

                    {/* Conversion Funnel */}
                    <div className="rounded-lg border bg-card p-6 space-y-3">
                        <div className="flex items-center gap-2">
                            <Funnel className="w-5 h-5 text-purple-600" />
                            <h3 className="font-medium">Conversion Funnel</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">View</span>
                                <div className="w-48 bg-purple-600 h-8 rounded flex items-center justify-end px-2 text-white text-sm">1000</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Click</span>
                                <div className="w-36 bg-purple-600 h-8 rounded flex items-center justify-end px-2 text-white text-sm">750</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Submit</span>
                                <div className="w-24 bg-purple-600 h-8 rounded flex items-center justify-end px-2 text-white text-sm">450</div>
                            </div>
                        </div>
                    </div>

                    {/* Heatmap */}
                    <div className="rounded-lg border bg-card p-6 space-y-3 md:col-span-2">
                        <div className="flex items-center gap-2">
                            <Grid className="w-5 h-5 text-purple-600" />
                            <h3 className="font-medium">Click Heatmap</h3>
                        </div>
                        <div className="grid grid-cols-7 gap-1 h-32">
                            {Array.from({ length: 49 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`rounded ${
                                        i % 7 === 0 || i % 7 === 6
                                            ? 'bg-purple-200'
                                            : i % 3 === 0
                                                ? 'bg-purple-400'
                                                : i % 2 === 0
                                                    ? 'bg-purple-600'
                                                    : 'bg-purple-100'
                                    }`}
                                />
                            ))}
                        </div>
                        <p className="text-xs text-center text-muted-foreground">Hour of day</p>
                    </div>
                </div>

                {/* Deploy */}
                <div className="flex justify-between">
                    <Link href="/panel-selector">
                        <Button variant="outline">Back</Button>
                    </Link>
                    <Link href="/success">
                        <Button className="bg-purple-600 hover:bg-purple-700">
                            DEPLOY TO OPENOBSERVE
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}