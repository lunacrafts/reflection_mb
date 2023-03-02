import { describe, expect, test } from 'vitest';
import { mocks } from '../tests/mocks';
import { defineAbilityForMirrorboardAndUser } from './MirrorboardUserAbilities';

describe('[Mirrorboard] Mirrorboard should be', () => {
  test('able to promote by SuperAdmin', () => {
    const mirrorboard = mocks.mirrorboard.getMirrorboard();

    const user = mocks.user.getUser({
      isSuperAdmin: true,
    });

    const ability = defineAbilityForMirrorboardAndUser(mirrorboard, user);

    expect(ability.can('update', 'Mirrorboard', 'isPromoted')).toBe(true);
  });

  test('not able to promote by Standard User', () => {
    const mirrorboard = mocks.mirrorboard.getMirrorboard();

    const user = mocks.user.getUser({
      isSuperAdmin: false,
    });

    const ability = defineAbilityForMirrorboardAndUser(mirrorboard, user);

    expect(ability.can('update', 'Mirrorboard', 'isPromoted')).toBe(false);
  });
});
