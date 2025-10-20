export class AlarmSeverity {
  constructor(private readonly value: 'critical' | 'high' | 'medium' | 'low') {}

  equals(severity: AlarmSeverity) {
    return this.value === severity.value;
  }
}
