export interface IconSet {
  pi: string;
  model: string;
  folder: string;
  repo: string;
  branch: string;
  git: string;
  tokens: string;
  contextPct: string;
  contextTotal: string;
  cost: string;
  cacheRead: string;
  cacheWrite: string;
  input: string;
  output: string;
  thinking: string;
  separator: string;
  auto: string;
}

// Nerd Font icons
export const NERD_ICONS: IconSet = {
  pi: "\uE22C",         // nf-fae-pi
  model: "\uEC19",      // nf-cod-chip
  folder: "\uF115",     // nf-fa-folder_open_o
  repo: "\uEA63",       // nf-cod-repo_forked
  branch: "\uF126",     // nf-fa-code_branch
  git: "\uF1D3",        // nf-fa-git
  tokens: "\uE60E",     // nf-seti-html5 (angle brackets)
  contextPct: "\uF1C0", // nf-fa-database (was nf-dev-database \uE70F, broken in NF v3)
  contextTotal: "\uF1C0", // nf-fa-database (was nf-dev-database \uE70F, broken in NF v3)
  cost: "\uF155",       // nf-fa-dollar
  cacheRead: "\u{F00BA}",  // nf-md-book
  cacheWrite: "\u{F05DB}", // nf-md-book_plus
  input: "\uF090",      // nf-fa-arrow_right_to_bracket
  output: "\uF08B",     // nf-fa-arrow_right_from_bracket
  thinking: "\uEE9C",   // nf-fa-brain
  separator: "\uE0B1",  // nf-pl-left_soft_divider
  auto: "\uF0068",      // nf-md-auto_fix
};

export function getIcons(): IconSet {
  return NERD_ICONS;
}
