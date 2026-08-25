import { ApiClient, ApiClientConfig } from "./client";
import { HealthModule } from "./modules/health";

export * from "./client";
export * from "./modules/health";

export class DocumentIntelligenceAPI {
  public client: ApiClient;
  public health: HealthModule;

  constructor(config: ApiClientConfig) {
    this.client = new ApiClient(config);
    
    // Initialize modules
    this.health = new HealthModule(this.client);
  }
}
