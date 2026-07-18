import type { StatusLineSegmentId, StatusLineSegmentOptions } from "./types.js";

export const LEFT_SEGMENTS: StatusLineSegmentId[] = [
  "pi",
  "separator",
  "model",
  "thinking",
  "ext_status",
  "separator",
  "path",
  "git",
  "separator",
  "token_total",
  "token_in",
  "token_out",
  "cache_read",
  "cache_write",
  "cache_hit"
];

export const RIGHT_SEGMENTS: StatusLineSegmentId[] = [
  "separator",
  "message_times",
  "separator",
  "context_pct"
];

export const SEGMENT_OPTIONS: StatusLineSegmentOptions = {
  model: { showThinkingLevel: false },
  path: { mode: "basename" },
  git: {
    showBranch: true,
    showStaged: true,
    showUnstaged: true,
    showUntracked: true
  },
  context_pct: { showAutoIcon: false },
  message_times: { timeZone: "Europe/Rome" }
};
