import { Group, Box, Burger, Drawer, ScrollArea, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMegaMenu.module.css";

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%" className="container">
          <p className="font-normal text-white">Complejo Nuche</p>

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
            color="white"
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
        className="bg-black "
      >
        <ScrollArea
          h={`calc(100vh - ${rem(80)})`}
          mx="-md"
          className="bg-black py-5"
        >
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
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
