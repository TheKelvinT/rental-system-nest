import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    // Accessing a sample environment variable
    const dbHost = this.configService.get<string>('DB_HOST');
    return `Database Host: ${dbHost}`;
  }
}
