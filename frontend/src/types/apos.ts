export interface AposAttachment {
  _id?: string;
  _url?: string;
  alt?: string | null;
  title?: string | null;
  attachment?: {
    _alt?: string | null;
  };
  [key: string]: unknown;
}

export interface AposWidgetBase {
  _id?: string;
  type?: string;
  aposPlaceholder?: boolean;
  [key: string]: unknown;
}

export interface AposAreaData {
  metaType?: string;
  items?: AposWidgetBase[];
  [key: string]: unknown;
}

export interface AposPageData {
  _id?: string;
  type?: string;
  title?: string;
  seoDescription?: string;
  main?: AposAreaData;
  _url?: string;
  [key: string]: unknown;
}

export interface AposPieceData {
  _id?: string;
  type?: string;
  title?: string;
  publishedAt?: string;
  main?: AposAreaData;
  _url?: string;
  [key: string]: unknown;
}

export interface AposPageResponse {
  redirect?: boolean;
  url?: string;
  status?: number;
  notFound?: boolean;
  page?: AposPageData;
  piece?: AposPieceData;
  user?: Record<string, unknown> | null;
  query?: Record<string, string | string[] | undefined>;
  pieces?: AposPieceData[];
  currentPage?: number;
  totalPages?: number;
  piecesFilters?: unknown;
  [key: string]: unknown;
}
