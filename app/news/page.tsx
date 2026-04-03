import { Newspaper } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NewsConsolidator() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Newspaper className="h-8 w-8" />
        <div>
          <h1 className="text-3xl font-bold">News Consolidator</h1>
          <p className="text-muted-foreground">
            Stay updated with industry news and trends
          </p>
        </div>
        <Badge variant="secondary" className="ml-auto">
          Coming Soon
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Trending Topics</CardTitle>
            <CardDescription>
              Discover what&apos;s trending now
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Real-time trending topics and hashtags across social platforms to
              help you stay relevant.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Saved Articles</CardTitle>
            <CardDescription>
              Curate your reading list
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Save and organize articles for content inspiration, team sharing,
              and reference material.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>News Feeds</CardTitle>
            <CardDescription>
              Customized industry news streams
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Aggregated news feeds from industry sources, blogs, and social
              media channels tailored to your niche.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
