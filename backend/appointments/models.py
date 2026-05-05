from django.db import models
from django.conf import settings

class Appointment(models.Model):
    patient = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='appointments')
    department = models.CharField(max_length=100)
    doctor = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Prevent same patient booking same time
        unique_together = ('patient', 'date', 'time')
        # Prevent same doctor double booking
        # We could add unique_together = ('doctor', 'date', 'time') if needed, 
        # but let's keep it simple or add both.
        constraints = [
            models.UniqueConstraint(fields=['doctor', 'date', 'time'], name='unique_doctor_booking')
        ]

    def __str__(self):
        return f"{self.patient.email} - {self.doctor} - {self.date} {self.time}"
