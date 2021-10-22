from django.db import models
from django.urls import reverse
from datetime import date
# Create your models here.





TIMES = (
    ('M', 'Morning'),
	('A', 'Afternoon'),
	('N', 'Night'),
)

class Part(models.Model):
    name = models.CharField(max_length=50)
    size = models.CharField(max_length=20)
    
    
    def __str__(self):
        return self.name
        
    def get_absolute_url(self):
        return reverse('Parts_detail', kwargs={'pk': self.id})





class Car(models.Model):
    model = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    horsepower = models.IntegerField()
    year = models.IntegerField()
    parts = models.ManyToManyField(Part)

    def __str__(self):
        return self.model

    def get_absolute_url(self):
        return reverse('detail', kwargs={'car_id': self.id})
    
    def res_for_today(self):
        return self.reservation_set.filter(date=date.today()).count() >= len(TIMES)


class Reservation(models.Model):
  date = models.DateField('Reservation date')
  time = models.CharField(
    max_length=1,
    choices=TIMES,
    default=TIMES[0][0]
  )

  car = models.ForeignKey(Car, on_delete=models.CASCADE)

  def __str__(self):
    # Nice method for obtaining the friendly value of a Field.choice
    return f"{self.get_time_display()} on {self.date}"


class Meta:
    ordering = ['-date']