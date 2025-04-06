from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from ..models.models import User
from ..schema.user import UserCreate, UserUpdate, UserPublic, UsersPublic
from ..db import get_session
from typing import List
from datetime import datetime

user_router = APIRouter()


@user_router.get("/", response_model=UsersPublic)
def list_users(session: Session = Depends(get_session)) -> UsersPublic:
    """
    Get all users.
    """
    users = session.exec(select(User)).all()
    return UsersPublic(
        data=[UserPublic.model_validate(user) for user in users],
        count=len(users),
    )


@user_router.get("/{user_id}", response_model=UserPublic)
def get_user(user_id: int, session: Session = Depends(get_session)) -> UserPublic:
    """
    Get a specific user by ID.
    """
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@user_router.post("/", response_model=UserPublic)
def create_user(
    user_in: UserCreate, session: Session = Depends(get_session)
) -> UserPublic:
    """
    Create a new user.
    """
    user = User.model_validate(user_in)
    session.add(user)
    session.commit()
    session.refresh(user)
    return user


@user_router.patch("/{user_id}", response_model=UserPublic)
def update_user(
    user_id: int,
    user_in: UserUpdate,
    session: Session = Depends(get_session),
) -> UserPublic:
    """
    Update a user's information.
    """
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    update_dict = user_in.model_dump(exclude_unset=True)
    user.sqlmodel_update(update_dict)

    session.add(user)
    session.commit()
    session.refresh(user)
    return user


@user_router.delete("/{user_id}")
def delete_user(user_id: int, session: Session = Depends(get_session)) -> dict:
    """
    Delete a user by ID.
    """
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    session.delete(user)
    session.commit()
    return {"message": f"User {user_id} deleted successfully"}
