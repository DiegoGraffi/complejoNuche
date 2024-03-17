import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconBuildingEstate,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <p className="font-normal">Complejo Nuche</p>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Inicio
            </a>

            <a href="#" className={classes.link}>
              Galeria
            </a>
            <a href="#" className={classes.link}>
              Plantas
            </a>
            <a href="#" className={classes.link}>
              Departamentos
            </a>
            <a href="#" className={classes.link}>
              Características
            </a>
            <a href="#" className={classes.link}>
              Contacto
            </a>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Complejo Nuche"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider mb="sm" />

          <a href="#" className={classes.link}>
            Inicio
          </a>
          <a href="#" className={classes.link}>
            Galería
          </a>
          <a href="#" className={classes.link}>
            Plantas
          </a>
          <a href="#" className={classes.link}>
            Departamentos
          </a>
          <a href="#" className={classes.link}>
            Características
          </a>
          <a href="#" className={classes.link}>
            Contacto
          </a>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
