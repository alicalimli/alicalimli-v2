import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function NewsletterCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ali’s Newsletter</CardTitle>
        <CardDescription>
          Join 1k+ developers getting tips, strategies, and resources that would
          help you succeed in your web dev journey.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between gap-2">
        <Input id="email" placeholder="Enter your email" />
        <Button className="w-40">Join In</Button>
      </CardFooter>
    </Card>
  );
}
