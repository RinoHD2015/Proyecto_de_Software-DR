import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './styles/globals.css';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AlertDialog,
  Alert,
  AppLayout,
  AppSidebar,
  Sidebar,
  Avatar,
  Badge,
  Button,
  Calendar,
  Card,
  Chart,
  Checkbox,
  DashboardCalendar,
  Dialog,
  DropdownMenu,
  EnlacesPage,
  Form,
  HelpSupport,
  Input,
  Label,
  Layout,
  LoginPage,
  MainPage,
  MenuBar,
  PopOver,
  Progress,
  RadioGroup,
  RegistrosPage,
  ReportsPage,
  SalesChart,
  ScrollArea,
  Select,
  Separator,
  Sheet,
  Skeleton,
  Slider,
  Switch,
  Table,
  Tabs,
  TaskList,
  Textarea,
  Toast,
  Toaster,
  Tooltip,
  UseMobile
} from "@/Componentes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppLayout>
      {/* Barra de navegación y sidebar */}
      <MenuBar />
      <AppSidebar />
      <Sidebar>
        <p>Contenido de Sidebar</p>
      </Sidebar>

      <MainPage>
        <h1>Vite + React - Demo de Componentes</h1>

        <div className="card">
          {/* Botones y controles */}
          <Button onClick={() => setCount(count + 1)}>count is {count}</Button>
          <Checkbox id="check1" label="Acepto términos" />
          <RadioGroup>
            <RadioGroup.Item value="1" label="Opción 1" />
            <RadioGroup.Item value="2" label="Opción 2" />
          </RadioGroup>
          <Switch />
          <Slider defaultValue={50} />

          <Input placeholder="Escribe algo..." />
          <Textarea placeholder="Texto largo..." />
          <Select>
            <Select.Option value="1">Opción 1</Select.Option>
            <Select.Option value="2">Opción 2</Select.Option>
          </Select>

          {/* Formulario con Label */}
          <Form>
            <Label htmlFor="name">Nombre:</Label>
            <Input id="name" placeholder="Escribe tu nombre" />
            <Button type="submit">Enviar</Button>
          </Form>

          {/* Visuales y Layout */}
          <Card>
            <h2>Card Title</h2>
            <p>Contenido del Card</p>
          </Card>
          <Badge variant="info">Nuevo</Badge>
          <Avatar src={reactLogo} alt="React Logo" />
          <Skeleton />
          <Separator />
          <Sheet>
            <Sheet.Trigger>Open Sheet</Sheet.Trigger>
            <Sheet.Content>Contenido del Sheet</Sheet.Content>
          </Sheet>

          {/* Mensajes y alertas */}
          <Alert variant="success">Esto es una alerta</Alert>
          <Toast title="Notificación" description="Este es un toast" />
          <Toaster />
          <AlertDialog>
            <AlertDialog.Trigger>Abrir Alerta</AlertDialog.Trigger>
            <AlertDialog.Content>Contenido del AlertDialog</AlertDialog.Content>
          </AlertDialog>
          <Dialog>
            <Dialog.Trigger>Abrir Dialog</Dialog.Trigger>
            <Dialog.Content>Contenido del Dialog</Dialog.Content>
          </Dialog>

          {/* Menús y popovers */}
          <DropdownMenu>
            <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Item 1</DropdownMenu.Item>
              <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
          <PopOver>
            <PopOver.Trigger>Popover</PopOver.Trigger>
            <PopOver.Content>Contenido Popover</PopOver.Content>
          </PopOver>

          {/* Tabs y listas */}
          <Tabs defaultValue="tab1">
            <Tabs.List>
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">Contenido Tab 1</Tabs.Content>
            <Tabs.Content value="tab2">Contenido Tab 2</Tabs.Content>
          </Tabs>
          <TaskList tasks={["Tarea 1", "Tarea 2", "Tarea 3"]} />

          {/* Calendarios y gráficos */}
          <Calendar />
          <DashboardCalendar />
          <Chart />
          <SalesChart />
          <Progress value={60} />

          {/* Tablas y scroll */}
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Th>Header 1</Table.Th>
                <Table.Th>Header 2</Table.Th>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Td>Data 1</Table.Td>
                <Table.Td>Data 2</Table.Td>
              </Table.Row>
            </Table.Body>
          </Table>
          <ScrollArea>
            <p>Contenido scrollable...</p>
          </ScrollArea>

          {/* Tooltips y utilidades */}
          <Tooltip content="Este es un tooltip">
            <Button>Hover me</Button>
          </Tooltip>
          <UseMobile />

          {/* Páginas */}
          <LoginPage />
          <MainPage />
          <RegistrosPage />
          <ReportsPage />
          <EnlacesPage />
          <HelpSupport />
          <Layout />

          {/* Accordion completo */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion Item 1</AccordionTrigger>
              <AccordionContent>Contenido del Accordion 1</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Accordion Item 2</AccordionTrigger>
              <AccordionContent>Contenido del Accordion 2</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </MainPage>
    </AppLayout>
  );
}

export default App;
