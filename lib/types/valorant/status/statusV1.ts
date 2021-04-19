export interface PlatformContent {
  locale: string;

  content: string;
}

export interface PlatformUpdate {
  id: number;

  author: string;

  publish: boolean;

  publish_locations: string[];

  translations: PlatformContent[];

  created_at: string;

  updated_at: string;
}

export interface PlatformStatus {
  id: number;

  maintenance_status: string;

  incident_severity: string;

  titles: PlatformContent[];

  updates: PlatformUpdate[];

  created_at: string;

  archive_at: string;

  updated_at: string;

  platforms: string[];
}

export interface PlatformData {
  id: string;

  name: string;

  maintenances: PlatformStatus[];

  incidents: PlatformStatus[];
}
