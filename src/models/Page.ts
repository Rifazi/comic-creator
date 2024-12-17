import { Panel } from "./Panel";

export interface Page {
    id: string;
    number: number;
    panels: Panel[];
}
  