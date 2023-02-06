from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from database import Base

class Reservation(Base):
    """
    予約情報
    """
    __tablename__ = 'reservation'

    username = Column(String, primary_key=True)
    taskname = Column(String)
    reservation_num = Column(Integer)
    start_date_time = Column(DateTime, nullable=False)
    end_date_time = Column(DateTime, nullable=False)