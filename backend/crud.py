from sqlalchemy.orm import Session
import models, schemas

def get_reservations(db: Session, skip: int = 0, limit: int = 100):
    """
    全員分の予約時間を取得
    """
    return db.query(models.Reservation).offset(skip).limit(limit).all()


def get_reservation_by_task(db: Session, taskname: str):
    """
    予約状態を取得
    """
    return db.query(models.Reservation).filter(models.Reservation.taskname == taskname).all()


def create_reservation(db: Session, reservation: schemas.CreateReservation):
    """
    個人の予約作成
    """
    db_reservation = models.Reservation(**reservation.dict())
    db.add(db_reservation)
    db.commit()
    db.refresh(db_reservation)
    return db_reservation