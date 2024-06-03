import classes from "./index.module.css";
import { Badge } from "@mantine/core";

export default function TypeBadge({ name }: { name?: string }) {
  if (typeof name === "undefined") {
    return null;
  }
  return (
    <Badge size="sm" radius={3} className={classes[`type-${name}`]}>
      {name}
    </Badge>
  );
}
