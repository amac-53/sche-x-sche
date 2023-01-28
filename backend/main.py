from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import crud, models, schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/reservation/", response_model=schemas.Reservation)
async def create_reservation(reservation: schemas.CreateReservation, db: Session = Depends(get_db)):
    """
    予約を作成
    """
    return crud.create_reservation(db, reservation)


@app.get("/reservations/", response_model=list[schemas.Reservation])
async def read_reservations(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    予約を参照する
    """
    reservations = crud.get_reservations(db, skip=skip, limit=limit)
    return reservations


@app.get("/reservation_check/")
async def reservation_check(taskname: str, db: Session = Depends(get_db)):
    """
    逐一予約状態を確認
    """
    reservations_by_task = crud.get_reservation_by_task(db, taskname)

    name_list = []
    for reservation_by_task in reservations_by_task:
        name: str = reservation_by_task.username
        if name not in name_list:
            name_list.append(name)
        print(reservation_by_task.username)

    if len(name_list) != reservation_by_task.reservation_num: 
        return False

    return True