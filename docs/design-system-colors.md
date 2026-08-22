# PM Rearchitected — Design System Colors

Source of truth: `src/app/globals.css` (`@theme` block, Tailwind CSS v4 tokens).
Site is **light-only** — dark mode is intentionally disabled.

Every token below is usable as a Tailwind utility, e.g. `bg-primary`, `text-muted-foreground`, `border-border`.

---

## Surfaces

| Token | HSL | Hex | Usage |
|---|---|---|---|
| `background` | `hsl(0 0% 100%)` | `#FFFFFF` | Page background |
| `foreground` | `hsl(222 35% 5%)` | `#080B11` | Default text color |
| `surface` | `hsl(222 60% 97%)` | `#F3F6FC` | Subtle section backgrounds |
| `surface-tint` | `hsl(222 55% 93%)` | `#E3E9F7` | Slightly deeper tinted surface |
| `card` | `hsl(0 0% 100%)` | `#FFFFFF` | Card background |
| `card-foreground` | `hsl(222 35% 5%)` | `#080B11` | Text on cards |
| `popover` | `hsl(0 0% 100%)` | `#FFFFFF` | Popover/dropdown background |
| `popover-foreground` | `hsl(222 35% 5%)` | `#080B11` | Text on popovers |

## Brand — Cobalt (primary)

| Token | HSL | Hex | Usage |
|---|---|---|---|
| `primary` | `hsl(219 76% 44%)` | `#1B57C5` | Primary buttons, links, brand accents |
| `primary-foreground` | `hsl(0 0% 100%)` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `hsl(219 76% 38%)` | `#174BAB` | Primary hover state |
| `primary-light` | `hsl(213 66% 54%)` | `#3C82D7` | Lighter cobalt accent |
| `primary-soft` | `hsl(222 60% 97%)` | `#F3F6FC` | Soft tinted primary background (= `surface`) |

## Signal — Cyan

| Token | HSL | Hex | Usage |
|---|---|---|---|
| `signal` | `hsl(192 92% 39%)` | `#089ABF` | Live/active indicators |
| `signal-foreground` | `hsl(0 0% 100%)` | `#FFFFFF` | Text/icons on signal |
| `signal-soft` | `hsl(192 80% 94%)` | `#E3F7FC` | Soft signal background |

> **Legacy aliases:** `live`, `live-foreground`, `live-soft` are identical values to `signal`, `signal-foreground`, `signal-soft` respectively — kept for backward compatibility, prefer the `signal-*` tokens in new code.

## New Badge — Ember

| Token | HSL | Hex | Usage |
|---|---|---|---|
| `new-badge` | `hsl(24 80% 52%)` | `#E77123` | "New" badges/labels |
| `new-badge-foreground` | `hsl(0 0% 100%)` | `#FFFFFF` | Text on new-badge |

## Neutrals

| Token | HSL | Hex | Usage |
|---|---|---|---|
| `secondary` | `hsl(222 55% 93%)` | `#E3E9F7` | Secondary buttons/surfaces (= `surface-tint`) |
| `secondary-foreground` | `hsl(222 35% 15%)` | `#192134` | Text on secondary |
| `muted` | `hsl(222 60% 97%)` | `#F3F6FC` | Muted backgrounds (= `surface`) |
| `muted-foreground` | `hsl(222 30% 29%)` | `#344160` | Muted/secondary text |
| `accent` | `hsl(222 60% 97%)` | `#F3F6FC` | Accent background (= `surface`) |
| `accent-foreground` | `hsl(219 76% 30%)` | `#123B87` | Text on accent |
| `border` | `hsl(222 50% 90%)` | `#D9E0F2` | Default border color |
| `input` | `hsl(222 50% 90%)` | `#D9E0F2` | Input border (= `border`) |
| `ring` | `hsl(219 76% 44%)` | `#1B57C5` | Focus ring (= `primary`) |
| `tertiary` | `hsl(222 26% 40%)` | `#4B5B81` | Tertiary text (`text-tertiary` utility) |

## Semantic status colors

| Token | HSL | Hex | Usage |
|---|---|---|---|
| `destructive` | `hsl(0 72% 51%)` | `#DC2828` | Errors, destructive actions, "Incorrect" quiz verdict |
| `destructive-foreground` | `hsl(0 0% 100%)` | `#FFFFFF` | Text on destructive |
| `success` | `hsl(142 71% 35%)` | `#1A9948` | Success states, "Correct" quiz verdict (added 2026-07-23) |
| `success-foreground` | `hsl(0 0% 100%)` | `#FFFFFF` | Text on success |
| `new-badge` | `hsl(24 80% 52%)` | `#E77123` | Also doubles as "Partial" quiz verdict (amber/ember) |

---

## Shadows

| Token | Value |
|---|---|
| `shadow-card` | `0 1px 2px 0 hsl(222 35% 5% / 0.04)` |
| `shadow-card-hover` | `0 4px 12px -2px hsl(222 35% 5% / 0.06), 0 2px 4px -2px hsl(222 35% 5% / 0.04)` |
| `shadow-elevated` | `0 12px 32px -8px hsl(222 35% 5% / 0.10), 0 4px 12px -4px hsl(222 35% 5% / 0.06)` |
| `shadow-glow` | `0 0 0 4px hsl(219 76% 44% / 0.10)` (primary glow) |

Utilities: `shadow-card`, `shadow-card-hover`, `shadow-elevated`.

## Radius

| Token | Value |
|---|---|
| `radius-sm` | `0.5rem` |
| `radius-md` | `0.75rem` |
| `radius-lg` | `1rem` |
| `radius-xl` | `1.25rem` |
| `radius-2xl` | `1rem` |
| `radius-3xl` | `1.5rem` |
| `radius-full` | `9999px` |

## Typography

- Font: `Inter` (via `rsms.me/inter`), fallback `system-ui, -apple-system, sans-serif`
- `text-gradient` utility: `linear-gradient(135deg, hsl(219 76% 30%) → hsl(219 76% 44%))` — cobalt gradient for headline text

## Body background treatment

```css
background-image: radial-gradient(80% 60% at 50% 0%, var(--color-surface) 0%, var(--color-background) 60%);
background-size: 100% 720px;
```
A soft radial cobalt-tinted glow at the top of the page, fading to white.

---

*Generated 2026-08-21 from `src/app/globals.css`. Update this doc if `@theme` tokens change.*
