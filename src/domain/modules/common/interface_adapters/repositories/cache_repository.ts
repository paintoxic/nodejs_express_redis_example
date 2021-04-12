import { ICacheOperations } from "@common/enterprise_business_rules/interfaces/icacheoperations";

export class CacheRepository implements ICacheOperations<string>{

    implement: ICacheOperations<string>

    constructor(implement: ICacheOperations<string>) {
        this.implement = implement;
    }

    async getAll(opts: any, options?: any): Promise<string[]> {
        return await this.getAll(opts, options);
    }
    async getOne(key: string, options?: any): Promise<any | null> {
        return await this.implement.getOne(key, options);
    }
    async createOne(key: string, item: string, options?: any): Promise<any> {
        return await this.implement.createOne(key, item, options);
    }
    async deleteOne(key: string, options?: any): Promise<boolean> {
        return await this.implement.deleteOne(key, options);
    }

}