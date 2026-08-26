import { ApiClient, ApiClientConfig } from "./client";
import { HealthModule } from "./modules/health";
import { AuthModule } from "./modules/auth";
import { DocumentsModule } from "./modules/documents";
import { SearchModule } from "./modules/search";
import { ChatModule } from "./modules/chat";

export * from "./client";
export * from "./interceptors";
export * from "./modules/health";
export * from "./modules/auth";
export * from "./modules/documents";
export * from "./modules/search";
export * from "./modules/chat";

export class DocumentIntelligenceAPI {
  public client: ApiClient;
  public health: HealthModule;
  public auth: AuthModule;
  public documents: DocumentsModule;
  public search: SearchModule;
  public chat: ChatModule;

  constructor(config: ApiClientConfig) {
    this.client = new ApiClient(config);
    
    // Initialize modules
    this.health = new HealthModule(this.client);
    this.auth = new AuthModule(this.client);
    this.documents = new DocumentsModule(this.client);
    this.search = new SearchModule(this.client);
    this.chat = new ChatModule(this.client);
  }
}
