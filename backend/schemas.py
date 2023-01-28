from typing import Union
from pydantic import BaseModel
import datetime


class ReservationBase(BaseModel):
    username: str
    taskname: str
    start_date_time: datetime.datetime
    end_date_time: datetime.datetime

class CreateReservation(ReservationBase):
    pass

class Reservation(ReservationBase):
    class Config:
        orm_mode = True

# class UserBase(BaseModel):    
#     username: str

# class UserCreate(UserBase):
#     pass

# class User(UserBase):
#     id: int
