import aioboto3
import os
import uuid
from typing import BinaryIO, AsyncGenerator
from fastapi import UploadFile

from app.core.config import settings
from loguru import logger

class S3StorageService:
    def __init__(self):
        self.session = aioboto3.Session(
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
            region_name=settings.AWS_REGION or "us-east-1"
        )
        self.bucket = settings.S3_BUCKET_NAME
        self.endpoint_url = settings.S3_ENDPOINT_URL

    async def upload_file(self, file: UploadFile, prefix: str = "documents") -> str:
        """
        Uploads a FastAPI UploadFile to S3 and returns the storage key.
        """
        if not self.bucket:
            logger.warning("S3_BUCKET_NAME is not set, skipping actual upload.")
            # For local dev without S3, just return a fake key
            return f"{prefix}/{uuid.uuid4()}_{file.filename}"

        key = f"{prefix}/{uuid.uuid4()}_{file.filename}"
        
        try:
            async with self.session.client("s3", endpoint_url=self.endpoint_url) as s3:  # type: ignore
                await s3.upload_fileobj(
                    file.file, 
                    self.bucket, 
                    key,
                    ExtraArgs={"ContentType": file.content_type}
                )
            logger.info(f"Successfully uploaded {key} to {self.bucket}")
            return key
        except Exception as e:
            logger.error(f"Failed to upload {file.filename} to S3: {e}")
            raise
            
    async def get_file_url(self, key: str, expires_in: int = 3600) -> str:
        """
        Generates a presigned URL for a given object key.
        """
        if not self.bucket:
            return f"http://mock-storage/{self.bucket}/{key}"
            
        try:
            async with self.session.client("s3", endpoint_url=self.endpoint_url) as s3:  # type: ignore
                url = await s3.generate_presigned_url(
                    'get_object',
                    Params={'Bucket': self.bucket, 'Key': key},
                    ExpiresIn=expires_in
                )
            return url
        except Exception as e:
            logger.error(f"Failed to generate presigned URL for {key}: {e}")
            raise
            
    async def delete_file(self, key: str) -> None:
        """
        Deletes a file from S3.
        """
        if not self.bucket:
            return
            
        try:
            async with self.session.client("s3", endpoint_url=self.endpoint_url) as s3:  # type: ignore
                await s3.delete_object(Bucket=self.bucket, Key=key)
            logger.info(f"Successfully deleted {key} from {self.bucket}")
        except Exception as e:
            logger.error(f"Failed to delete {key} from S3: {e}")
            raise
