"use client";
import classes from "./index.module.css";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon
      onClick={toggleColorScheme}
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
    >
      <IconSun className={classes.light} stroke={1.5} />
      <IconMoon className={classes.dark} stroke={1.5} />
    </ActionIcon>
  );
}
