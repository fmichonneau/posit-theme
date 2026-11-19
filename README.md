# posit-theme

Two [custom Claude Code themes](https://code.claude.com/docs/en/terminal-config.md#create-a-custom-theme)
drawn from the Posit brand palette (`_brand.yml`): blue for the primary
accent, orange for errors, green for success, amber for warnings, and teal
for plan mode.

- `posit-light.json` — built on Claude Code's `light` preset
- `posit-dark.json` — built on the `dark` preset, with brighter tints so the
  same hues stay readable on a dark background

## Install

Copy whichever file(s) you want into `~/.claude/themes/`:

```
cp posit-light.json posit-dark.json ~/.claude/themes/
```

Claude Code watches that folder and picks them up without a restart (unless
the folder didn't exist yet, in which case restart once). Select "Posit
Light" or "Posit Dark" from the `/theme` command.
