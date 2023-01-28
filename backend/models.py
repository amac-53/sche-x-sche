from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from database import Base

# class User(Base):
#     """
#     ユーザ情報
#     """
#     __tablename__ = 'users'
    
#     id = Column(Integer, primary_key=True, index=True)
#     username = Column(String)
    
#     reservation = relationship("Reservation", back_populates="username")


class Reservation(Base):
    """
    予約情報
    """
    __tablename__ = 'reservation'

    # username = Column(String, ForeignKey("users.id"))
    username = Column(String, primary_key=True)
    taskname = Column(String)
    start_date_time = Column(DateTime, nullable=False)
    end_date_time = Column(DateTime, nullable=False)
    
    # user = relationship("User", back_populates="id")



