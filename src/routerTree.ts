import { createRootRoute, createRoute } from '@tanstack/react-router';
import SidebarLayout from './layouts/SidebarLayout';
import AddContactForm from './pages/AddContactForm';
import Home from './pages/Home';
import ContactDetails from './pages/ContactDetails';
import NotFound from './pages/NotFound';
import Contacts from './pages/Contacts';

const rootRoute = createRootRoute({
  component: SidebarLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contacts',
});

const contactIndexRoute = createRoute({
  getParentRoute: () => contactRoute,
  path: '/',
  component: Contacts,
});

const contactCreateRoute = createRoute({
  getParentRoute: () => contactRoute,
  path: '/new',
  component: AddContactForm,
});

const contactDetailsRoute = createRoute({
  getParentRoute: () => contactRoute,
  path: '$contactId',
  component: ContactDetails, 
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
});


export const routeTree = rootRoute.addChildren([homeRoute, contactRoute.addChildren([contactIndexRoute, contactCreateRoute, contactDetailsRoute]), notFoundRoute]);