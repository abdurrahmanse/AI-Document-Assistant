import os
from celery import Celery
from app.core.config import settings

# Initialize Celery app
celery_app = Celery(
    "ai_document_worker",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL,
    include=["app.infrastructure.jobs.tasks.document_processing"]
)

# Optional configuration
celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
    task_track_started=True,
    worker_prefetch_multiplier=1, # Important for long-running AI tasks
)
