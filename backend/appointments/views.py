from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from django.db import IntegrityError
from .models import Appointment
from .serializers import AppointmentSerializer

class AppointmentCreateView(generics.CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated] # Ensure only logged-in users can book

    def perform_create(self, serializer):
        try:
            # Associate the appointment with the currently authenticated user
            serializer.save(patient=self.request.user)
        except IntegrityError:
            raise ValidationError({
                "detail": "This time slot is already booked for the selected doctor or by you."
            })
