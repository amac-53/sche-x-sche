from sqlalchemy.orm import Session
import models, schemas

def get_reservations(db: Session, skip: int = 0, limit: int = 100):
    """
    全員分の予約時間を取得
    """
    return db.query(models.Reservation).offset(skip).limit(limit).all()


def create_reservation(db: Session, reservation: schemas.CreateReservation):
    """
    個人の予約作成
    """
    db_reservation = models.Reservation(**reservation.dict())
    db.add(db_reservation)
    db.commit()
    db.refresh(db_reservation)
    return db_reservation


# def create_user(db: Session, user: schemas.UserCreate):
#     """
#     ユーザ作成
#     """
#     db_user = models.User(username=user.username)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user
