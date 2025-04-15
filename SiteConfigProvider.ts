import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class SiteConfigProvider {
  // Fetch all site configurations
  async getAllConfigs() {
    return await prisma.siteConfig.findMany();
  }

  // Fetch a specific configuration by key
  async getConfigByKey(key: string) {
    return await prisma.siteConfig.findUnique({
      where: { key },
    });
  }

  // Update a configuration by key
  async updateConfig(key: string, value: string) {
    return await prisma.siteConfig.update({
      where: { key },
      data: { value },
    });
  }

  // Create a new configuration
  async createConfig(key: string, value: string) {
    return await prisma.siteConfig.create({
      data: { key, value },
    });
  }

  // Delete a configuration by key
  async deleteConfig(key: string) {
    return await prisma.siteConfig.delete({
      where: { key },
    });
  }
}
