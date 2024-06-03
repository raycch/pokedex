"use client";
import ThemeToggle from "../theme-toggle";
import {
  AppShellHeader,
  ActionIcon,
  Group,
  Image,
  Select,
  ComboboxItem,
  OptionsFilter,
} from "@mantine/core";
import classes from "./index.module.css";
import { IconSearch } from "@tabler/icons-react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { name2Slug } from "@/app/lib/utils";

export default function Header({ pokemons }: { pokemons: string[] }) {
  const router = useRouter();
  const optionsFilter: OptionsFilter = ({ options, search }) => {
    const splittedSearch = search.toLowerCase().trim().split(" ");
    return (options as ComboboxItem[]).filter((option) => {
      const words = option.label.toLowerCase().trim().split(" ");
      return splittedSearch.every((searchWord) =>
        words.some((word) => word.includes(searchWord)),
      );
    });
  };
  const icon = <IconSearch width={16} height={16} stroke={1.5} />;
  return (
    <AppShellHeader className={classes.inner}>
      <Group pl={10}>
        <Image
          component={NextImage}
          src="/brand.webp"
          width={34}
          height={34}
          w={34}
          h={34}
          alt="brand"
          draggable={false}
        />
      </Group>
      <Group pr={10} gap={10}>
        <Select
          w={200}
          height={32}
          data={pokemons}
          placeholder="Search"
          searchable
          leftSection={icon}
          filter={optionsFilter}
          withCheckIcon={false}
          onChange={(value, _option) =>
            value && router.push(`/pokemon/${name2Slug(value)}`)
          }
          nothingFoundMessage="Nothing found..."
        />
        <ThemeToggle />
        <ActionIcon
          variant="default"
          component="a"
          target="_blank"
          href="https://github.com/raycch"
          size="lg"
        >
          <GitHubLogoIcon width={24} height={24} />
        </ActionIcon>
      </Group>
    </AppShellHeader>
  );
}
