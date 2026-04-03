import { Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CompetitorTracker() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Target className="h-8 w-8" />
        <div>
          <h1 className="text-3xl font-bold">Competitor Tracker</h1>
          <p className="text-muted-foreground">
            Monitor competitor activity and strategies
          </p>
        </div>
        <Badge variant="secondary" className="ml-auto">
          Coming Soon
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Competitor Profiles</CardTitle>
            <CardDescription>
              Track key competitors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Add and monitor competitor accounts, track their follower counts,
              posting frequency, and engagement rates.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Analysis</CardTitle>
            <CardDescription>
              Analyze what works for competitors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Identify top-performing competitor content, trending topics, and
              content strategies you can adapt.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Position</CardTitle>
            <CardDescription>
              Benchmark your performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Compare your metrics against competitors to understand your market
              position and identify growth opportunities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
