import { Injectable } from '@nestjs/common';
import { CreateAlarmDto } from '../presenters/http/dto/create-alarm.dto';
//
import { CreateAlarmCommand } from './commands/create-alarm.command';

@Injectable()
export class AlarmsService {
  create(createAlarmDto: CreateAlarmDto) {
    return new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.severity);
  }

  findAll() {
    return `This action returns all alarms`;
  }

  /*   findOne(id: number) {
    return `This action returns a #${id} alarm`;
  }

  update(id: number, updateAlarmDto: UpdateAlarmDto) {
    return `This action updates a #${id} alarm`;
  }

  remove(id: number) {
    return `This action removes a #${id} alarm`;
  } */
}
