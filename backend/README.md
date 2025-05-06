# 🐄 Ground Cow - Backend

The backend is built with [FastAPI](https://fastapi.tiangolo.com/), [Python](https://www.python.org/) and [Pydantic](https://docs.pydantic.dev/).

## 🔧 Setup

```bash
cd backend
uv venv
```

## 💻 Development

```bash
# Run the database
docker compose -f docker-postgresql.yml up -d

# Run the backend
cd backend
uv sync
uv run fastapi run --reload app/main.py
```

When the application is running, you can access the application at 
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 🧪 Testing

```bash
# Run all tests
uv run pytest

# Run with coverage report (ignore folder in ui folder)
uv run pytest --cov=app

# Run a specific test file
uv run pytest test/unit/example.test.ts
```

## ✨ Linting

```bash
uv run ruff format
```

## 📦 Database Migrations

```bash
# Create a new migration
alembic revision --autogenerate -m "message"

# Apply migrations
alembic upgrade head
```
