from django.contrib import admin

from .models import Car, Reservation, Part
# Register your models here.

admin.site.register(Car)
admin.site.register(Reservation)
admin.site.register(Part)