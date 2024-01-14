"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

export function NewsletterCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    window.location.href = `https://magic.beehiiv.com/v1/9732691c-dbb3-4873-b19c-1489caa9e0ba?email=${email}&redirect_to=https://alicalimli.com/`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ali’s Newsletter</CardTitle>
        <CardDescription>
          Join 1k+ developers getting tips, strategies, and resources that would
          help you succeed in your web dev journey.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <Button className="w-40">Join In</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
