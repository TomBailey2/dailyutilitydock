# Daily Utility Dock AI social media publishing system

Updated: 2026-06-02

## Goal

Create a mostly hands-off publishing workflow where a single Cursor AI prompt can trigger Make.com to generate, schedule, and send evergreen Daily Utility Dock social posts into Buffer. Buffer then publishes to:

- X
- LinkedIn
- Pinterest

The system is designed for professional, non-spammy, SEO-supportive content around finance tools, productivity tools, internet utilities, calculators, and practical online tools.

## End-to-end workflow

```text
Prompt Cursor AI
  -> Cursor sends a secure webhook request to Make.com
  -> Make.com normalizes campaign inputs and schedule settings
  -> OpenAI generates structured post batches
  -> Make.com validates copy, links, schedule slots, and duplicates
  -> Optional Pinterest image branch generates or selects public image URLs
  -> Make.com sends one Buffer GraphQL mutation per channel post
  -> Buffer queues or schedules posts
  -> X, LinkedIn, and Pinterest publish automatically
```

For fully autonomous operation after setup, run the same Make.com scenario from a Make Scheduler module. The Cursor prompt remains useful when you want to seed a specific weekly theme, campaign, or tool focus.

## One-time setup requirements

### Accounts and keys

| Service | Needed item | Used by |
| --- | --- | --- |
| OpenAI | API key | OpenAI content generation and optional image generation |
| Buffer | API key from Buffer settings | Buffer GraphQL posting modules |
| Buffer | Organization ID | Channel lookup and queued post checks |
| Buffer | Channel IDs for X, LinkedIn, Pinterest | Per-platform createPost mutations |
| Make.com | Custom webhook URL | Cursor-triggered workflow |
| Make.com | Data store | Duplicate prevention, URL rotation, run logs |
| Public image host | Cloudinary, S3, Supabase Storage, or equivalent | Pinterest image URLs for Buffer assets |

Do not commit live API keys, webhook secrets, or channel IDs to the repository. Store them in Make.com connections, Make.com variables, Cursor environment variables, or a private password manager.

### Recommended Make.com data stores

Create three data stores in Make.com.

1. `dud_social_history`
   - `post_hash` string, unique key
   - `platform` string
   - `canonical_url` string
   - `text` string
   - `scheduled_for` date
   - `buffer_post_id` string
   - `status` string
   - `created_at` date

2. `dud_social_url_rotation`
   - `url` string, unique key
   - `title` string
   - `category` string
   - `last_used_x` date
   - `last_used_linkedin` date
   - `last_used_pinterest` date
   - `priority` number

3. `dud_social_run_log`
   - `run_id` string, unique key
   - `trigger_source` string
   - `theme` string
   - `requested_counts` string
   - `created_count` number
   - `skipped_count` number
   - `error_summary` string
   - `created_at` date

## Daily Utility Dock content pool

Seed the URL rotation data store with a mix of category hubs, core tools, SEO tools, and blog guides.

### Category hubs

- `https://dailyutilitydock.com/financial-tools`
- `https://dailyutilitydock.com/productivity-tools`
- `https://dailyutilitydock.com/internet-tools`
- `https://dailyutilitydock.com/converters`
- `https://dailyutilitydock.com/time-date-tools`

### Finance tools and calculators

- `https://dailyutilitydock.com/tools/budget-planner`
- `https://dailyutilitydock.com/tools/loan-repayment-calculator`
- `https://dailyutilitydock.com/tools/compound-interest-calculator`
- `https://dailyutilitydock.com/tools/mortgage-overpayment-calculator`
- `https://dailyutilitydock.com/tools/savings-goal-calculator`
- `https://dailyutilitydock.com/tools/vat-calculator`
- `https://dailyutilitydock.com/tools/fuel-calculator`
- `https://dailyutilitydock.com/tools/uk-take-home-pay-estimator`
- `https://dailyutilitydock.com/tools/uk-energy-direct-debit-calculator`

### Productivity and time tools

- `https://dailyutilitydock.com/tools/pomodoro-timer`
- `https://dailyutilitydock.com/tools/task-priority-matrix`
- `https://dailyutilitydock.com/tools/meeting-cost-calculator`
- `https://dailyutilitydock.com/tools/reading-time-calculator`
- `https://dailyutilitydock.com/tools/time-card-calculator`
- `https://dailyutilitydock.com/tools/deadline-countdown-calculator`
- `https://dailyutilitydock.com/tools/world-clock`
- `https://dailyutilitydock.com/tools/timezone-converter`

### Internet and utility tools

- `https://dailyutilitydock.com/tools/speed-test`
- `https://dailyutilitydock.com/tools/password-generator`
- `https://dailyutilitydock.com/tools/ip-checker`
- `https://dailyutilitydock.com/tools/qr-generator`
- `https://dailyutilitydock.com/tools/json-formatter-validator`
- `https://dailyutilitydock.com/tools/url-encoder-decoder`
- `https://dailyutilitydock.com/tools/base64-encoder-decoder`
- `https://dailyutilitydock.com/tools/utm-builder`
- `https://dailyutilitydock.com/tools/email-link-generator`
- `https://dailyutilitydock.com/tools/meta-tag-preview-checker`

### Evergreen blog guides

- `https://dailyutilitydock.com/blog/build-a-monthly-budget-that-matches-real-spending`
- `https://dailyutilitydock.com/blog/compare-loan-repayments-before-you-borrow`
- `https://dailyutilitydock.com/blog/estimate-uk-take-home-pay-from-gross-salary`
- `https://dailyutilitydock.com/blog/check-if-your-energy-direct-debit-is-realistic`
- `https://dailyutilitydock.com/blog/format-and-validate-json-before-sharing-data`

## Cursor AI trigger prompt

Use this after the Make.com webhook is configured. Store the webhook URL and token as private environment variables in the Cursor environment, not in source control.

```text
Run the Daily Utility Dock AI social publisher.

Use this campaign context:
- Theme: evergreen practical online tools for finance, productivity, and internet utilities
- Time zone: Europe/London
- Planning horizon: next 7 days
- X posts: 10
- LinkedIn posts: 4
- Pinterest pins: 14
- Avoid repeating URLs used in the last 7 days on the same platform
- Keep the tone professional, helpful, and non-spammy

Send a POST request to the Make.com webhook in DUD_SOCIAL_WEBHOOK_URL with Authorization: Bearer DUD_SOCIAL_WEBHOOK_TOKEN. Use the JSON payload from content/marketing/ai-social-publishing-api-examples.json as the shape.
```

Example shell command Cursor can run:

```bash
curl -X POST "$DUD_SOCIAL_WEBHOOK_URL" \
  -H "Authorization: Bearer $DUD_SOCIAL_WEBHOOK_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "trigger_source": "cursor",
    "campaign_theme": "evergreen practical online tools for finance, productivity, and internet utilities",
    "timezone": "Europe/London",
    "planning_horizon_days": 7,
    "requested_counts": {
      "x": 10,
      "linkedin": 4,
      "pinterest": 14
    },
    "constraints": {
      "avoid_same_url_days": 7,
      "tone": "professional, helpful, non-spammy",
      "evergreen_preferred": true
    }
  }'
```

## Make.com workflow architecture

Build one main scenario plus two support scenarios.

### Scenario 1: Generate and schedule social posts

Trigger options:

- Primary: Webhooks -> Custom webhook, for Cursor-triggered runs.
- Autonomous: Scheduler -> Every weekday or every Monday, for no-touch weekly generation.

Modules:

1. **Webhooks -> Custom webhook** or **Scheduler**
   - Webhook path: `dud-social-publisher`
   - Require an `Authorization: Bearer <token>` header.
   - Reject requests without the expected token.

2. **Tools -> Set variables**
   - `run_id`: `formatDate(now; "YYYYMMDD-HHmmss")`
   - `timezone`: webhook value or `Europe/London`
   - `planning_horizon_days`: webhook value or `7`
   - `theme`: webhook value or default evergreen theme
   - `x_count`: webhook requested count or `10`
   - `linkedin_count`: webhook requested count or `4`
   - `pinterest_count`: webhook requested count or `14`

3. **Data Store -> Search records in `dud_social_history`**
   - Pull the last 30 days of records.
   - Use this to prevent duplicates and same-angle reposts.

4. **Data Store -> Search records in `dud_social_url_rotation`**
   - Pull active URLs by priority.
   - Sort by oldest platform-specific `last_used_*` field.

5. **Tools -> Compose JSON input**
   - Build the content pool, recent history summary, schedule slots, platform limits, and campaign theme.

6. **HTTP -> Make a request to OpenAI Responses API**
   - Method: `POST`
   - URL: `https://api.openai.com/v1/responses`
   - Headers:
     - `Authorization: Bearer {{OPENAI_API_KEY}}`
     - `Content-Type: application/json`
   - Body: use the structured output request in `ai-social-publishing-api-examples.json`.

7. **JSON -> Parse JSON**
   - Parse the OpenAI output object.
   - Fail the run if `approval_required` is `true` or if the post array is empty.

8. **Tools -> Iterator**
   - Iterate over `posts[]`.

9. **Filters -> Quality and safety gate**
   - `platform` is one of `x`, `linkedin`, `pinterest`.
   - `status` equals `ready`.
   - `canonical_url` starts with `https://dailyutilitydock.com/`.
   - Text includes one Daily Utility Dock URL.
   - X text length target: 180 to 260 characters.
   - LinkedIn text length target: 450 to 900 characters.
   - Pinterest title target: 35 to 85 characters.
   - Reject hype claims like "guaranteed", "best ever", "make money fast", or "100% accurate".
   - Reject regulated advice language for finance, tax, payroll, employment, or lending.

10. **Data Store -> Get/search duplicate**
    - Compute `post_hash` from `platform + canonical_url + normalized_angle`.
    - Skip if the same hash exists in the last 30 days.
    - Skip if the same canonical URL was used on that platform inside `avoid_same_url_days`.

11. **Router by platform**
    - X branch
    - LinkedIn branch
    - Pinterest branch

12. **X branch -> HTTP Buffer GraphQL createPost**
    - One mutation to the X channel ID.
    - Use `mode: customScheduled` and `dueAt` for explicit times, or `mode: addToQueue` if the Buffer channel queue is already tuned.

13. **LinkedIn branch -> HTTP Buffer GraphQL createPost**
    - One mutation to the LinkedIn channel ID.
    - Slightly longer text, one link, no hashtag stuffing.

14. **Pinterest branch -> image URL step**
    - Option A: Use a pre-approved public vertical image URL from a Make.com data store.
    - Option B: Generate a vertical image with OpenAI Images API, upload it to Cloudinary/S3/Supabase Storage, and pass the public URL to Buffer.
    - Buffer Pinterest post must include an `assets` image URL.

15. **Pinterest branch -> HTTP Buffer GraphQL createPost with assets**
    - One mutation to the Pinterest channel ID.
    - Include `assets: [{ image: { url: "<public-image-url>" } }]`.

16. **Data Store -> Create record in `dud_social_history`**
    - Save successful Buffer post ID, channel, URL, schedule time, and hash.

17. **Data Store -> Update `dud_social_url_rotation`**
    - Update the platform-specific last-used date for the canonical URL.

18. **Data Store -> Create run log**
    - Record created, skipped, and error counts.

19. **Error handler route**
    - Log failed post payloads.
    - Continue processing other posts when one platform fails.
    - Send a Make.com email or Slack alert only for repeated failures, authentication errors, or all-post failure.

### Scenario 2: Buffer channel discovery

Run this once when setting up or when reconnecting accounts.

Modules:

1. Manual trigger.
2. HTTP -> Buffer account query.
3. HTTP -> Buffer channels query using the organization ID.
4. JSON parse.
5. Store channel IDs in Make.com variables:
   - `BUFFER_CHANNEL_X`
   - `BUFFER_CHANNEL_LINKEDIN`
   - `BUFFER_CHANNEL_PINTEREST`

### Scenario 3: Queue health check

Run daily.

Modules:

1. Scheduler -> every morning.
2. HTTP -> Buffer posts query for scheduled posts per channel.
3. If any channel has fewer than two future scheduled posts, trigger Scenario 1 with a small refill payload.
4. Log low queue alerts in `dud_social_run_log`.

## OpenAI prompt templates

### System prompt

```text
You are the social media publishing assistant for Daily Utility Dock, a website of practical free online tools, calculators, converters, finance utilities, productivity tools, and internet utilities.

Write professional, useful, evergreen social posts. The goal is to help people solve everyday tasks and support search visibility through clear topical relevance. Do not write spam, exaggerated claims, fake scarcity, clickbait, or regulated financial/tax/legal advice. Use plain English. Make each post useful even before the user clicks.

Rules:
- Promote only Daily Utility Dock URLs supplied in the content pool.
- Include exactly one canonical Daily Utility Dock URL per post.
- Vary hooks, angles, and tools.
- Prefer evergreen angles unless the campaign context explicitly asks for a seasonal angle.
- Keep finance posts educational and planning-oriented, not advice.
- Keep productivity posts practical and respectful of reader attention.
- Keep internet utility posts privacy-aware and avoid security overclaims.
- Do not imply the tools store private data unless the supplied page says so.
- Do not use more than two hashtags on X or LinkedIn.
- Do not use hashtags in every post.
- Pinterest posts need a pin title, description, destination URL, and image prompt.
- Return only JSON that matches the provided schema.
```

### User prompt

```text
Generate a scheduled social media batch for Daily Utility Dock.

Campaign theme: {{campaign_theme}}
Timezone: {{timezone}}
Planning horizon days: {{planning_horizon_days}}

Requested counts:
- X: {{x_count}}
- LinkedIn: {{linkedin_count}}
- Pinterest: {{pinterest_count}}

Schedule slots:
{{schedule_slots_json}}

Content pool:
{{content_pool_json}}

Recent history to avoid:
{{recent_history_json}}

Output requirements:
- X: concise, useful, 180-260 characters when possible.
- LinkedIn: professional short post, 450-900 characters, one practical takeaway, no exaggerated claims.
- Pinterest: evergreen pin title and description, vertical image prompt, practical checklist or utility angle.
- Every post must include one URL from the content pool.
- Do not duplicate the same URL on the same platform within {{avoid_same_url_days}} days.
- Use schedule times exactly from the provided slots.
- Mark a post as skipped if a safe, non-duplicate post cannot be generated.
```

### Structured output schema notes

Use OpenAI Responses API structured outputs with `text.format.type = "json_schema"` and `strict = true`. In strict mode:

- Every object must set `additionalProperties: false`.
- Every property must be listed in `required`.
- Optional values should be represented as nullable fields, for example `["string", "null"]`.

## Automated posting schedule logic

Use explicit `dueAt` timestamps in UTC for predictable publishing. Generate times in `Europe/London`, then convert to UTC before sending to Buffer.

### Frequency targets

| Platform | Frequency | Weekly target | Notes |
| --- | --- | --- | --- |
| X | 1-2 posts/day | 7-10 posts | One daily post plus optional second post on weekdays |
| LinkedIn | 3-5 posts/week | 3-4 posts by default | Prefer weekday business-hour posts |
| Pinterest | 1-3 pins/day | 7-14 pins | Use vertical image assets and evergreen search-oriented descriptions |

### Default slot matrix

| Platform | Days | Local times | Count behavior |
| --- | --- | --- | --- |
| X | Monday-Sunday | 09:10 | Always fill |
| X | Monday, Tuesday, Wednesday, Thursday, Friday | 16:20 | Fill when target is above 7 |
| LinkedIn | Monday, Wednesday, Friday | 10:30 | Always fill for 3/week |
| LinkedIn | Tuesday, Thursday | 11:15 | Fill when target is 4-5/week |
| Pinterest | Monday-Sunday | 07:40 | Always fill |
| Pinterest | Monday-Sunday | 12:35 | Fill when target is above 7 |
| Pinterest | Tuesday, Thursday, Saturday | 19:15 | Fill when target is above 14 or for campaigns |

### Rotation rules

1. Do not use the same canonical URL twice on the same platform within 7 days.
2. Do not use the same hook or angle twice within 30 days.
3. Cap finance posts at 40 percent of a weekly batch unless the campaign theme asks for finance.
4. Include at least one internet utility and one productivity tool per week.
5. Pinterest can reuse a URL that appeared on X or LinkedIn, but use a different visual angle.
6. Prefer category and blog URLs for LinkedIn thought-leadership posts.
7. Prefer direct tool URLs for X and Pinterest utility posts.

### Make.com scheduling formula approach

In Make.com, create an array of target slots before calling OpenAI:

```json
[
  {
    "platform": "x",
    "local_time": "2026-06-03T09:10:00",
    "timezone": "Europe/London",
    "due_at_utc": "2026-06-03T08:10:00.000Z"
  },
  {
    "platform": "linkedin",
    "local_time": "2026-06-03T10:30:00",
    "timezone": "Europe/London",
    "due_at_utc": "2026-06-03T09:30:00.000Z"
  }
]
```

Use Make date functions to add days, set the desired local time, and convert to UTC. If date conversion becomes hard to maintain in visual modules, use a small Make.com JavaScript code module to produce the slot array from the slot matrix.

## Buffer API payload structure

Buffer's current API uses GraphQL at:

```text
POST https://api.buffer.com
Authorization: Bearer <BUFFER_API_KEY>
Content-Type: application/json
```

Buffer creates posts for one channel at a time. To publish similar content to X, LinkedIn, and Pinterest, run one `createPost` mutation per channel.

### Text post mutation

```json
{
  "query": "mutation CreatePost { createPost(input: { text: \"{{escaped_text}}\" channelId: \"{{buffer_channel_id}}\" schedulingType: automatic mode: customScheduled dueAt: \"{{due_at_utc}}\" }) { ... on PostActionSuccess { post { id text status dueAt channelId } } ... on MutationError { message } } }"
}
```

If Buffer changes enum names later, confirm the current scheduled-post mutation in the Buffer API Explorer before updating the Make.com HTTP module.

### Queue mode mutation

Use this when the Buffer channel has its own reliable posting queue:

```json
{
  "query": "mutation CreatePost { createPost(input: { text: \"{{escaped_text}}\" channelId: \"{{buffer_channel_id}}\" schedulingType: automatic mode: addToQueue }) { ... on PostActionSuccess { post { id text status dueAt channelId } } ... on MutationError { message } } }"
}
```

### Pinterest image post mutation

Pinterest should include a public image URL:

```json
{
  "query": "mutation CreatePost { createPost(input: { text: \"{{escaped_pinterest_description}}\" channelId: \"{{buffer_pinterest_channel_id}}\" schedulingType: automatic mode: customScheduled dueAt: \"{{due_at_utc}}\" assets: [{ image: { url: \"{{public_image_url}}\" } }] }) { ... on PostActionSuccess { post { id text status dueAt channelId assets { id mimeType } } } ... on MutationError { message } } }"
}
```

## Pinterest image automation

Buffer image posts require publicly reachable asset URLs. Make.com cannot pass a private file directly to Buffer.

Recommended branch:

1. OpenAI creates the pin title, description, and image prompt.
2. Make.com calls OpenAI Images API with a vertical image prompt.
3. Make.com uploads the returned image to Cloudinary, S3, Supabase Storage, or another public image host.
4. The image host returns a direct HTTPS URL.
5. Make.com passes the URL into Buffer as an image asset.

Evergreen pin image style:

```text
Create a clean vertical Pinterest graphic for Daily Utility Dock. Professional utility-tool style, simple flat layout, light background, navy and teal accents, no fake UI screenshots, no people, no logos from third parties. Include short readable headline text: "{{pin_title}}". Leave safe margins. Make it useful and calm, not salesy.
```

If image generation cost is a concern, create a library of branded evergreen vertical images and let OpenAI select an `image_theme` such as `finance`, `productivity`, `internet`, `calculator`, or `converter`. Store those public URLs in a Make.com data store and rotate them.

## Step-by-step Make.com setup

### 1. Create Make.com secrets and variables

Create variables or secure connections for:

- `OPENAI_API_KEY`
- `BUFFER_API_KEY`
- `BUFFER_ORGANIZATION_ID`
- `BUFFER_CHANNEL_X`
- `BUFFER_CHANNEL_LINKEDIN`
- `BUFFER_CHANNEL_PINTEREST`
- `DUD_SOCIAL_WEBHOOK_TOKEN`
- `PUBLIC_IMAGE_HOST_UPLOAD_PRESET` if using Cloudinary or another upload service

### 2. Create the custom webhook

1. Add **Webhooks -> Custom webhook**.
2. Name it `Daily Utility Dock Social Publisher`.
3. Copy the webhook URL.
4. In the first module or immediately after it, validate:
   - Header `Authorization` equals `Bearer {{DUD_SOCIAL_WEBHOOK_TOKEN}}`.
   - Body `trigger_source` is `cursor`, `scheduler`, or `queue_refill`.
5. Add a reject route that returns HTTP 401 for invalid tokens.

### 3. Build the request normalizer

Add **Tools -> Set multiple variables**:

- `campaign_theme`
- `timezone`
- `planning_horizon_days`
- `avoid_same_url_days`
- `x_count`
- `linkedin_count`
- `pinterest_count`
- `run_id`

Set safe defaults when webhook fields are missing.

### 4. Load content and history

1. Add **Data Store -> Search records** for `dud_social_url_rotation`.
2. Add **Data Store -> Search records** for `dud_social_history`.
3. Filter history to the last 30 days.
4. Compose compact JSON for OpenAI:
   - URL
   - title
   - category
   - last-used dates
   - recent post angles

### 5. Generate schedule slots

Use either visual date modules or JavaScript.

Inputs:

- Current date
- Planning horizon
- Timezone
- Slot matrix
- Requested platform counts

Output:

- `schedule_slots_json`, with one object per desired post and `due_at_utc` in ISO 8601 format.

### 6. Call OpenAI

Add **HTTP -> Make a request**:

- Method: `POST`
- URL: `https://api.openai.com/v1/responses`
- Headers:
  - `Authorization: Bearer {{OPENAI_API_KEY}}`
  - `Content-Type: application/json`
- Body type: raw JSON
- Body: the `openai_responses_request` example from `ai-social-publishing-api-examples.json`, mapped to Make variables.

### 7. Parse and validate output

1. Add **JSON -> Parse JSON** using the schema in the examples file.
2. Add a filter:
   - `approval_required` is `false`.
   - `posts` count is greater than 0.
3. Add **Iterator** over `posts`.
4. Add quality filters for platform, URL, text length, and banned phrases.

### 8. Check duplicates

1. Normalize post text by lowercasing and removing URL and punctuation.
2. Create a hash from platform, canonical URL, and angle.
3. Search `dud_social_history` for the hash.
4. If found, skip and log.
5. If not found, continue to Buffer.

### 9. Send to Buffer

For each platform branch:

1. Escape double quotes and line breaks in text before embedding in a GraphQL query string.
2. Call `POST https://api.buffer.com`.
3. Include `Authorization: Bearer {{BUFFER_API_KEY}}`.
4. Use the matching channel ID.
5. Check for `data.createPost.post.id`.
6. If `data.createPost.message` exists, route to error handling.

### 10. Store success records

Create a record in `dud_social_history` with:

- Hash
- Platform
- Canonical URL
- Text
- Due date
- Buffer post ID
- Status `scheduled`

Update the URL rotation record's platform-specific last-used field.

### 11. Add error handling

Add Make.com error handlers for:

- OpenAI API error
- JSON schema parse error
- Buffer `MutationError`
- Queue limit reached
- Missing Pinterest public image URL
- Public image upload failure

Recommended behavior:

- Skip only the failed post when possible.
- Stop the scenario if authentication fails.
- Log all skipped and failed items.
- Send an alert only when the run creates zero posts or when credentials fail.

## Webhook payload example

```json
{
  "trigger_source": "cursor",
  "campaign_theme": "evergreen practical online tools for finance, productivity, and internet utilities",
  "timezone": "Europe/London",
  "planning_horizon_days": 7,
  "requested_counts": {
    "x": 10,
    "linkedin": 4,
    "pinterest": 14
  },
  "constraints": {
    "avoid_same_url_days": 7,
    "tone": "professional, helpful, non-spammy",
    "evergreen_preferred": true
  },
  "focus_categories": [
    "finance tools",
    "productivity tools",
    "internet utilities",
    "calculators",
    "useful online tools"
  ]
}
```

## Quality controls

### Professional and non-spammy

- Avoid "you need this", "secret", "hack", "guaranteed", and urgency language.
- Prefer direct utility: "Compare the monthly payment and total repayable before choosing a term."
- Keep hashtags optional and minimal.
- Keep each platform's post distinct.

### SEO supportive

- Use naturally relevant terms such as "budget planner", "loan repayment calculator", "JSON formatter", "time zone converter", or "internet speed test".
- Link to the most relevant canonical tool, category, or guide page.
- Rotate category hubs with specific tools.
- Avoid duplicating exact page titles in every post.

### Evergreen

- Focus on repeatable problems: planning bills, checking a connection, comparing time zones, formatting data, estimating repayments.
- Avoid dated claims unless the linked page is specifically updated for that date.
- Do not reference social trends that will expire quickly.

### Regulated-topic guardrails

Finance, payroll, utility bills, and employment calculators should be described as planning aids or estimates. Do not write:

- "This tells you exactly what to do."
- "This guarantees your payment."
- "Use this instead of an adviser."
- "This is tax advice."

Use:

- "Use it as a planning estimate."
- "Compare scenarios before you decide what to check next."
- "Verify important figures against official sources, contracts, bills, or professional advice."

## Operational checklist

Before enabling automatic runs:

1. Buffer has connected X, LinkedIn, and Pinterest channels.
2. Buffer API key works in the API Explorer.
3. Buffer organization ID and channel IDs are stored in Make.com.
4. Make.com webhook rejects missing or invalid bearer tokens.
5. OpenAI structured output request returns valid JSON.
6. Pinterest image URLs are public and load in an incognito browser.
7. Test run schedules one post per platform.
8. Data store records are created after successful Buffer mutations.
9. Duplicate filters skip a repeated test payload.
10. Buffer queue previews look correct before the first autonomous run.

## Minimal human interaction operating model

After setup, use one of these modes:

1. **Fully scheduled**
   - Make Scheduler runs weekly.
   - Scenario generates a complete weekly batch.
   - Queue health scenario refills when a channel gets low.

2. **Cursor-seeded**
   - User prompts Cursor AI with the campaign context.
   - Cursor calls the Make.com webhook.
   - Make.com handles generation, validation, scheduling, and logging.

3. **Hybrid**
   - Scheduler keeps evergreen posts flowing.
   - Cursor prompt is used only for launches, new tools, or seasonal campaigns.

## Maintenance cadence

- Add new Daily Utility Dock URLs to `dud_social_url_rotation` when new tools or guides are published.
- Review Buffer queues weekly at first, then reduce review once quality is stable.
- Refresh OpenAI prompts when brand voice changes.
- Keep the banned-phrase list updated as patterns emerge.
- Rotate Pinterest image templates so pins do not look repetitive.
