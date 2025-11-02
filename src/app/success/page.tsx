import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Success() {
    return (
        <div className="min-h-screen bg-background p-6 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 text-center">
                <div className="space-y-4">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-purple-600" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold">Success!</h1>
                    <p className="text-muted-foreground">Your dashboard has been created in OpenObserve</p>
                </div>

                <div className="space-y-3">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                        VIEW IN OPENOBSERVE
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                        DOWNLOAD JSON
                    </Button>
                    <Link href="/">
                        <Button variant="ghost" className="w-full" size="lg">
                            START NEW DASHBOARD
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}