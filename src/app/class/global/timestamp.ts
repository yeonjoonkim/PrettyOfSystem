export class Timestamp {
  readonly seconds: number;
  readonly nanoseconds: number;

  constructor(seconds: number, nanoseconds: number) {
    this.seconds = seconds;
    this.nanoseconds = nanoseconds;
  }

  static now(): Timestamp {
    const now = Date.now();
    const seconds = Math.floor(now / 1000);
    const nanoseconds = (now % 1000) * 1e6; // Convert milliseconds to nanoseconds
    return new Timestamp(seconds, nanoseconds);
  }

  static fromDate(date: Date): Timestamp {
    const seconds = Math.floor(date.getTime() / 1000);
    const nanoseconds = (date.getTime() % 1000) * 1e6; // Convert milliseconds to nanoseconds
    return new Timestamp(seconds, nanoseconds);
  }

  static fromMillis(milliseconds: number): Timestamp {
    const seconds = Math.floor(milliseconds / 1000);
    const nanoseconds = (milliseconds % 1000) * 1e6; // Convert milliseconds to nanoseconds
    return new Timestamp(seconds, nanoseconds);
  }

  toDate(): Date {
    return new Date(this.seconds * 1000 + this.nanoseconds / 1e6);
  }

  toMillis(): number {
    return this.seconds * 1000 + this.nanoseconds / 1e6;
  }

  isEqual(other: Timestamp): boolean {
    return this.seconds === other.seconds && this.nanoseconds === other.nanoseconds;
  }

  toString(): string {
    return `Timestamp(seconds=${this.seconds}, nanoseconds=${this.nanoseconds})`;
  }

  toJSON(): { seconds: number; nanoseconds: number } {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds,
    };
  }

  valueOf(): string {
    // A simple string representation for comparison purposes.
    // Adjust as necessary for your use case.
    return `${this.seconds}.${this.nanoseconds.toString().padStart(9, '0')}`;
  }
}
