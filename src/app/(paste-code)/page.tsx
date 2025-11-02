import { CodeEditor } from '@/components/CodeEditor';
import { ConfigPanel } from '@/components/ConfigPanel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PasteCode() {
    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                    <div className="flex justify-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold">BeaconFlow</h1>
                    <p className="text-muted-foreground">Paste your React beacon code → Get OpenObserve dashboard in 60 seconds</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 border-b">
                    <button className="pb-2 border-b-2 border-purple-600 font-medium">Paste Code</button>
                    <button className="pb-2 text-muted-foreground">Upload YAML</button>
                </div>

                {/* Code Editor */}
                <div className="space-y-4">
                    <h3 className="font-medium">Paste your React beacon code here</h3>
                    <CodeEditor />
                </div>

                {/* Config Panel */}
                <ConfigPanel />

                {/* Button */}
                <div className="flex justify-center">
                    <Link href="/panel-selector">
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                            ANALYZE CODE
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}