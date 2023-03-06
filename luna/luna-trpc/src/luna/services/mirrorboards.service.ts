import { z } from "zod";
import { inject, injectable } from "tsyringe";
import { ulid } from 'ulid';
import { LunaModels } from "../luna.models";
import { MirrorboardsServiceDTO } from "./mirrorboards.service.dto";
import { User } from "../models/User.model";
import { TRPCError } from "@trpc/server";
import { Pagination } from "../utils/Pagination";
import { defineAbilityForMirrorboardAndUser } from "../abilities/mirrorboardUserAbilities";
import { Cursor } from "../utils/Cursor";

@injectable()
export class MirrorboardsService {
  constructor(
    @inject(LunaModels) private readonly models: LunaModels,
  ) { }

  async findAllPublic(cursor: Cursor) {
    const { Mirrorboard } = this.models;

    const docs = await Mirrorboard.find({
      isPublic: true,
    }, null, cursor);

    return docs;
  }

  async create(input: z.infer<typeof MirrorboardsServiceDTO.create.input>) {
    const mirrorboard = new this.models.Mirrorboard(input);
    const doc = await mirrorboard.save();

    return doc;
  }

  async update(id: string, isPromoted: boolean, user: User) {
    const mirrorboard = await this.models.Mirrorboard.findOne({ id });

    if (!mirrorboard) {
      throw new TRPCError({
        code: 'NOT_FOUND'
      });
    }

    const ability = defineAbilityForMirrorboardAndUser(mirrorboard, user);

    if (ability.can('update', 'Mirrorboard',)) {

    }

    // const doc = await this.models.Mirrorboard
    //   .where({ id })
    //   .accessibleBy(ability, 'update')
    //   .update({ id }, {
    //     $set: { isPromoted }
    //   });

    // return doc;

    // console.log(`\n***\n`)
    // console.log('update mirrorboard');
    // console.log(id);
    // console.log(isPromoted);
    // console.log(user);
    // console.log('has ability to update isPromoted:');
    // console.log();
    // console.log(`\n***\n`);

    // if (!ability.can('update', 'Mirrorboard', 'isPromoted')) {
    //   throw new TRPCError({
    //     code: 'UNAUTHORIZED'
    //   });
    // }

    // const doc = await this.models.Mirrorboard.findOneAndUpdate({ id }, {
    //   $set: { isPromoted }
    // });

    // return doc;
  }
}
