import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  imports: [ReactiveFormsModule],
  templateUrl: './kontakt.html',
  styleUrl: './kontakt.css',
})
export class Kontakt {
  private readonly fb = inject(FormBuilder);

  readonly submitted = signal(false);
  readonly submitting = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['beratung'],
    message: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
      this.form.reset({ subject: 'beratung' });

      setTimeout(() => this.submitted.set(false), 3000);
    }, 1000);
  }
}
