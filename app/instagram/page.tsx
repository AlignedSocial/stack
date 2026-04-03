import { Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function InstagramManager() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Camera className="h-8 w-8" />
        <div>
          <h1 className="text-3xl font-bold">Instagram Manager</h1>
          <p className="text-muted-foreground">
            Manage your Instagram content and engagement
          </p>
        </div>
        <Badge variant="secondary" className="ml-auto">
          Coming Soon
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Post Scheduler</CardTitle>
            <CardDescription>
              Schedule and automate your Instagram posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Plan your content calendar, set publish times, and manage drafts
              all in one place.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Metrics</CardTitle>
            <CardDescription>
              Track likes, comments, and reach
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Monitor your engagement rates, follower growth, and content
              performance over time.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SEO Keywords Manager</CardTitle>
            <CardDescription>
              Optimize your content for discoverability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Research trending keywords, track rankings, and optimize your
              posts for maximum reach.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
