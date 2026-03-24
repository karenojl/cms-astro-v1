import type { ReactNode } from "react";

export interface DefaultPageViewProps {
  title?: string;
  children?: ReactNode;
}

export interface BlogPieceSummary {
  id: string;
  title?: string;
  url?: string;
  publishedAt?: string;
}

export interface BlogPaginationLink {
  number: number;
  url: string;
  current: boolean;
}

export interface BlogIndexPageViewProps {
  title?: string;
  pieces: BlogPieceSummary[];
  pagination: BlogPaginationLink[];
}

export interface BlogShowPageViewProps {
  title?: string;
  publishedAt?: string;
  children?: ReactNode;
}

export interface HomePageViewProps {
  isLoggedIn: boolean;
  isEditMode: boolean;
  title?: string;
  children?: ReactNode;
}

export interface NotFoundPageViewProps {
  title?: string;
}
