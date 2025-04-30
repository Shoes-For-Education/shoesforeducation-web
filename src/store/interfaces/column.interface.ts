import type { ReactNode } from "react";

export interface IColumn<T> {
    label: string,
    id: keyof T,
    format?: (e:T) => ReactNode,
}