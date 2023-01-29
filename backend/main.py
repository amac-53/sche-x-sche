from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

import crud, models, schemas
from database import SessionLocal, engine
import calculate_reservation

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    予約状態を確認し，予定が合えばその開始・終了時刻を返す．
    もしなければ，nullを返す．
    メンバー全員が返信をしていなければ，falseを返す．
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

    # タスクが行える時間計測
    res = calculate_reservation.reserved_time(reservations_by_task)

    return res