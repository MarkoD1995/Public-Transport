import { DeepPartial, EntityManager, getManager, FindOneOptions, FindManyOptions } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Dream } from "../entities/dream";


export class DreamRepository {

    public static async insert(model: DeepPartial<Dream>, entityManager?: EntityManager): Promise<void> {
        await (entityManager || getManager()).save(Dream, { ...model });
    }

    public static async findOne(options: FindOneOptions<Dream>, entityManager?: EntityManager): Promise<Dream | undefined> {
        return await (entityManager || getManager()).findOne(Dream, options);
    }

    public static async find(options: FindManyOptions<Dream>, entityManager?: EntityManager): Promise<Dream[]> {
        return await (entityManager || getManager()).find(Dream, options);
    }

    public static async findOneOrFail(options: FindOneOptions<Dream>, entityManager?: EntityManager): Promise<Dream> {
        return await (entityManager || getManager()).findOneOrFail(Dream, options);
    }

    public static async findAndCount<Activity>(options: FindOneOptions<Dream>, entityManager?: EntityManager): Promise<[Dream[], number]> {
        return await (entityManager || getManager()).findAndCount(Dream, options);
    }

    public static async update(criteria: any, partialEntity: QueryDeepPartialEntity<Dream>, entityManager?: EntityManager): Promise<void> {
        await (entityManager || getManager()).update(Dream, criteria, partialEntity);
    }

    public static async delete(criteria: any, entityManager?: EntityManager): Promise<void> {
        await (entityManager || getManager()).delete(Dream, criteria);
    }
}
