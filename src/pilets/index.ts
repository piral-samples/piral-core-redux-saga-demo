import { DashboardPilet } from './dashboard';
import { Pilet2 } from './pilet2';
import { ContainerPilet } from './container';

/**
 * Normally all these pilets would come from some API and
 * would look quite different (i.e., not already evaluated etc.).
 *
 * This is only a very simple - for demo-purposes - kind a way.
 * The real development would also have each pilet in its own
 * repository (or at least in its own folder / structure in a
 * monorepo).
 */
export const availablePilets = [DashboardPilet, Pilet2, ContainerPilet];
