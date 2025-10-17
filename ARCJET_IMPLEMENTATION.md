# Arcjet Implementation Guide

## Overview

Arcjet has been successfully integrated into your Next.js portfolio to provide enterprise-grade security features including bot detection, rate limiting, and attack protection.

## What Was Implemented

### 1. API Route Protection (`app/api/arcjet/route.ts`)

A demonstration API route that showcases all three Arcjet security features:

- **Shield Protection**: Blocks common attacks like SQL injection, XSS, and other OWASP Top 10 vulnerabilities
- **Bot Detection**: Identifies and blocks automated requests (scrapers, malicious bots)
- **Rate Limiting**: Token bucket algorithm (5 tokens per 10 seconds, 10 token capacity)

### 2. Environment Configuration

Your `.env` file contains:
```
ARCJET_KEY=ajkey_01k7rmbtmje608tmfsvez78taw
```

## Testing the Implementation

### Test Rate Limiting

```bash
# Make multiple rapid requests to hit the rate limit
curl http://localhost:3000/api/arcjet
curl http://localhost:3000/api/arcjet
curl http://localhost:3000/api/arcjet
# After 10 requests, you'll get a 429 Too Many Requests response
```

### Test Bot Detection

```bash
# curl is detected as a bot by default
curl -v http://localhost:3000/api/arcjet
# You should receive a 403 Forbidden response
```

### Test in Browser

Visit `http://localhost:3000/api/arcjet` in your browser - browsers are allowed by default.

## Important: Vercel Deployment Limitation

⚠️ **Arcjet should NOT be added to `middleware.ts` on Vercel's free plan** because:
- Arcjet dependencies increase middleware size to ~1.08 MB
- Vercel free plan has a 1 MB limit for Edge Functions
- This causes deployment failures

### Solution

Use Arcjet protection in:
✅ API routes (like `/api/arcjet/route.ts`)
✅ Server Actions
✅ Individual page server components

❌ Do NOT use in Edge Middleware on free plan

## How to Apply Arcjet to Other Routes

### Protect Another API Route

```typescript
import arcjet, { shield, detectBot } from "@arcjet/next";
import { NextResponse } from "next/server";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({ mode: "LIVE", allow: [] }),
  ],
});

export async function POST(req: Request) {
  const decision = await aj.protect(req);
  
  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 }
    );
  }
  
  // Your actual logic here
  return NextResponse.json({ success: true });
}
```

### Protect a Server Action

```typescript
'use server'

import arcjet, { shield } from "@arcjet/next";
import { headers } from "next/headers";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [shield({ mode: "LIVE" })],
});

export async function myServerAction(formData: FormData) {
  const req = await headers();
  const decision = await aj.protect(req);
  
  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }
  
  // Your logic here
}
```

## Customization Options

### Adjust Rate Limit

```typescript
tokenBucket({
  mode: "LIVE",
  refillRate: 10,    // tokens per interval
  interval: 60,      // seconds
  capacity: 20,      // maximum bucket size
})
```

### Allow Specific Bots

```typescript
detectBot({
  mode: "LIVE",
  allow: [
    "CATEGORY:SEARCH_ENGINE", // Allow Google, Bing, etc.
    "CATEGORY:PREVIEW",        // Allow social media link previews
  ],
})
```

See full bot list: https://arcjet.com/bot-list

### Email Validation

Add email validation to forms:

```typescript
import { validateEmail } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    validateEmail({
      mode: "LIVE",
      block: ["DISPOSABLE", "NO_MX_RECORDS"],
    }),
  ],
});
```

## Monitoring & Dashboard

All requests protected by Arcjet are logged in your dashboard:
https://app.arcjet.com/

You can view:
- Request volume
- Blocked requests
- Rule violations
- Bot traffic patterns

## Testing Mode

Change `mode: "LIVE"` to `mode: "DRY_RUN"` to log decisions without blocking:

```typescript
shield({ mode: "DRY_RUN" }) // Logs but doesn't block
```

## Resources

- [Arcjet Documentation](https://docs.arcjet.com/)
- [Next.js Integration Guide](https://docs.arcjet.com/get-started?f=next-js)
- [Bot Detection Guide](https://docs.arcjet.com/bot-protection/quick-start)
- [Rate Limiting Guide](https://docs.arcjet.com/rate-limiting/quick-start)
- [Shield Protection Guide](https://docs.arcjet.com/shield/quick-start)
- [Example Apps](https://github.com/arcjet/arcjet-js/tree/main/examples)

## Support

- Email: support@arcjet.com
- Discord: https://arcjet.com/discord
- GitHub: https://github.com/arcjet/arcjet-js

## Next Steps

1. ✅ Test the `/api/arcjet` endpoint locally
2. ✅ Deploy to Vercel (should work now without middleware)
3. ✅ Monitor the Arcjet dashboard for requests
4. 🔲 Add Arcjet protection to your contact form
5. 🔲 Add Arcjet to newsletter signup endpoint
6. 🔲 Customize bot allow lists for your needs
7. 🔲 Set up email validation for form submissions

---

**Note**: The Arcjet free tier includes 100,000 requests per month, which is generous for personal portfolios.
