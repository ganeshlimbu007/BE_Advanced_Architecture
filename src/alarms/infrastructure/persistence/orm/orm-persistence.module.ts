import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { OrmAlarmRepository } from './repositories/alarm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AlarmRepository])],
  controllers: [],
  providers: [{ provide: AlarmRepository, useClass: OrmAlarmRepository }],
  exports: [AlarmRepository],
})
export class OrmPersistenceModule {}
