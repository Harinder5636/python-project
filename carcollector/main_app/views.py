from django.shortcuts import render, redirect
from .models import Car, Part
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from .forms import ReservationForm





class CarCreate(CreateView):
    model = Car
    fields = ['model', 'brand', 'horsepower', 'year']
    success_url = '/cars/'

class CarUpdate(UpdateView):
    model = Car
    fields = ['brand', 'horsepower', 'year']

class CarDelete(DeleteView):
    model = Car
    success_url = '/cars/'


def home(request):
  return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def cars_index(request):
    cars = Car.objects.all()
    return render(request, 'cars/index.html', {'cars': cars})
    
def cars_detail(request, car_id):
    car = Car.objects.get(id=car_id)
    parts_car_doesnt_have = Part.objects.exclude(id__in = car.parts.all().values_list('id'))
    reservation_form = ReservationForm()
    return render(request, 'cars/detail.html', { 
        'car': car, 'reservation_form': reservation_form, 'parts': parts_car_doesnt_have
     })

def add_reservation(request, car_id):
    form = ReservationForm(request.POST)
    if form.is_valid():
        new_Reservation = form.save(commit=False)
        new_Reservation.car_id = car_id
        new_Reservation.save()
    return redirect('detail', car_id=car_id)


def assoc_part(request, car_id, part_id):
    Car.objects.get(id=car_id).parts.add(part_id)
    return redirect('detail', car_id=car_id)

def unassoc_part(request, car_id, part_id):
    Car.objects.get(id=car_id).parts.remove(part_id)
    return redirect('detail', car_id=car_id)


class PartList(ListView):
    model = Part

class PartDetail(DetailView):
    model = Part

class PartCreate(CreateView):
    model = Part
    fields = '__all__'
    success_url = '/parts/'

class PartUpdate(UpdateView):
    model = Part
    fields = ['name', 'size']
    success_url = '/parts/'

class PartDelete(DeleteView):
    model = Part
    success_url = '/parts/'