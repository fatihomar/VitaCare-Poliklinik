from rest_framework import serializers
from .models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'patient', 'department', 'doctor', 'date', 'time', 'notes', 'created_at']
        read_only_fields = ['id', 'patient', 'created_at']

    def validate(self, attrs):
        # We can add custom validation here, e.g., checking if the date is in the past
        return attrs
