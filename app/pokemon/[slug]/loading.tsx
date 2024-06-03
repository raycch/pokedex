import { Card, CardSection, Skeleton } from "@mantine/core";

export default function Loading() {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder w="320" h="500">
      <CardSection withBorder>
        <Skeleton width={320} height={180} />
      </CardSection>
      <Skeleton height={16} mt={16} radius="xl" />
      <Skeleton height={16} mt={8} radius="xl" />
      <Skeleton height={16} mt={8} width="70%" radius="xl" />
    </Card>
  );
}
