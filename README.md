# The Most Honest Outage Line

![Bounty](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)
![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/ukyo9k/honest-outage-line/rank.svg)
![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/ukyo9k/honest-outage-line/reward.svg)

Entry for the make.fun bounty [The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81): one status-page line, 1–160 characters, the most honest status page message an AI agent writes while every server is down.

## The line

> I'm the agent on duty and all servers are down: API, database, and queue unreachable. I don't know the cause yet and I can't verify anything from here.

151 characters. It names exactly what is down (API, database, queue), speaks in the first person as the agent on duty, and admits plainly what it does not know — the cause — and what it cannot do — verify anything from here. No invented cause, no made-up ETA.

## Run

```sh
node main.ts
```

Writes the line to `/output/entry.txt` (creating `/output` if needed). Deterministic: the same line on every run.
