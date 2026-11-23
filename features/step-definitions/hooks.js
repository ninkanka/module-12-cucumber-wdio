import { Before } from '@wdio/cucumber-framework';
import '../../src/setup/chai.js';
import { clearSession } from '../../src/utils/sessionHelper.js';

Before(async () => {
    await clearSession();
});
