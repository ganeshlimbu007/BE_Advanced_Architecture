export class CreateAlarmCommand {
  constructor(
    public readonly name,
    public readonly severity: string,
  ) {}
}
