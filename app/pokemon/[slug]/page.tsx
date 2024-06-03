"use client";
import { Card, CardSection, Image, Text, Group, lighten } from "@mantine/core";
import NextImage from "next/image";
import { RadarChart } from "@mantine/charts";
import classes from "./index.module.css";
import TypeBadge from "@/app/components/type-badge";
import tinycolor from "tinycolor2";
import { useSuspenseQuery } from "@apollo/client";
import getDetails from "@/app/queries";
import { notFound } from "next/navigation";
import { slug2Name } from "@/app/lib/utils";

function shorthand(name: string) {
  return name
    .replace("special-attack", "sp. atk")
    .replace("special-defense", "sp. def");
}

export default function Page({ params }: { params: { slug: string } }) {
  const { data } = useSuspenseQuery(getDetails, {
    variables: { name: params.slug },
  });
  if (!data.pokemons.length) {
    notFound();
  }
  const { sprites, specy, stats, types } = data.pokemons[0];
  const name = slug2Name(params.slug);
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder w="320">
      <CardSection
        withBorder
        bg={`linear-gradient(135deg, var(--mantine-color-gray-0), ${lighten(tinycolor(specy?.color?.name).toHex(), 0.6)})`}
      >
        <Image
          component={NextImage}
          src={sprites[0].image ?? sprites[0].fallback ?? ""}
          alt={"sprite"}
          priority
          // required by Next.js
          width={0}
          height={0}
          w="auto"
          h={160}
          m="10 auto"
          fit="contain"
          sizes="160"
        />
      </CardSection>

      <Group justify="space-between" mt="sm" mb="sm">
        <Text fw={500} className={classes.name}>
          {name}
        </Text>
        <Group justify="space-between" gap={5}>
          {types.map((x) => (
            <TypeBadge key={x.slot} name={x?.type?.name} />
          ))}
        </Group>
      </Group>
      <RadarChart
        h={250}
        data={stats.map((x) => ({
          name: shorthand(x?.stat?.name ?? ""),
          value: x.base_stat,
        }))}
        dataKey="name"
        polarRadiusAxisProps={{ angle: 60 }}
        withPolarGrid
        withPolarRadiusAxis
        // @ts-ignore: missing dataKey
        radarProps={{ isAnimationActive: true }}
        series={[{ name: "value", color: "blue.4", opacity: 0.2 }]}
      />
    </Card>
  );
}
