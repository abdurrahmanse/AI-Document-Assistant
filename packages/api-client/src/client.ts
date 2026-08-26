import axios, { type AxiosInstance } from "axios";
import { setupInterceptors } from "./interceptors";
import { AuthModule } from "./modules/auth";
import { DocumentsModule } from "./modules/documents";
import { SearchModule } from "./modules/search";
import { ChatModule } from "./modules/chat";

export interface ApiClientConfig {
  baseUrl: string;
}

export class ApiClient {
  public baseUrl: string;
  public axios: AxiosInstance;
  public auth: AuthModule;
  public documents: DocumentsModule;
  public search: SearchModule;
  public chat: ChatModule;

  constructor(config: ApiClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    
    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Attach interceptors
    setupInterceptors(this.axios);

    // Initialize modules
    this.auth = new AuthModule(this);
    this.documents = new DocumentsModule(this);
    this.search = new SearchModule(this);
    this.chat = new ChatModule(this);
  }
}


