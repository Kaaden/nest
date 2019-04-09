import { Module } from '@nestjs/common';

import { DateScalar } from './data.service';

@Module({
  providers: [DateScalar],
  exports: [DateScalar],
})
export class ScalarsModule {}
